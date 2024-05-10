import { expect, test } from 'vitest';
import Warn from '../../src/utils/warn';

test('Warn - toString() method should return the formatted warning message', () => {
    const warn = new Warn('This is a warning message.');
    const result = warn.toString();
    const expected =
        ' \u001b[38;2;17;15;24m\u001b[48;2;255;202;133m Warn \u001b[49m\u001b[39m This is a warning message.';
    expect(result).toBe(expected);
});
