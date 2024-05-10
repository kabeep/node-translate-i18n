import { expect, test } from 'vitest';
import trace from '../../src/helper/trace';

test('trace - should return correct path information', () => {
    const relativePath = '../test/helper/trace.spec.ts';
    const result = trace(relativePath);

    expect(result.prefix).toBe('trace');
    expect(result.suffix).toBe('.spec');
    expect(result.filename).toBe('trace.spec');
    expect(result.fullName).toBe('trace.spec.ts');
    expect(result.relativePath).toBe(relativePath);
    expect(result.extension).toBe('.ts');
});

test('trace - should return empty suffix if filename has no extension', () => {
    const relativePath = './gitignore';
    const result = trace(relativePath);

    expect(result.prefix).toBe('gitignore');
    expect(result.suffix).toBe('');
    expect(result.filename).toBe('gitignore');
    expect(result.fullName).toBe('gitignore');
    expect(result.relativePath).toBe(relativePath);
    expect(result.extension).toBe('');
});
