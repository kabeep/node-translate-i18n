import { shortenLocaleCode } from '../shared/index.js';
import enUS from './en-US.js';
import hiIN from './hi-IN.js';
import jaJP from './ja-JP.js';
import koKR from './ko-KR.js';
import zhCN from './zh-CN.js';

function getLocale() {
    switch (shortenLocaleCode) {
        case 'zh':
            return zhCN;
        case 'ja':
            return jaJP;
        case 'ko':
            return koKR;
        case 'hi':
            return hiIN;
        default: {
            return enUS;
        }
    }
}

export default getLocale();
