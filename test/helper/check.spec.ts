import { expect, test } from 'vitest';
import check from '../../src/helper/check';

test('check - should return true if file exists', () => {
    const relativePath = './test/helper/check.spec.ts';
    const result = check(relativePath);
    expect(result).toBe(true);
});

test('check - should return false if file does not exist', () => {
    const relativePath = './test/helper/check.ts';
    const result = check(relativePath);
    expect(result).toBe(false);
});

test('check - should return false if relative path is invalid', () => {
    const relativePath = undefined;
    const result = check(relativePath);
    expect(result).toBe(false);
});
