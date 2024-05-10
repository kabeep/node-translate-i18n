import fs from 'node:fs';
import path from 'node:path';
import logSymbols from 'log-symbols';
import ora from 'ora';
import { read, trans, write } from '../helper/index.js';
import locale from '../locale/index.js';
import type { Context, LocaleOption } from '../shared/index.js';
import { withBoundary } from '../utils/index.js';
import type { CodeOption } from './before.js';

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

        const targetFilename = `${code}${suffix}.${extension}`;
        const targetFilepath = path.resolve(directory, targetFilename);

        const list = source.map((option) => {
            if (!option.toTrans || rewrite) return option;

            const targetOptions = fs.existsSync(targetFilepath) ? read(targetFilepath) : [];
            const current = targetOptions.find((item) => item.key === option.key);
            if (!current) return option;

            return {
                ...option,
                original: current.original,
                value: current.value,
                toTrans: false,
            };
        });

        const { count, lines } = await trans(from, to, list);
        if (lines.length !== source.length) {
            spinner.fail(`${locale.CMD_ERR_TRANSLATE} - ${code}`);
            continue;
        }

        spinner.text = `${locale.CMD_ORA_WRITE} - ${targetFilename}`;
        const suffixText = `(${count}/${length})`;
        spinner.suffixText = suffixText;

        const isPartial = count !== length;
        if (isPartial) {
            spinner.color = 'yellow';
        }

        write(path.resolve(directory, targetFilename), lines);

        spinner.stopAndPersist({
            symbol: isPartial ? logSymbols.warning : logSymbols.success,
            text: `${locale.CMD_ORA_SUCCESS} - ${targetFilename}`,
            suffixText,
        });
    }
}

export default withBoundary(run);
