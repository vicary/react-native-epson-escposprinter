// Polyfill for React Native
//
// RN 0.67 is too old for `??=` and bob only does "last 2 versions"
// https://callstack.github.io/react-native-builder-bob/build#commonjs
if (!Promise.withResolvers) {
  Promise.withResolvers = <T>() => {
    let resolve: (value: T | PromiseLike<T>) => void;
    let reject: (
      reason?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any,
    ) => void;
    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve: resolve!, reject: reject! };
  };
}

/**
 * A queue implementation that allows for adding and removing elements, with optional waiting when
 * popping elements from an empty queue.
 *
 * ```ts
 * import { assertEquals } from "@std/assert";
 * import { Queue } from "@core/asyncutil/queue";
 *
 * const queue = new Queue<number>();
 * queue.push(1);
 * queue.push(2);
 * queue.push(3);
 * assertEquals(await queue.pop(), 1);
 * assertEquals(await queue.pop(), 2);
 * assertEquals(await queue.pop(), 3);
 * ```
 */
export class Queue<T extends NonNullable<unknown> | null> {
  #resolves: (() => void)[] = [];
  #items: T[] = [];

  /**
   * Gets the number of items in the queue.
   */
  get size(): number {
    return this.#items.length;
  }

  /**
   * Returns true if the queue is currently locked.
   */
  get locked(): boolean {
    return this.#resolves.length > 0;
  }

  /**
   * Adds an item to the end of the queue and notifies any waiting consumers.
   */
  push(value: T): void {
    this.#items.push(value);
    this.#resolves.shift()?.();
  }

  /**
   * Removes the next item from the queue, optionally waiting if the queue is currently empty.
   *
   * @returns A promise that resolves to the next item in the queue.
   */
  async pop({ signal }: { signal?: AbortSignal } = {}): Promise<T> {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      signal?.throwIfAborted();

      const value = this.#items.shift();
      if (value !== undefined) {
        return value;
      }

      const { promise, resolve, reject } = Promise.withResolvers<void>();

      signal?.addEventListener("abort", () => reject(signal.reason), {
        once: true,
      });

      this.#resolves.push(resolve);

      await promise;
    }
  }
}
