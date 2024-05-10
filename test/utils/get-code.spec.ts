import { osLocaleSync } from 'os-locale';
import { expect, test } from 'vitest';
import getCode from '../../src/utils/get-code';

test('getCode - should return undefined if code is undefined or not a string', () => {
    expect(getCode(undefined)).toBe(undefined);
    expect(getCode(null)).toBe(undefined);
    expect(getCode(123)).toBe(undefined);
    expect(getCode([])).toBe(undefined);
    expect(getCode({})).toBe(undefined);
});

test('getCode - should return shortened locale code if shorten parameter is true', () => {
    expect(getCode('en-US', { shorten: true })).toBe('en');
});

test('getCode - should return full locale code if shorten parameter is false or not provided and code is valid', () => {
    expect(getCode('en')).toBe('en');
    expect(getCode('fr', { shorten: false })).toBe('fr');
});

test('getCode - should return undefined if code is not valid', () => {
    expect(getCode('invalid')).toBe(undefined);
});

test('getCode - should return os locale if code is detect parameter is true', () => {
    expect(getCode(undefined, { detect: true })).toBe(osLocaleSync());
    expect(getCode('auto', { detect: true, shorten: true })).toBe(osLocaleSync().split('-')[0]);
});
