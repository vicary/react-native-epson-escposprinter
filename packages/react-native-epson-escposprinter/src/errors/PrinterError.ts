export const enum ErrorCode {
  ERR_PARAM = 1,
  ERR_CONNECT = 2,
  ERR_TIMEOUT = 3,
  ERR_MEMORY = 4,
  ERR_ILLEGAL = 5,
  ERR_PROCESSING = 6,
  ERR_NOT_FOUND = 7,
  ERR_IN_USE = 8,
  ERR_TYPE_INVALID = 9,
  ERR_DISCONNECT = 10,
  ERR_ALREADY_OPENED = 11,
  ERR_ALREADY_USED = 12,
  ERR_BOX_COUNT_OVER = 13,
  ERR_BOX_CLIENT_OVER = 14,
  ERR_UNSUPPORTED = 15,
  ERR_RECOVERY_FAILURE = 16,
  ERR_FAILURE = 255,
}

abstract class PrinterError extends Error {
  constructor(public readonly status: ErrorCode, message: string) {
    super(message);
  }
}

export class PrinterParamError extends PrinterError {
  constructor(message = "An invalid parameter was passed.") {
    super(ErrorCode.ERR_PARAM, message);
  }
}

export class PrinterConnectError extends PrinterError {
  constructor(message = "Failed to open the device.") {
    super(ErrorCode.ERR_CONNECT, message);
  }
}

export class PrinterTimeoutError extends PrinterError {
  constructor(
    message =
      "Failed to communicate with the devices within the specified time.",
  ) {
    super(ErrorCode.ERR_TIMEOUT, message);
  }
}

export class PrinterMemoryError extends PrinterError {
  constructor(message = "Necessary memory could not be allocated.") {
    super(ErrorCode.ERR_MEMORY, message);
  }
}

export class PrinterIllegalError extends PrinterError {
  constructor(
    message = "This API was called while no communication had been started.",
  ) {
    super(ErrorCode.ERR_ILLEGAL, message);
  }
}

export class PrinterProcessingError extends PrinterError {
  constructor(message = "Could not run the process.") {
    super(ErrorCode.ERR_PROCESSING, message);
  }
}

export class PrinterNotFoundError extends PrinterError {
  constructor(message = "The device could not be found.") {
    super(ErrorCode.ERR_NOT_FOUND, message);
  }
}

export class PrinterInUseError extends PrinterError {
  constructor(message = "The device was in use.") {
    super(ErrorCode.ERR_IN_USE, message);
  }
}

export class PrinterTypeInvalidError extends PrinterError {
  constructor(message = "The device type is different.") {
    super(ErrorCode.ERR_TYPE_INVALID, message);
  }
}

export class PrinterDisconnectError extends PrinterError {
  constructor(message = "Failed to disconnect the device.") {
    super(ErrorCode.ERR_DISCONNECT, message);
  }
}

export class PrinterUnsupportedError extends PrinterError {
  constructor(
    message = "A model name or language not supported was specified.",
  ) {
    super(ErrorCode.ERR_UNSUPPORTED, message);
  }
}

export class PrinterRecoveryFailureError extends PrinterError {
  constructor(message = "Failed to recover the printer.") {
    super(ErrorCode.ERR_RECOVERY_FAILURE, message);
  }
}

export class PrinterFailureError extends PrinterError {
  constructor(message = "An unknown error occurred.") {
    super(ErrorCode.ERR_FAILURE, message);
  }
}

export const getPrinterError = (
  code: number,
  message?: string,
): PrinterError | null => {
  switch (code) {
    case ErrorCode.ERR_PARAM:
      return new PrinterParamError(message);
    case ErrorCode.ERR_CONNECT:
      return new PrinterConnectError(message);
    case ErrorCode.ERR_DISCONNECT:
      return new PrinterDisconnectError(message);
    case ErrorCode.ERR_TIMEOUT:
      return new PrinterTimeoutError(message);
    case ErrorCode.ERR_MEMORY:
      return new PrinterMemoryError(message);
    case ErrorCode.ERR_ILLEGAL:
      return new PrinterIllegalError(message);
    case ErrorCode.ERR_PROCESSING:
      return new PrinterProcessingError(message);
    case ErrorCode.ERR_NOT_FOUND:
      return new PrinterNotFoundError(message);
    case ErrorCode.ERR_IN_USE:
      return new PrinterInUseError(message);
    case ErrorCode.ERR_TYPE_INVALID:
      return new PrinterTypeInvalidError(message);
    case ErrorCode.ERR_RECOVERY_FAILURE:
      return new PrinterRecoveryFailureError(message);
    case ErrorCode.ERR_FAILURE:
      return new PrinterFailureError(message);
    default:
      return null;
  }
};
