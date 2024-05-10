import fs from 'node:fs';
import type { LocaleOption } from '../shared/index.js';

function write(filepath: string, options: LocaleOption[]) {
    const list = options.map((item) => item.original);

    fs.writeFileSync(filepath, list.join('\n'));
}

export default write;
