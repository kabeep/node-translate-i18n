import { type ArgumentVector, store } from '../shared/index.js';
import { isError } from '../utils/index.js';
import before from './before.js';
import run from './run.js';

async function pipeline(argv: ArgumentVector) {
    const { _, to, rewrite } = argv;
    store.rewrite = rewrite;

    const preset = await before({ _, to }, store);
    if (isError(preset)) {
        throw preset;
    }

    const result = await run(preset, store);
    if (isError(result)) {
        throw result;
    }
}

export default pipeline;
