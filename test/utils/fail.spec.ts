import { expect, test } from 'vitest';
import Fail from '../../src/utils/fail';

test('Fail - toString() method should return the formatted fail message', () => {
    const fail = new Fail('This is a failing message.');
    const result = fail.toString();
    expect(result).toContain('Fail');
    expect(result).toContain('This is a failing message.');
});
