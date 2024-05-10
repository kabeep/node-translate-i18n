import fs from 'node:fs';
import path from 'node:path';
import { currentWorkDirectory } from '../shared/index.js';

function check(filepath: string) {
    return fs.existsSync(path.resolve(currentWorkDirectory, filepath));
}

export default check;
