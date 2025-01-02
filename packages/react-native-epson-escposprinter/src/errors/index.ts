/**
 * @module
 *
 * Error Cheatsheet
 *
 * | Return value                   | Description                                                                    |
 * |--------------------------------|--------------------------------------------------------------------------------|
 * | CONSTANT_NAME (0)              |                                                                                |
 */

export abstract class PrinterError extends Error {
  constructor(readonly code: number, message: string) {
    super(message);
  }
}
/* [ ] Implement EPSON SDK errors
export class Connected extends PrinterError {
  constructor() {
    super(ESCPOSConst.CMP_E_CONNECTED, "The printer is already connected.");
  }
}

export class Disconnected extends PrinterError {
  constructor() {
    super(ESCPOSConst.CMP_E_DISCONNECT, "The printer is not connected.");
  }
}

export class NotConnected extends PrinterError {
  constructor() {
    super(ESCPOSConst.CMP_E_NOTCONNECT, "Failed connection to the printer.");
  }
}

export class ConnectNotFound extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_E_CONNECT_NOTFOUND,
      "Failed to check the support model after connecting to the device.",
    );
  }
}

export class ConnectOffline extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_E_CONNECT_OFFLINE,
      "Failed to check the printer status after connecting to the device.",
    );
  }
}

export class NoContext extends PrinterError {
  constructor() {
    super(ESCPOSConst.CMP_E_NOCONTEXT, "The context is not specified.");
  }
}

export class BluetoothDisable extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_E_BT_DISABLE,
      "The setting of the Bluetooth device is invalid.",
    );
  }
}

export class BluetoothNoDevice extends PrinterError {
  constructor() {
    super(ESCPOSConst.CMP_E_BT_NODEVICE, "The Bluetooth device is not found.");
  }
}

export class Illegal extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_E_ILLEGAL,
      "Unsupported operation with the Device, or an invalid parameter value was used.",
    );
  }
}

export class Offline extends PrinterError {
  constructor() {
    super(ESCPOSConst.CMP_E_OFFLINE, "The printer is off-line.");
  }
}

export class NoExist extends PrinterError {
  constructor() {
    super(ESCPOSConst.CMP_E_NOEXIST, "The file name does not exist.");
  }
}

export class Failure extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_E_FAILURE,
      "The Service cannot perform the requested procedure.",
    );
  }
}

export class Timeout extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_E_TIMEOUT,
      "The Service timed out waiting for a response from the printer.",
    );
  }
}

export class NoList extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_E_NO_LIST,
      "The printer cannot be found in the printer search.",
    );
  }
}

export class NoPrinterExtended extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_EX_DEV_NO_PRINTER,
      "Failed connection to the printer.",
    );
  }
}

export class OpenErrorExtended extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_EX_DEV_OPEN_ERROR,
      "Unable to connect socket or port.",
    );
  }
}

export class SendErrorExtended extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_EX_DEV_SEND_ERROR,
      "Failed to send command to printer.",
    );
  }
}

export class NoResponseExtended extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_EX_DEV_NO_RESPONSE,
      "No command response from the printer.",
    );
  }
}

export class CoverOpen extends PrinterError {
  constructor() {
    super(ESCPOSConst.CMP_EPTR_COVER_OPEN, "The cover of the printer opens.");
  }
}

export class RecEmpty extends PrinterError {
  constructor() {
    super(ESCPOSConst.CMP_EPTR_REC_EMPTY, "The printer is out of paper.");
  }
}

export class BadFormat extends PrinterError {
  constructor() {
    super(
      ESCPOSConst.CMP_EPTR_BADFORMAT,
      "The specified file is in an unsupported format.",
    );
  }
}

export class TooBig extends PrinterError {
  constructor() {
    super(ESCPOSConst.CMP_EPTR_TOOBIG, "The specified bitmap is too big.");
  }
}
*/
export const getPrintError = (code: number): PrinterError | null => {
  switch (code) {
    default:
      return null;
  }
};
