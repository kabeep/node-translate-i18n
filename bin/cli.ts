#!/usr/bin/env node
import readline from 'node:readline';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import pipeline, { locale } from '../src/index.js';

import type { ArgumentVector } from '../src/shared/index.js';

if (process.platform === 'win32') {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.on('SIGINT', function () {
        process.emit('SIGINT');
    });
}

process.on('SIGINT', function () {
    process.exit(0);
});

const program = yargs(hideBin(process.argv));
pipeline(
    program
        .scriptName('localize')
        .usage(locale.CMD_DES_USAGE)
        .demandCommand(1, 1)
        .options('to', {
            alias: 't',
            type: 'array',
            desc: locale.CMD_DES_TO,
            demandOption: true,
        })
        .options('rewrite', {
            alias: 'r',
            type: 'boolean',
            desc: locale.CMD_DES_REWRITE,
            boolean: true,
            default: false,
        })
        .alias({
            v: 'version',
            h: 'help',
        })
        .example('localize ./en-US.ts -t zh-CN -r', locale.CMD_DES_REWRITE_DIFF)
        .example('localize ./en-US.js -t zh-CN', locale.CMD_DES_JS)
        .example('localize ./en-US.ts -t zh-CN', locale.CMD_DES_TS)
        .example('localize ./en-US.json -t zh-CN', locale.CMD_DES_JSON)
        .parse() as ArgumentVector,
)
    .then(() => {
        process.exit(0);
    })
    .catch((error: unknown) => {
        console.log(`${error}`);
        process.exit(1);
    });
