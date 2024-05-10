import { Fail } from './index.js';

type BoundaryFunction<T extends unknown[], U> = ((...arguments_: T) => U) | ((...arguments_: T) => Promise<U>);

function withBoundary<T extends unknown[] = unknown[], U = unknown>(function_: BoundaryFunction<T, U>) {
    return async (...arguments_: T): Promise<U | Fail> => {
        try {
            return await function_(...arguments_);
        } catch (error: unknown) {
            return new Fail(error as Error);
        }
    };
}

export default withBoundary;
