import { check, read, trans } from '../helper/index.js';
import locale from '../locale/index.js';
import type { LocaleOption } from '../shared/index.js';
import { withBoundary } from '../utils/index.js';

interface Options {
    rewrite: boolean;
    targetPath: string;
    source: LocaleOption[];
    from: string;
    to: string;
}

async function task({ rewrite, targetPath, source, from, to }: Options) {
    try {
        const list = source.map((option) => {
            if (!option.toTrans || rewrite) return option;

            const targetOptions = check(targetPath) ? read(targetPath) : [];
            const current = targetOptions.find((item) => item.key === option.key);
            if (!current) return option;

            return {
                ...option,
                original: current.original,
                value: current.value,
                toTrans: false,
            };
        });

        return await trans(from, to, list);
    } catch (error) {
        const { message } = error as Error;
        switch (message) {
            case 'ETIMEDOUT': {
                throw new Error(locale.CMD_ERR_NET_TIMEOUT);
            }

            case 'ECONNRESET': {
                throw new Error(locale.CMD_ERR_NET_CONNRESET);
            }

            case 'EADDRINUSE': {
                throw new Error(locale.CMD_ERR_NET_ADDRINUSE);
            }

            case 'ECONNREFUSED': {
                throw new Error(locale.CMD_ERR_NET_CONNREFUSED);
            }

            case 'EPIPE': {
                throw new Error(locale.CMD_ERR_NET_PIPE);
            }

            case 'ENOTFOUND': {
                throw new Error(locale.CMD_ERR_NET_NOTFOUND);
            }

            case 'ENETUNREACH': {
                throw new Error(locale.CMD_ERR_NET_NETUNREACH);
            }

            case 'EAI_AGAIN': {
                throw new Error(locale.CMD_ERR_NET_AI_AGAIN);
            }

            case 'EPARSE': {
                throw new Error(locale.CMD_ERR_NET_PARSE);
            }

            case 'EVALIDATION': {
                throw new Error(locale.CMD_ERR_NET_VALIDATION);
            }

            default: {
                throw new Error(locale.CMD_ERR_NET_UNKNOWN);
            }
        }
    }
}

export default withBoundary(task);
