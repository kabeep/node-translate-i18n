import path from 'node:path';
import { currentWorkDirectory } from '../shared/index.js';

function trace(relativePath: string) {
    const fullPath = path.resolve(currentWorkDirectory, relativePath);
    const filepath = path.normalize(fullPath);
    const directory = path.dirname(filepath);
    const extension = path.extname(relativePath);
    const fullName = path.basename(relativePath);
    const filename = path.basename(relativePath, extension);

    const [prefix, ...restName] = filename.split('.');
    const suffix = restName.length > 0 ? `.${restName.join('.')}` : '';

    return {
        prefix,
        suffix,
        filename,
        fullName,
        filepath,
        relativePath,
        directory,
        extension,
    };
}

export default trace;
