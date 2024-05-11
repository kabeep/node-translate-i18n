import { expect, test } from 'vitest';
import read from '../../src/helper/read';

test('read - should read and parse file content correctly', () => {
    const filepath = './test/helper/read-write.spec.data.ts';
    const result = read(filepath);

    expect(result.length).toBe(3);

    expect(result[0]).toEqual({
        original: 'export default {',
        key: '',
        value: '',
        toTrans: false,
        lineNumber: 0,
        status: true,
    });
    expect(result[1]).toEqual({
        original: "    CMD_DES_TEST: 'This is a test message.',",
        key: 'CMD_DES_TEST',
        value: 'This is a test message.',
        toTrans: true,
        lineNumber: 1,
        status: true,
    });
    expect(result[2]).toEqual({
        original: '};',
        key: '',
        value: '',
        toTrans: false,
        lineNumber: 2,
        status: true,
    });
});
