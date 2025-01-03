export enum PrinterErrorStatus {
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

// [ ] Create PrinterError for callback codes
export const enum PrinterCallbackCode {
  CODE_SUCCESS = 0,
  CODE_ERR_TIMEOUT = 1,
  CODE_ERR_NOT_FOUND = 2,
  CODE_ERR_AUTORECOVER = 3,
  CODE_ERR_COVER_OPEN = 4,
  CODE_ERR_CUTTER = 5,
  CODE_ERR_MECHANICAL = 6,
  CODE_ERR_EMPTY = 7,
  CODE_ERR_UNRECOVERABLE = 8,
  CODE_ERR_SYSTEM = 9,
  CODE_ERR_PORT = 10,
  CODE_ERR_INVALID_WINDOW = 11,
  CODE_ERR_JOB_NOT_FOUND = 12,
  CODE_PRINTING = 13,
  CODE_ERR_SPOOLER = 14,
  CODE_ERR_BATTERY_LOW = 15,
  CODE_ERR_TOO_MANY_REQUESTS = 16,
  CODE_ERR_REQUEST_ENTITY_TOO_LARGE = 17,
  CODE_CANCELED = 18,
  CODE_ERR_NO_MICR_DATA = 19,
  CODE_ERR_ILLEGAL_LENGTH = 20,
  CODE_ERR_NO_MAGNETIC_DATA = 21,
  CODE_ERR_RECOGNITION = 22,
  CODE_ERR_READ = 23,
  CODE_ERR_NOISE_DETECTED = 24,
  CODE_ERR_PAPER_JAM = 25,
  CODE_ERR_PAPER_PULLED_OUT = 26,
  CODE_ERR_CANCEL_FAILED = 27,
  CODE_ERR_PAPER_TYPE = 28,
  CODE_ERR_WAIT_INSERTION = 29,
  CODE_ERR_ILLEGAL = 30,
  CODE_ERR_INSERTED = 31,
  CODE_ERR_WAIT_REMOVAL = 32,
  CODE_ERR_DEVICE_BUSY = 33,
  CODE_ERR_IN_USE = 34,
  CODE_ERR_CONNECT = 35,
  CODE_ERR_DISCONNECT = 36,
  CODE_ERR_MEMORY = 37,
  CODE_ERR_PROCESSING = 38,
  CODE_ERR_PARAM = 39,
  CODE_ERR_GET_JSON_SIZE = 40,
  CODE_ERR_DIFFERENT_MODEL = 41,
  CODE_ERR_DIFFERENT_VERSION = 42,
  CODE_ERR_DATA_CORRUPTED = 43,
  CODE_ERR_IO = 44,
  CODE_RETRY = 45,
  CODE_ERR_RECOVERY_FAILURE = 46,
  CODE_ERR_JSON_FORMAT = 47,
  CODE_NO_PASSWORD = 48,
  CODE_ERR_INVALID_PASSWORD = 49,
  CODE_ERR_INVALID_FIRM_VERSION = 50,
  CODE_ERR_SSL_CERTIFICATION = 51,
  CODE_ERR_FAILURE = 255,
}

export abstract class PrinterError extends Error {
  constructor(public readonly status: PrinterErrorStatus, message: string) {
    super(message);
  }
}

export class PrinterParamError extends PrinterError {
  constructor() {
    super(
      PrinterErrorStatus.ERR_PARAM,
      "An invalid parameter was passed.",
    );
  }
}

export class PrinterConnectError extends PrinterError {
  constructor() {
    super(
      PrinterErrorStatus.ERR_CONNECT,
      "Failed to open the device.",
    );
  }
}

export class PrinterTimeoutError extends PrinterError {
  constructor() {
    super(
      PrinterErrorStatus.ERR_TIMEOUT,
      "Failed to communicate with the devices within the specified time.",
    );
  }
}

export class PrinterIllegalError extends PrinterError {
  constructor() {
    super(
      PrinterErrorStatus.ERR_ILLEGAL,
      "Tried to start communication with a printer with which communication had been already established. Tried to start communication with a printer during reconnection process.",
    );
  }
}

export class PrinterMemoryError extends PrinterError {
  constructor() {
    super(
      PrinterErrorStatus.ERR_MEMORY,
      "Necessary memory could not be allocated.",
    );
  }
}

export class PrinterFailureError extends PrinterError {
  constructor() {
    super(
      PrinterErrorStatus.ERR_FAILURE,
      "An unknown error occurred.",
    );
  }
}

export class PrinterProcessingError extends PrinterError {
  constructor() {
    super(
      PrinterErrorStatus.ERR_PROCESSING,
      "Could not run the process.",
    );
  }
}

export class PrinterNotFoundError extends PrinterError {
  constructor() {
    super(
      PrinterErrorStatus.ERR_NOT_FOUND,
      "The device could not be found.",
    );
  }
}

export class PrinterInUseError extends PrinterError {
  constructor() {
    super(
      PrinterErrorStatus.ERR_IN_USE,
      "The device was in use.",
    );
  }
}

export class PrinterTypeInvalidError extends PrinterError {
  constructor() {
    super(
      PrinterErrorStatus.ERR_TYPE_INVALID,
      "The device type is different.",
    );
  }
}

export class PrinterRecoveryFailureError extends PrinterError {
  constructor() {
    super(
      PrinterErrorStatus.ERR_RECOVERY_FAILURE,
      "Failed to recover the printer.",
    );
  }
}

export const getCallbackError = (code: number) => {
  switch (code) {
    // [ ] Implement callback errors
    default:
      return null;
  }
};

export const getPrinterError = (code: number): PrinterError | null => {
  switch (code) {
    case PrinterErrorStatus.ERR_PARAM:
      return new PrinterParamError();
    case PrinterErrorStatus.ERR_CONNECT:
      return new PrinterConnectError();
    case PrinterErrorStatus.ERR_TIMEOUT:
      return new PrinterTimeoutError();
    case PrinterErrorStatus.ERR_MEMORY:
      return new PrinterMemoryError();
    case PrinterErrorStatus.ERR_ILLEGAL:
      return new PrinterIllegalError();
    case PrinterErrorStatus.ERR_PROCESSING:
      return new PrinterProcessingError();
    case PrinterErrorStatus.ERR_NOT_FOUND:
      return new PrinterNotFoundError();
    case PrinterErrorStatus.ERR_IN_USE:
      return new PrinterInUseError();
    case PrinterErrorStatus.ERR_TYPE_INVALID:
      return new PrinterTypeInvalidError();
    case PrinterErrorStatus.ERR_RECOVERY_FAILURE:
      return new PrinterRecoveryFailureError();
    case PrinterErrorStatus.ERR_FAILURE:
      return new PrinterFailureError();
    default:
      return null;
  }
};
