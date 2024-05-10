import { iso6391X } from '@kabeep/node-translate';
import { localeCode, shortenLocaleCode } from '../shared/index.js';

function getCode(code?: unknown, { detect = false, shorten = false } = {}) {
    if ((!code || code === 'auto') && detect) return shorten ? shortenLocaleCode : localeCode;
    if (typeof code !== 'string') return undefined;

    const isOriginalValid = iso6391X.validate(code);
    if (isOriginalValid) return code;

    const shortenCode = shorten ? code.split('-')[0] : code;
    const isShortenValid = iso6391X.validate(shortenCode);
    if (isShortenValid) return shortenCode;

    return undefined;
}

export default getCode;
