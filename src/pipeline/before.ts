import { check, read, trace } from '../helper/index.js';
import locale from '../locale/index.js';
import { type ArgumentVector, type Context } from '../shared/index.js';
import { getCode, withBoundary } from '../utils/index.js';

export interface CodeOption {
    code: string;
    shorten?: string;
}

function before({ _, to }: Pick<ArgumentVector, '_' | 'to'>, context: Context) {
    if (!check(_[0])) {
        throw new Error(`${locale.CMD_ERR_FILE_NOT_FOUND} - ${_[0]}`);
    }

    const { prefix, suffix, filepath, directory, extension } = trace(_[0]);
    if (!['.js', '.ts', '.json'].includes(extension)) {
        throw new Error(`${locale.CMD_ERR_INVALID_EXTENSION} - ${extension}`);
    }

    context.directory = directory;
    context.extension = extension.slice(1) as 'js' | 'ts' | 'json';
    context.suffix = suffix;

    const from = getCode(prefix, { detect: true, shorten: true });
    if (!from) {
        throw new Error(`${locale.CMD_ERR_INVALID_CODE} - from`);
    }

    context.code = from;

    if (!Array.isArray(to)) {
        throw new TypeError(`${locale.CMD_ERR_ILLEGAL_ARGUMENT}: to`);
    }

    if (to.length === 0) {
        throw new Error(`${locale.CMD_ERR_EMPTY}: to`);
    }

    const options: CodeOption[] = [];
    for (const code of to.filter((code) => code !== from)) {
        const shorten = getCode(code, { shorten: true });
        options.push({ code, shorten });
    }

    if (options.length === 0) {
        throw new Error(`${locale.CMD_ERR_INVALID_CODE} - to`);
    }

    const source = read(filepath);

    return { source, options };
}

export default withBoundary(before);
