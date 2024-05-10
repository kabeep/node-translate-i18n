import { osLocaleSync } from 'os-locale';

const localeCode = osLocaleSync();

export const shortenLocaleCode = localeCode.split('-')[0];

export default localeCode;
