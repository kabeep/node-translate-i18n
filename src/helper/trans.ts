import translate from '@kabeep/node-translate';
import type { LocaleOption } from '../shared/index.js';

async function handleTrans(from: string, to: string, option: LocaleOption) {
    if (!option.toTrans || !option.value) return option;

    const translation = await translate(option.value, { from, to, retry: 2 });
    const result = translation.text.replace(/'/g, "\\'").replace(/"/g, '\\"');

    return {
        ...option,
        original: option.original.replace(option.value, result),
        value: result,
    };
}

async function trans(from: string, to: string, source: LocaleOption[]) {
    const tasks = source.map((option) => async () => handleTrans(from, to, option));

    const lines: LocaleOption[] = [];
    await Promise.allSettled(tasks.map(async (task) => task())).then((settledPromises) => {
        for (const settledPromise of settledPromises) {
            if (settledPromise.status === 'fulfilled') {
                lines.push(settledPromise.value);
            } else {
                lines.push({ ...source[lines.length], status: false });
            }
        }
    });

    return lines;
}

export default trans;
