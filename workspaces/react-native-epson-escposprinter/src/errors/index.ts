import { getCallbackError } from "./CallbackError";
import { getPrinterError } from "./PrinterError";

export {
  CallbackAutoRecoverError,
  CallbackBatteryLowError,
  CallbackCode,
  CallbackCoverOpenError,
  CallbackCutterError,
  CallbackDeviceBusyError,
  CallbackEmptyError,
  CallbackFailureError,
  CallbackIllegalError,
  CallbackInvalidPasswordError,
  CallbackJobNotFoundError,
  CallbackJsonFormatError,
  CallbackMechanicalError,
  CallbackMemoryError,
  CallbackNoPasswordError,
  CallbackNotFoundError,
  CallbackParamError,
  CallbackPortError,
  CallbackProcessingError,
  CallbackRecoveryFailureError,
  CallbackRequestEntityTooLargeError,
  CallbackSpoolerError,
  CallbackSystemError,
  CallbackTimeoutError,
  CallbackTooManyRequestsError,
  CallbackUnrecoverableError,
  CallbackWaitRemovalError,
} from "./CallbackError";

export {
  ErrorCode,
  PrinterConnectError,
  PrinterDisconnectError,
  PrinterFailureError,
  PrinterIllegalError,
  PrinterInUseError,
  PrinterMemoryError,
  PrinterNotFoundError,
  PrinterParamError,
  PrinterProcessingError,
  PrinterRecoveryFailureError,
  PrinterTimeoutError,
  PrinterTypeInvalidError,
  PrinterUnsupportedError,
} from "./PrinterError";

export const getEpsonError = (
  error: unknown,
  messages: Record<number, string | undefined> = {},
) => {
  const CODE_CALLBACK = "EpsonCallbackError";
  // const CODE_ERROR = "EpsonPrinterError";

  if (error instanceof Error || (typeof error === "object" && error !== null)) {
    const type = Reflect.get(error, "code");
    const code = Reflect.get(error, "message") | 0; // Cast to number

    if (type === CODE_CALLBACK) {
      return getCallbackError(code, messages[code]);
    } else {
      return getPrinterError(code, messages[code]);
    }
  }

  return null;
};
