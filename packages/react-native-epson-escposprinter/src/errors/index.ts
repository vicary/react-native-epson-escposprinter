import { getCallbackError } from "./CallbackError";
import { getPrinterError } from "./PrinterError";

export * from "./CallbackError";
export * from "./PrinterError";

export const getEpsonError = (
  error: unknown,
  messages: Record<number, string | undefined> = {},
) => {
  const CODE_CALLBACK = "EpsonCallbackError";
  // const CODE_ERROR = "EpsonPrinterError";

  if (error instanceof Error || (typeof error === "object" && error !== null)) {
    const type = Reflect.get(error, "code");
    const code = Reflect.get(error, "message") | 0; // Cast to number

    console.error({ type, code });

    if (type === CODE_CALLBACK) {
      return getCallbackError(code, messages[code]);
    } else {
      return getPrinterError(code, messages[code]);
    }
  }

  return null;
};
