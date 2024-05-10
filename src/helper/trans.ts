import translate from '@kabeep/node-translate';
import type { LocaleOption } from '../shared/index.js';

async function task(from: string, to: string, option: LocaleOption) {
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
    const tasks = source.map((option) => async () => task(from, to, option));

    let count = 0;
    const lines: LocaleOption[] = [];
    await Promise.allSettled(tasks.map(async (task) => task())).then((settledPromises) => {
        for (const settledPromise of settledPromises) {
            if (settledPromise.status === 'fulfilled') {
                lines.push(settledPromise.value);
                settledPromise.value.toTrans && count++;
            } else {
                lines.push(source[lines.length]);
            }
        }
    });

    return { count, lines };
}

export default trans;
