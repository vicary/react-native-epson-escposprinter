export const enum CallbackCode {
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

export abstract class CallbackError extends Error {
  constructor(
    public readonly status: CallbackCode,
    message: string,
  ) {
    super(message);
  }
}

export class CallbackTimeoutError extends CallbackError {
  constructor(
    message = "Processing did not end within the specified time period.",
  ) {
    super(CallbackCode.CODE_ERR_TIMEOUT, message);
  }
}

export class CallbackNotFoundError extends CallbackError {
  constructor(message = "Printer specified by the device ID does not exist.") {
    super(CallbackCode.CODE_ERR_NOT_FOUND, message);
  }
}

export class CallbackAutoRecoverError extends CallbackError {
  constructor(message = "Automatic recovery error occurred.") {
    super(CallbackCode.CODE_ERR_AUTORECOVER, message);
  }
}

export class CallbackCoverOpenError extends CallbackError {
  constructor(message = "Cover open error occurred.") {
    super(CallbackCode.CODE_ERR_COVER_OPEN, message);
  }
}

export class CallbackCutterError extends CallbackError {
  constructor(message = "Auto cutter error occurred.") {
    super(CallbackCode.CODE_ERR_CUTTER, message);
  }
}

export class CallbackMechanicalError extends CallbackError {
  constructor(message = "Mechanical error occurred.") {
    super(CallbackCode.CODE_ERR_MECHANICAL, message);
  }
}

export class CallbackEmptyError extends CallbackError {
  constructor(message = "No paper is left in the roll paper end detector.") {
    super(CallbackCode.CODE_ERR_EMPTY, message);
  }
}

export class CallbackUnrecoverableError extends CallbackError {
  constructor(message = "Unrecoverable error occurred.") {
    super(CallbackCode.CODE_ERR_UNRECOVERABLE, message);
  }
}

export class CallbackSystemError extends CallbackError {
  constructor(message = "System error occurred.") {
    super(CallbackCode.CODE_ERR_SYSTEM, message);
  }
}

export class CallbackPortError extends CallbackError {
  constructor(message = "Error was detected with the communication port.") {
    super(CallbackCode.CODE_ERR_PORT, message);
  }
}

// export class CallbackInvalidWindowError extends CallbackError {
//   constructor(message = "") {
//     super(CallbackCode.CODE_ERR_INVALID_WINDOW, message);
//   }
// }

export class CallbackJobNotFoundError extends CallbackError {
  constructor(message = "Specified print job ID does not exist.") {
    super(CallbackCode.CODE_ERR_JOB_NOT_FOUND, message);
  }
}

export class CallbackSpoolerError extends CallbackError {
  constructor(message = "Print queue is full.") {
    super(CallbackCode.CODE_ERR_SPOOLER, message);
  }
}

export class CallbackBatteryLowError extends CallbackError {
  constructor(message = "Battery has run out.") {
    super(CallbackCode.CODE_ERR_BATTERY_LOW, message);
  }
}

export class CallbackTooManyRequestsError extends CallbackError {
  constructor(
    message = "The number of print jobs sent to the printer has exceeded the allowable limit.",
  ) {
    super(CallbackCode.CODE_ERR_TOO_MANY_REQUESTS, message);
  }
}

export class CallbackRequestEntityTooLargeError extends CallbackError {
  constructor(
    message = "The size of the print job data exceeds the capacity of the printer.",
  ) {
    super(CallbackCode.CODE_ERR_REQUEST_ENTITY_TOO_LARGE, message);
  }
}

export class CallbackIllegalError extends CallbackError {
  constructor(
    message = "This API was called while no communication had been started.",
  ) {
    super(CallbackCode.CODE_ERR_ILLEGAL, message);
  }
}

export class CallbackWaitRemovalError extends CallbackError {
  constructor(message = "Print command sent while waiting for paper removal.") {
    super(CallbackCode.CODE_ERR_WAIT_REMOVAL, message);
  }
}

export class CallbackDeviceBusyError extends CallbackError {
  constructor(message = "Used by other connection target.") {
    super(CallbackCode.CODE_ERR_DEVICE_BUSY, message);
  }
}

export class CallbackMemoryError extends CallbackError {
  constructor(
    message = "Memory necessary for processing could not be allocated.",
  ) {
    super(CallbackCode.CODE_ERR_MEMORY, message);
  }
}

export class CallbackProcessingError extends CallbackError {
  constructor(message = "Could not run the process.") {
    super(CallbackCode.CODE_ERR_PROCESSING, message);
  }
}

export class CallbackParamError extends CallbackError {
  constructor(message = "An invalid parameter was passed.") {
    super(CallbackCode.CODE_ERR_PARAM, message);
  }
}

export class CallbackRecoveryFailureError extends CallbackError {
  constructor(message = "Failed to recover the printer.") {
    super(CallbackCode.CODE_ERR_RECOVERY_FAILURE, message);
  }
}

export class CallbackJsonFormatError extends CallbackError {
  constructor(message = "Invalid JSON format.") {
    super(CallbackCode.CODE_ERR_JSON_FORMAT, message);
  }
}

export class CallbackNoPasswordError extends CallbackError {
  constructor(message = "No administrator password is set for the printer.") {
    super(CallbackCode.CODE_NO_PASSWORD, message);
  }
}

export class CallbackInvalidPasswordError extends CallbackError {
  constructor(
    message = "Does not match with the administrator password in the printer.",
  ) {
    super(CallbackCode.CODE_ERR_INVALID_PASSWORD, message);
  }
}

export class CallbackFailureError extends CallbackError {
  constructor(message = "An unknown error occurred.") {
    super(CallbackCode.CODE_ERR_FAILURE, message);
  }
}

// # setReceiveEventListener
// CODE_ERR_FAILURE Error exists in the requested document syntax.
// CODE_ERR_TIMEOUT Print timeout occurred.

export const getCallbackError = (
  code: number,
  message?: string,
): CallbackError | null => {
  switch (code) {
    case CallbackCode.CODE_ERR_TIMEOUT:
      return new CallbackTimeoutError(message);
    case CallbackCode.CODE_ERR_NOT_FOUND:
      return new CallbackNotFoundError(message);
    case CallbackCode.CODE_ERR_AUTORECOVER:
      return new CallbackAutoRecoverError(message);
    case CallbackCode.CODE_ERR_COVER_OPEN:
      return new CallbackCoverOpenError(message);
    case CallbackCode.CODE_ERR_CUTTER:
      return new CallbackCutterError(message);
    case CallbackCode.CODE_ERR_MECHANICAL:
      return new CallbackMechanicalError(message);
    case CallbackCode.CODE_ERR_EMPTY:
      return new CallbackEmptyError(message);
    case CallbackCode.CODE_ERR_UNRECOVERABLE:
      return new CallbackUnrecoverableError(message);
    case CallbackCode.CODE_ERR_SYSTEM:
      return new CallbackSystemError(message);
    case CallbackCode.CODE_ERR_PORT:
      return new CallbackPortError(message);
    case CallbackCode.CODE_ERR_JOB_NOT_FOUND:
      return new CallbackJobNotFoundError(message);
    case CallbackCode.CODE_ERR_SPOOLER:
      return new CallbackSpoolerError(message);
    case CallbackCode.CODE_ERR_BATTERY_LOW:
      return new CallbackBatteryLowError(message);
    case CallbackCode.CODE_ERR_TOO_MANY_REQUESTS:
      return new CallbackTooManyRequestsError(message);
    case CallbackCode.CODE_ERR_REQUEST_ENTITY_TOO_LARGE:
      return new CallbackRequestEntityTooLargeError(message);
    case CallbackCode.CODE_ERR_ILLEGAL:
      return new CallbackIllegalError(message);
    case CallbackCode.CODE_ERR_WAIT_REMOVAL:
      return new CallbackWaitRemovalError(message);
    case CallbackCode.CODE_ERR_DEVICE_BUSY:
      return new CallbackDeviceBusyError(message);
    case CallbackCode.CODE_ERR_MEMORY:
      return new CallbackMemoryError(message);
    case CallbackCode.CODE_ERR_PROCESSING:
      return new CallbackProcessingError(message);
    case CallbackCode.CODE_ERR_PARAM:
      return new CallbackParamError(message);
    case CallbackCode.CODE_ERR_RECOVERY_FAILURE:
      return new CallbackRecoveryFailureError(message);
    case CallbackCode.CODE_ERR_JSON_FORMAT:
      return new CallbackJsonFormatError(message);
    case CallbackCode.CODE_NO_PASSWORD:
      return new CallbackNoPasswordError(message);
    case CallbackCode.CODE_ERR_INVALID_PASSWORD:
      return new CallbackInvalidPasswordError(message);
    case CallbackCode.CODE_ERR_FAILURE:
      return new CallbackFailureError(message);
    default:
      return message ? new CallbackFailureError(message) : null;
  }
};
