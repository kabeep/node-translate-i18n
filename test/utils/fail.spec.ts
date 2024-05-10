import { expect, test } from 'vitest';
import Fail from '../../src/utils/fail';

test('Fail - toString() method should return the formatted fail message', () => {
    const fail = new Fail('This is a failing message.');
    const result = fail.toString();
    const expected =
        ' \u001b[38;2;17;15;24m\u001b[48;2;255;103;103m Fail \u001b[49m\u001b[39m This is a failing message.';
    expect(result).toBe(expected);
});
