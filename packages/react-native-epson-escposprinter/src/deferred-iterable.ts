import {
  createDeferredIterator,
  type DeferredIterator,
  type DeferredIteratorOptions,
} from "./deferred-iterator";

Reflect.set(
  Symbol,
  "asyncIterator",
  Symbol.asyncIterator ?? Symbol.for("Symbol.asyncIterator"),
);

export interface DeferredIterableIterator<
  T,
  TReturn = unknown,
  TNext = unknown,
> extends DeferredIterator<T, TReturn, TNext> {
  [Symbol.asyncIterator](): DeferredIterableIterator<T, TReturn, TNext>;
}

export const createDeferredIterable = <
  T,
  TReturn = unknown,
  TNext = unknown,
>(
  options?: DeferredIteratorOptions,
): DeferredIterableIterator<T, TReturn, TNext> => {
  const iterator = createDeferredIterator<
    T,
    TReturn,
    TNext
  >(options) as DeferredIterableIterator<T, TReturn, TNext>;

  iterator[Symbol.asyncIterator] = function () {
    return this;
  };

  return iterator;
};
