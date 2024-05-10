const fs = require('node:fs');
import { expect, test } from 'vitest';
import write from '../../src/helper/write';

test('write - should write options to file correctly', () => {
    const filepath = './test/helper/read-write.spec.data.ts';
    const options = [
        {
            original: 'export default {',
            key: '',
            value: '',
            toTrans: false,
            lineNumber: 0,
        },
        {
            original: "    CMD_DES_TEST: 'This is a test message.',",
            key: 'CMD_DES_TEST',
            value: 'This is a test message.',
            toTrans: true,
            lineNumber: 1,
        },
        {
            original: '};',
            key: '',
            value: '',
            toTrans: false,
            lineNumber: 2,
        },
    ];

    write(filepath, options);

    const content = fs.readFileSync(filepath, 'utf8');
    const expectedContent = options.map((item) => item.original).join('\n');
    expect(content).toBe(expectedContent);
});
