import path from 'node:path';
import logSymbols from 'log-symbols';
import ora from 'ora';
import { trace, write } from '../helper/index.js';
import locale from '../locale/index.js';
import type { Context, LocaleOption } from '../shared/index.js';
import { isError, withBoundary } from '../utils/index.js';
import type { CodeOption } from './before.js';
import task from './task.js';

interface Options {
    source: LocaleOption[];
    options: CodeOption[];
}

async function run({ source, options }: Options, context: Context) {
    const { length } = source.filter((item) => item.toTrans);
    const { rewrite, code: from, directory, suffix, extension } = context;

    for (const { code, shorten: to } of options) {
        const spinner = ora({ text: `${locale.CMD_ORA_TRANSLATE} - ${code}`, color: 'blue' }).start();
        if (!to) {
            spinner.fail(`${locale.CMD_ERR_INVALID_CODE} - ${code}`);
            continue;
        }

        const { fullName: targetName, filepath: targetPath } = trace(
            path.resolve(directory, `${code}${suffix}.${extension}`),
        );
        const lines = await task({
            rewrite,
            targetPath,
            source,
            from,
            to,
        });

        if (isError(lines)) {
            spinner.fail(`${lines.message} - ${code}`);
            continue;
        }

        if (lines.length !== source.length) {
            spinner.fail(`${locale.CMD_ERR_TRANSLATE} - ${code}`);
            continue;
        }

        spinner.text = `${locale.CMD_ORA_WRITE} - ${targetName}`;

        let count = 0;
        const failures: string[] = [];
        for (const item of lines) {
            if (!item.toTrans) continue;
            count++;
            !item.status && failures.push(item.key);
        }

        const failCount = failures.length;
        const suffixText = `(${count - failCount}/${length})`;
        const status = failCount ? (failCount === count ? 'error' : 'warning') : 'success';

        write(targetPath, lines);

        spinner.stopAndPersist({
            symbol: logSymbols[status],
            text: `${status === 'error' ? locale.CMD_ORA_FAILURE : locale.CMD_ORA_SUCCESS} - ${targetName}`,
            suffixText,
        });
    }
}

export default withBoundary(run);
