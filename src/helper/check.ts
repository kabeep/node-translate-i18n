import fs from 'node:fs';
import trace from './trace.js';

function check(relativePath: string) {
    try {
        const { filepath } = trace(relativePath);
        return fs.existsSync(filepath);
    } catch {
        return false;
    }
}

export default check;
