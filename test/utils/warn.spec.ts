import { expect, test } from 'vitest';
import Warn from '../../src/utils/warn';

test('Warn - toString() method should return the formatted warning message', () => {
    const warn = new Warn('This is a warning message.');
    const result = warn.toString();
    expect(result).toContain('Warn');
    expect(result).toContain('This is a warning message.');
});
