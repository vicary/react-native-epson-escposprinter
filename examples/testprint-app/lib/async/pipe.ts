export type IteratorType<T> = T extends Iterable<infer U> ? U
  : T extends Iterator<infer U> ? U
  : T extends AsyncIterable<infer U> ? U
  : T extends AsyncIterator<infer U> ? U
  : T extends Generator<infer U> ? U
  : T extends AsyncGenerator<infer U> ? U
  : T extends (...args: any[]) => Generator<infer U> ? U
  : T extends (...args: any[]) => AsyncGenerator<infer U> ? U
  : never;

export type AsyncIterablePipeInput<T> = T extends AsyncIterablePipe<infer U> ? U
  : never;

export type AsyncIterablePipeOutput<T> = T extends
  AsyncIterablePipe<unknown, infer U> ? U
  : never;

export type AsyncIterablePipe<Input, Output = Input, Return = unknown> = (
  it: AsyncIterable<Input, Return> | Iterable<Input, Return>,
) => AsyncIterableIterator<Output, Return>;
