import { expect, test } from 'vitest';
import Fail from '../../src/utils/fail';
import withBoundary from '../../src/utils/with-boundary';

test('boundary - should return a Fail object when the inner function throws an error', async () => {
    function innerFunction() {
        throw new Error('Test error');
    }

    const wrappedFunction = withBoundary(innerFunction);

    const result = await wrappedFunction();

    expect(result).toStrictEqual(new Fail('Test error'));
});
