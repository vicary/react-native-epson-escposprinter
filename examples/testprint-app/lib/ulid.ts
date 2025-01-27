import { getRandomValues } from "expo-crypto";
import { monotonicFactory, ulid as ulidx } from "ulidx";

const prng = () => getRandomValues(new Uint8Array(1))[0] / 0xff;

export const monotonicUlid = monotonicFactory(prng);

export const ulid = (seedTime?: number) => ulidx(seedTime, prng);
