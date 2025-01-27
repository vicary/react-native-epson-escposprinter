import EventEmitter from "eventemitter3";
import { type CallbackCode, ErrorCode, getEpsonError } from "./errors";
import { events, NativeInterface } from "./NativeInterface";
import type {
  PrinterAlign,
  PrinterBarcodeHri,
  PrinterBarcodeType,
  PrinterColor,
  PrinterColorMode,
  PrinterCompress,
  PrinterCutType,
  PrinterFeedPosition,
  PrinterFirmwareInfomation,
  PrinterFont,
  PrinterHalftone,
  PrinterInformation,
  PrinterLanguage,
  PrinterLayoutType,
  PrinterLineStyle,
  PrinterLocale,
  PrinterMaintainenceCounterType,
  PrinterPageDirection,
  PrinterPulseDrawer,
  PrinterPulseTime,
  PrinterSeries,
  PrinterSettings,
  PrinterSettingType,
  PrinterSettingValue,
  PrinterSoundPattern,
  PrinterStatus,
  PrinterStatusChangeEvent,
  PrinterSymbolLevelPdf,
  PrinterSymbolLevelQrcode,
  PrinterSymbolTypeAztecCode,
  PrinterSymbolTypeOthers,
  PrinterSymbolTypePdf,
  PrinterSymbolTypeQrcode,
} from "./PrinterConst";

const printers = new Map<number, Printer>();

events.addListener(
  "statusChange",
  ({ printerId, status } = {}) =>
    printers.get(printerId)?.emit("statusChange", status),
);

events.addListener(
  "printStatusChange",
  ({ printerId, code, status, printJobId } = {}) =>
    printers
      .get(printerId)
      ?.emit("printStatusChange", code, status, printJobId),
);

events.addListener(
  "updateProgress",
  ({ printerId, task, progress } = {}) =>
    printers.get(printerId)?.emit("updateProgress", task, progress),
);

/**
 * Starts communication with the printer.
 *
 * @returns A printer instance.
 */
export async function connect(
  series: PrinterSeries,
  lang: PrinterLocale,
  target: string,
  timeout?: number,
): Promise<Printer> {
  try {
    const printerId = await NativeInterface.connect(
      series,
      lang,
      target,
      timeout ?? Printer.PARAM_DEFAULT,
    );

    const printer = new Printer(printerId);

    printers.set(printerId, printer);

    return printer;
  } catch (error) {
    throw (
      getEpsonError(error, {
        [ErrorCode.ERR_ILLEGAL]:
          "Tried to start communication with a printer with which communication had been already established.",
      }) ?? error
    );
  }
}

abstract class CommonPrinter extends EventEmitter<{
  // [ ] Refactor native events into more javascript-like implementations.
  // [ ] e.g. add a `status` property in the Printer class.
  // [ ] e.g. separate each event code into individual events.
  statusChange: [status: PrinterStatusChangeEvent];
  // [ ] e.g. CODE_PRINTING -> printBegin
  // [ ] e.g. CODE_SUCCESS  -> printDone
  // [ ] e.g. CODE_ERR_*    -> printError
  printStatusChange: [
    code: CallbackCode,
    status: PrinterStatus,
    printJobId?: string,
  ];
  updateProgress: [task: string, progress: number];
  disconnect: [];
}> {
  public static TRUE = 1;
  public static FALSE = 0;
  public static PARAM_UNSPECIFIED = -1;
  public static PARAM_DEFAULT = -2;
  public static UNKNOWN = -3;
  // public static SWITCH_OFF = 0;
  // public static SWITCH_ON = 1;
  public static REMOVAL_WAIT_PAPER = 0;
  public static REMOVAL_WAIT_NONE = 1;

  public static EVENT_RECONNECTING = 0;
  public static EVENT_RECONNECT = 1;
  public static EVENT_DISCONNECT = 2;
}

export class Printer extends CommonPrinter implements AsyncDisposable {
  public static WIFI_SIGNAL_NO = 0;
  public static WIFI_SIGNAL_FAIL = 1;
  public static WIFI_SIGNAL_GOOD = 2;
  public static WIFI_SIGNAL_EXCELLENT = 3;

  public static JSON_KEY_PRINTERSPEC_NAME = "PrinterSpec";
  public static JSON_KEY_PRODUCT_NAME = "Product";
  public static JSON_KEY_SERIALNO_NAME = "SerialNo";
  public static JSON_KEY_MAINTENANCE_NAME = "Maintenance";
  public static JSON_KEY_THERMALHEAD_NAME = "ThermalHead";
  public static JSON_KEY_N_WARNINGDOT_NAME = "NumberOfWarningDot";
  public static JSON_KEY_P_WARNINGDOT_NAME = "PositionOfWarningDot";
  public static JSON_KEY_N_BROKENDOT_NAME = "NumberOfBrokenDot";
  public static JSON_KEY_P_BROKENDOT_NAME = "PositionOfBrokenDot";
  public static JSON_KEY_SETTING_NWDEVINFO_PASSWORDAUTH_KEY =
    "Setting/NwDevInfo/PasswordAuth";
  public static JSON_KEY_SETTING_NWDEVINFO_ADMINID_KEY =
    "Setting/NwDevInfo/AdminId";
  public static JSON_KEY_SETTING_NWCSAUTH_PASSWORD_KEY =
    "Setting/NwCSAuth/Password";
  public static JSON_KEY_SETTING_WIFICFG_WPAPSK_KEY =
    "Setting/WifiCfg/WpaPsk/Key";

  public static PREFIX_ENCRYPT = "U2FsdGVkX1";
  public static FIRMWARE_MODE_NORMAL = 1;
  public static FIRMWARE_MODE_MEMORY_REWRITE = 2;
  public static HTTPS_TIMEOUT = 30000;

  #id: number;

  constructor(id: number) {
    super();

    this.#id = id;
  }

  /**
   * Supports `using` keyword via the Explicit Resource Management proposal.
   *
   * The draft needs to reach stage 4 and in turn implemented by Hermes to work,
   * let's sit back and wait.
   *
   * @example
   * ```ts
   * await using printer = await connect(ESCPOSConst.CMP_PORT_USB);
   * ```
   *
   * @see https://github.com/tc39/proposal-explicit-resource-management
   */
  async [Symbol.asyncDispose]() {
    return this.disconnect();
  }

  /**
   * Ends communication with the printer.
   */
  async disconnect() {
    try {
      await NativeInterface.disconnect(this.#id);

      printers.delete(this.#id);

      this.emit("disconnect");
    } catch (error) {
      throw (
        getEpsonError(error, {
          [ErrorCode.ERR_ILLEGAL]:
            "Tried to end communication where it had not been established.",
        }) ?? error
      );
    }
  }

  /** Acquires the current status information. */
  async getStatus() {
    try {
      const info = await NativeInterface.getStatus(this.#id);

      return info as PrinterStatus;
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Sends the print command.
   *
   * Make sure not to use this API repeatedly without getting the result in the
   * callback.
   *
   * This API sends data buffered by an add-type API (e.g., `addText`).
   */
  async sendData(timeout?: number) {
    try {
      return await NativeInterface.sendData(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw (
        getEpsonError(error, {
          [ErrorCode.ERR_ILLEGAL]:
            "The control commands have not been buffered.",
        }) ?? error
      );
    }
  }

  /**
   * Starts a transaction.
   *
   * A transaction represents a single printing task such as printing a single
   * sheet of receipt or coupon.
   *
   * After this API is called, data until the transaction is terminated by
   * `endTransaction` will be regarded as a single printing task.
   */
  async beginTransaction() {
    try {
      return await NativeInterface.beginTransaction(this.#id);
    } catch (error) {
      throw (
        getEpsonError(error, {
          [ErrorCode.ERR_ILLEGAL]:
            "Another transaction had been already started by this function.",
        }) ?? error
      );
    }
  }

  /**
   * Ends a transaction.
   *
   * A transaction represents a single printing task such as printing a single
   * sheet of receipt or coupon.
   *
   * After `beginTransaction` is called, data until the transaction is
   * terminated by this API will be regarded as a single printing task.
   */
  async endTransaction() {
    try {
      return await NativeInterface.endTransaction(this.#id);
    } catch (error) {
      throw (
        getEpsonError(error, {
          [ErrorCode.ERR_ILLEGAL]:
            "This API was called while no transaction had been started.",
        }) ?? error
      );
    }
  }

  /**
   * Acquires the print result for the specified print job ID.
   *
   * - The result of this API is notified to the listener method set by the
   *   `setReceiveEventListener` API of the `Printer` class.
   * - When multiple print processes were performed with the same print job ID,
   *   the status of the latest print job is acquired.
   */
  async requestPrintJobStatus(
    /**
     * Specifies the print job ID.
     *
     * Alphanumeric characters, underscore, hyphen, and period in 1 to 30 digits
     * can be used.
     */
    printJobId: string,
  ) {
    try {
      return await NativeInterface.requestPrintJobStatus(this.#id, printJobId);
    } catch (error) {
      throw (
        getEpsonError(error, {
          [ErrorCode.ERR_CONNECT]: "Communication error",
        }) ?? error
      );
    }
  }

  /**
   * Clears the command buffer.
   *
   * The contents buffered in the command buffer are retained until this API is
   * called.
   */
  async clearCommandBuffer() {
    try {
      return await NativeInterface.clearCommandBuffer(this.#id);
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds text alignment setting to the command buffer.
   *
   * - Use this API at the "beginning of a line." If this API is used elsewhere,
   * it will be ignored.
   * - Setting of this API is also applied to the barcode/2D symbol/raster
   * image/NV logo.
   * - When specifying alignment in the page mode, use `addPagePosition` instead
   * of this API.
   */
  async addTextAlign(align?: PrinterAlign) {
    try {
      return await NativeInterface.addTextAlign(
        this.#id,
        align ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds line spacing setting to the command buffer.
   *
   * - If the line spacing for a single line is set smaller than the print
   * character size, paper may be fed for a larger quantity than the set amount
   * to ensure proper printing.
   */
  async addLineSpace(
    /** Specifies the line spacing (in dots). */
    lineSpace: number,
  ) {
    try {
      return await NativeInterface.addLineSpace(
        this.#id,
        Math.max(0, Math.min(255, lineSpace)),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds text rotation setting to the command buffer.
   *
   * - Use this API at the "beginning of a line." If this API is used elsewhere,
   *   it will be ignored.
   * - Setting of this API is also applied to the barcode/2D symbol.
   * - When specifying text rotation in the page mode, use addPageDirection
   *   instead of this API.
   */
  async addTextRotate(
    /** Specifies the text rotation. */
    rotate?: boolean,
  ) {
    try {
      return await NativeInterface.addTextRotate(
        this.#id,
        rotate ? Printer.TRUE : Printer.FALSE,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a character print command to the command buffer.
   *
   * - To print data other than text after printing text, feed a line or page.
   *   A line which does not end with a line feed will be discarded as unfixed
   *   data by the next `sendData`.
   * - In the page mode, text is printed from the current print position with
   *   the base line dot of the characters as the standard.
   */
  async addText(
    /**
     * Specifies the string to print.
     *
     * Use the following escape sequences for a horizontal tab and line feed.
     *
     * | String | Description         |
     * | ------ | :------------------ |
     * | \t     | Horizontal tab (HT) |
     * | \h     | Line feed (LF)      |
     * | \\     | Backslash           |
     */
    text: string,
  ) {
    try {
      return await NativeInterface.addText(this.#id, text);
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds language setting to the command buffer.
   *
   * A text string specified by the addText API is encoded according to the
   * language specified by this API.
   *
   * - This API is called before the `addText` API.
   * - Use this API at the top of each print job.
   * - Available languages differ depending on character specifications of the
   *   printer. For details, see Technical Reference Guide of the printer.
   */
  async addTextLang(
    /** Specifies the language. */
    lang?: PrinterLanguage,
  ) {
    try {
      return await NativeInterface.addTextLang(
        this.#id,
        lang ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds character font setting to the command buffer.
   */
  async addTextFont(
    /** Specifies the font. */
    font?: PrinterFont,
  ) {
    try {
      return await NativeInterface.addTextFont(
        this.#id,
        font ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds smoothing setting to the command buffer.
   */
  async addTextSmooth(smooth?: boolean) {
    try {
      return await NativeInterface.addTextSmooth(
        this.#id,
        smooth ? Printer.TRUE : Printer.FALSE,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds character scaling factor setting to the command buffer.
   *
   * - If all the parameters are set to "Printer.PARAM_UNSPECIFIED,"
   *   ERR_PARAM will be returned.
   * - For slip, endorsement, or validation printing, an integer from 1 to 2
   *   can be set for the width and height.
   */
  async addTextSize(
    /** Specifies the width scaling factor. */
    width: number,
    /** Specifies the height scaling factor. */
    height: number,
  ) {
    try {
      return await NativeInterface.addTextSize(
        this.#id,
        Math.max(1, Math.min(8, width)),
        Math.max(1, Math.min(8, height)),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds character style setting to the command buffer.
   *
   * - Use this API at the "beginning of a line." If this API is used elsewhere,
   *   it will be ignored.
   */
  async addTextStyle(
    /** Specifies the reverse print. */
    reverse?: boolean,
    /** Specifies the underline. */
    ul?: boolean,
    /** Specifies the emphasized print. */
    em?: boolean,
    /** Specifies the color. */
    color?: PrinterColor,
  ) {
    try {
      return await NativeInterface.addTextStyle(
        this.#id,
        reverse ? Printer.TRUE : Printer.FALSE,
        ul ? Printer.TRUE : Printer.FALSE,
        em ? Printer.TRUE : Printer.FALSE,
        color ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds horizontal character print start position to the command buffer.
   *
   * - Calling this API causes the printer positioned at "other than the
   *   beginning of the line." This is also true even if 0 is set to "X."
   * - After executing this API, addTextAlign and addTextRotate cannot be used.
   * - Setting of this API is also applied to the barcode/2D symbol/raster
   *   image/NV logo.
   * - The setting of this API is applied to each line (Or to each barcode,
   *   2D symbol, raster image, or NV logo). If you want to apply the setting to
   *   multiple lines, set this API to each of the lines.
   */
  async addHPosition(
    /** Specifies the horizontal position (in dots). */
    x: number,
  ) {
    try {
      return await NativeInterface.addHPosition(
        this.#id,
        Math.max(0, Math.min(65535, x)),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a paper-feed-by-dot command to the command buffer.
   *
   * - Calling this API causes the printer positioned at "the beginning of the
   *   line."
   */
  async addFeedUnit(
    /** Specifies the feed amount (in dots). */
    unit: number,
  ) {
    try {
      return await NativeInterface.addFeedUnit(
        this.#id,
        Math.max(0, Math.min(255, unit)),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a paper-feed-by-line command to the command buffer.
   *
   * - Calling this API causes the printer positioned at "the beginning of the
   *   line."
   */
  async addFeedLine(
    /** Specifies the feed amount (in lines). */
    line: number,
  ) {
    try {
      return await NativeInterface.addFeedLine(
        this.#id,
        Math.max(0, Math.min(255, line)),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a raster image print command to the command buffer.
   *
   * Prints Android.graphics.Bitmap class graphics.
   *
   * A specified area of Android.graphics.Bitmap class graphics is binarized
   * according to the mode, halftone, and brightness parameters and converted
   * into a raster image.
   *
   * The converted image is compressed or not compressed before transmission
   * according to the compress parameter value.
   *
   * One pixel of an image corresponds to one dot of the printer. When a
   * transparent color is contained in the image, the background of the image is
   * assumed to be white.
   *
   * - Use this API at the "beginning of a line." If this API is used elsewhere,
   *   it will be ignored.
   * - If the area specified by x/y and width/height parameters does not fit
   *   within the image size specified by data parameter, ERR_PARAM will be
   *   returned as an exception.
   * - The "compress" parameter is effective when the printer is connected via
   *   Bluetooth. For other printers, specify Printer.COMPRESS_AUTO.
   * - Printing may get slower if a transparent image is printed.
   * - The multi-gradation and the compression of image data are not supported
   *   in the page mode. If you set those in the page mode, nothing will be
   *   printed.
   * - Set an image size appropriate for the printer. If you set to print a
   *   large image, the API commands will be succeeded, but the printer may
   *   print nothing.
   * - Even if the size of an image is printable, the ERR_MEMORY error may occur
   *   depending on the Android device specification. In such case, reduce the
   *   image size.
   * - This API consumes a lot of the buffer provided in the printer. When using
   *   this API for LFCPrinter class, be sure to check the buffer size of the
   *   printer.
   */
  async addImage(
    /** Bitmap data in base64 format. */
    image: string,
    /** Specifies the horizontal start position of the print area (in pixels). */
    x: number,
    /** Specifies the vertical start position of the print area (in pixels). */
    y: number,
    /** Specifies the width (in dots). */
    width: number,
    /** Specifies the height (in dots). */
    height: number,
    /** Specifies the color. */
    color?: PrinterColor,
    /** Specifies the mode. */
    mode?: PrinterColorMode,
    /**
     * Specifies the halftone.
     *
     * Effective for the monochrome (2 scales) color mode only.
     */
    halftone?: PrinterHalftone,
    /**
     * Specifies the brightness.
     *
     * When a value other than 1.0 is specified for the brightness compensation
     * value, processing gets slower.
     */
    brightness?: number,
    /** Specifies the compress. */
    compress?: PrinterCompress,
  ) {
    try {
      return await NativeInterface.addImage(
        this.#id,
        image,
        Math.max(0, Math.min(65534, x)),
        Math.max(0, Math.min(65534, y)),
        Math.max(1, Math.min(65535, width)),
        Math.max(1, Math.min(65535, height)),
        color ?? Printer.PARAM_DEFAULT,
        mode ?? Printer.PARAM_DEFAULT,
        halftone ?? Printer.PARAM_DEFAULT,
        brightness
          ? Math.max(0, Math.min(10, brightness))
          : Printer.PARAM_DEFAULT,
        compress ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a NV logo print command to the command buffer.
   *
   * Prints the logo registered in the NV memory of the printer.
   *
   * - Use this API at the "beginning of a line." If this API is used elsewhere,
   *   it will be ignored.
   * - For how to register the NV logo, refer to the Technical Reference Guide
   *   of the printer.
   * - The page mode does not support multi-gradation printing. Multi-gradation
   *   graphics can be printed in the standard mode only.
   * - The NV logo specified by this API is printed with the color setting
   *   specified by addTextStyle buffered in advance.
   * - TM-U220 and TM-U220II, TM-U330 use only the key1 parameter, however, you
   *   need to set "Printer.PARAM_DEFAULT" as the key2 parameter for those
   *   printers since an empty key2 parameter causes an error.
   */
  async addLogo(
    /** Specifies the key code 1 of the NV logo. */
    key1: number,
    /** Specifies the key code 2 of the NV logo. */
    key2?: number,
  ) {
    try {
      return await NativeInterface.addLogo(
        this.#id,
        key1,
        key2 ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a barcode print command to the command buffer.
   *
   * - Use this API at the "beginning of a line."
   * - When the barcode data specified in data does not conform to the barcode
   *   type specified in type, an error will not be returned as an exception and
   *   the barcode will not be printed.
   * - The "CODE 128 auto" type of barcode can be specified when the printer is
   *   TM-m30II, TM-m30II-H, TM-m30II-NT, TMm30II-S, TM-m30II-SL, TM-m30III,
   *   TM-m30III-H, TM-m50, TM-m50II, TM-m50II-H, TM-T88VII, TM-L100, TM-P20II
   *   or TM-P80II.
   */
  async addBarcode(
    /**
     * Specifies barcode data as a text string.
     *
     * When specifying binary data which cannot be represented as a string, use
     * the following escape sequences.
     *
     * | String | Description                |
     * | ------ | :------------------------- |
     * | \xnn   | Hexadecimal control code   |
     * | \\     | Backslash                  |
     */
    barcode: string,
    /** Specifies the barcode type. */
    type: PrinterBarcodeType,
    /** Specifies the HRI (Human Readable Interpretation) setting. */
    hri: PrinterBarcodeHri,
    /** Specify the font */
    font: PrinterFont,
    /** Specifies the barcode width (in dots). */
    width: number,
    /** Specifies the barcode height (in dots). */
    height: number,
  ) {
    try {
      return await NativeInterface.addBarcode(
        this.#id,
        barcode,
        type,
        hri,
        font,
        Math.max(2, Math.min(6, width)),
        Math.max(1, Math.min(255, height)),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a 2D symbol print command to the command buffer.
   *
   * - Use this API at the "beginning of a line."
   * - When the 2D symbol data specified in data does not conform to the 2D
   *   symbol type specified in type, an error will not be returned as an
   *   exception and the 2D symbol will not be printed.
   * - During ESC/POS control, specifying values outside the valid ranges for
   *   the width and height parameters results in default value printing.
   * - During ePOS-Device XML control, specifying values outside the valid
   *   ranges for the width and height parameters causes `sendData` to generate
   *   an exception with ERR_FAILURE.
   */
  async addSymbol(
    /** Specifies the symbol data as a text string. */
    symbol: string,
    type: PrinterSymbolTypePdf,
    level: PrinterSymbolLevelPdf,
    width: number,
    height: number,
    size: number,
  ): Promise<void>;
  async addSymbol(
    symbol: string,
    type: PrinterSymbolTypeQrcode,
    level: PrinterSymbolLevelQrcode,
    width: number,
  ): Promise<void>;
  async addSymbol(
    symbol: string,
    type: PrinterSymbolTypeAztecCode,
    level: number,
    width: number,
  ): Promise<void>;
  async addSymbol(
    symbol: string,
    type: PrinterSymbolTypeOthers,
    level: number, // PARAM_DEFAULT
    width: number,
    height: number,
    size: number,
  ): Promise<void>;
  async addSymbol(
    symbol: string,
    type:
      | PrinterSymbolTypePdf
      | PrinterSymbolTypeQrcode
      | PrinterSymbolTypeAztecCode
      | PrinterSymbolTypeOthers,
    level: number,
    width: number,
    height: number = 0,
    size: number = 0,
  ) {
    try {
      return await NativeInterface.addSymbol(
        this.#id,
        symbol,
        type,
        level,
        Math.max(2, Math.min(16, width)),
        Math.max(2, Math.min(8, height)),
        Math.max(0, Math.min(65535, size)),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a horizontal ruled line print command to the command buffer.
   *
   * Draws a horizontal ruled line.
   *
   * - This API cannot be used in the page mode.
   * - Use addPageLine to draw a horizontal ruled line in the page mode.
   */
  async addHLine(x1: number, x2: number, lineStyle?: PrinterLineStyle) {
    try {
      return await NativeInterface.addHLine(
        this.#id,
        Math.max(0, Math.min(65535, x1)),
        Math.max(0, Math.min(65535, x2)),
        lineStyle ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a command to start drawing a vertical ruled line to the command
   * buffer.
   *
   * Starts drawing a vertical line.
   *
   * - This API cannot be used in the page mode.
   * - Use addPageLine to draw a vertical ruled line in the page mode.
   * - Drawing of the vertical ruled line continues until stopped by the
   *   `addVLineEnd` API.
   * - Use this API with the `addVLineEnd` API.
   */
  async addVLineBegin(
    /** Start position to draw a vertical ruled line (in dots) */
    x: number,
    lineStyle?: PrinterLineStyle,
  ) {
    try {
      return await NativeInterface.addVLineBegin(
        this.#id,
        Math.max(0, Math.min(65535, x)),
        lineStyle ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a command to stop drawing a vertical ruled line to the command buffer.
   *
   * Ends drawing a vertical line.
   *
   * - This API cannot be used in the page mode.
   * - Use addPageLine to draw a vertical ruled line in the page mode.
   * - This API draws a vertical ruled line until stopped by `addVLineEnd`.
   * - Use this API with the `addVLineBegin` API.
   */
  async addVLineEnd(lineId: number) {
    try {
      return await NativeInterface.addVLineEnd(this.#id, lineId);
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a page mode start command to the command buffer.
   *
   * Starts processing in the page mode.
   *
   * - The page mode does not support multi-gradation printing.
   * - Use this API with the `addPageEnd` API.
   * - Use this API at the "beginning of a line." If this API is used elsewhere,
   *   it will be ignored.
   */
  async addPageBegin() {
    try {
      return await NativeInterface.addPageBegin(this.#id);
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a page mode end command to the command buffer.
   *
   * Ends processing in the page mode.
   *
   * - The page mode does not support multi-gradation printing.
   * - Use this API with the `addPageBegin` API.
   */
  async addPageEnd() {
    try {
      return await NativeInterface.addPageEnd(this.#id);
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds page mode print area setting to the command buffer.
   *
   * Specifies the page mode print area (coordinates). Following this API, call
   * an API to specify print data such as the `addText` API.
   *
   * - Define the print area in accordance with the contents to print. If the
   *   print data does not fit within the print area, the printed contents will
   *   be truncated.
   * - Use this API between the `addPageBegin` and `addPageEnd` APIs.
   * - Specify the width and height of the print area in accordance with the
   *   print direction setting. Otherwise the print data may be truncated. Set
   *   the print direction by `addPageDirection`.
   * - This API does not work in the standard mode.
   */
  async addPageArea(
    /** Specifies the horizontal start position of the print area (in dots). */
    x: number,
    /** Specifies the vertical start position of the print area (in dots). */
    y: number,
    /** Specifies the width of a print area (in dots). */
    width: number,
    /** Specifies the height of a print area (in dots). */
    height: number,
  ) {
    try {
      return await NativeInterface.addPageArea(
        this.#id,
        Math.max(0, Math.min(65535, x)),
        Math.max(0, Math.min(65535, y)),
        Math.max(1, Math.min(65535, width)),
        Math.max(1, Math.min(65535, height)),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds page mode print direction setting to the command buffer.
   *
   * Specifies the print direction in the page mode.
   *
   * - This API does not work in the standard mode.
   * - Use this API between the `addPageBegin` and `addPageEnd` APIs.
   */
  async addPageDirection(
    /** Specifies the print direction. */
    direction?: PrinterPageDirection,
  ) {
    try {
      return await NativeInterface.addPageDirection(
        this.#id,
        direction ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds print position setting within the print area in the page mode to the
   * command buffer.
   *
   * Specifies the print start position (coordinates) within the area specified
   * by the `addPageArea` API.
   *
   * - This API does not work in the standard mode.
   * - Use this API between the `addPageBegin` and `addPageEnd` APIs.
   * - Specify the print start position (coordinates) in accordance with the
   *   contents to print.
   */
  async addPagePosition(
    /** Specifies the horizontal start position of the print area (in dots). */
    x: number,
    /** Specifies the vertical start position of the print area (in dots). */
    y: number,
  ) {
    try {
      return await NativeInterface.addPagePosition(
        this.#id,
        Math.max(0, Math.min(65535, x)),
        Math.max(0, Math.min(65535, y)),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a page mode line draw command to the command buffer.
   *
   * Draws a line in the page mode.
   *
   * - This API does not work in the standard mode.
   * - A diagonal line cannot be drawn.
   * - Use this API between the `addPageBegin` and `addPageEnd` APIs.
   */
  async addPageLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    style?: PrinterLineStyle,
  ) {
    try {
      return await NativeInterface.addPageLine(
        this.#id,
        Math.max(0, Math.min(65535, x1)),
        Math.max(0, Math.min(65535, y1)),
        Math.max(0, Math.min(65535, x2)),
        Math.max(0, Math.min(65535, y2)),
        style ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a page mode rectangle draw command to the command buffer.
   *
   * Draws a rectangle in the page mode.
   *
   * - This API does not work in the standard mode.
   * - Use this API between the `addPageBegin` and `addPageEnd` APIs.
   */
  async addPageRectangle(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    style?: PrinterLineStyle,
  ) {
    try {
      return await NativeInterface.addPageRectangle(
        this.#id,
        Math.max(0, Math.min(65535, x1)),
        Math.max(0, Math.min(65535, y1)),
        Math.max(0, Math.min(65535, x2)),
        Math.max(0, Math.min(65535, y2)),
        style ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds the start batch rotate print mode to the command buffer.
   *
   * - This API does not work in the page mode.
   * - Use the add APIs for batch rotate printing (Example: `addText`) by
   *   enclosing between this API and the `addRotateEnd` API.
   * - Do not use the following APIs between this API and the `addRotateEnd` API.
   *   - `endTransaction`
   *   - `addPageBegin`
   *   - `addPageEnd`
   *   - `addCut`
   *   - `addPulse`
   *   - `addSound`
   *   - `setPrinterSetting`
   *   - `ejectPaper`
   * - The data volume that the printer can process in a single batch rotate
   *   printing is as described below.
   *   - Strings: 80 lines
   *   - Graphics: 2400 dots
   * - When you are using the add APIs (Example: `addText`) in the batch rotate
   *   print mode, you must take care while using certain APIs.
   *   - `addTextSize`
   *     - If the longitudinal direction is set to triple angle or higher with
   *       `addTextSize` before this API, then this API and the succeeding APIs
   *       will become double-angled.
   *     - If the longitudinal direction is set to triple angle or higher with
   *       `addTextSize` after this API, then the specification in the
   *       longitudinal direction will be ignored and become single-angled.
   *   - `addFeedUnit`
   *     - The number of paper feed lines varies depending on the line spacing
   *       specified in `addLineSpace`. If the line spacing is specified as 30
   *       in `addLineSpace`, paper feeding can be performed for 8 lines with
   *       the maximum value of `addFeedUnit` as 255.
   *   - `addImage`
   *     - If the total vertical size of print data exceeds 2400 dots, printing
   *       may not be performed as intended. For example, if 500-dot data B is
   *       sent to a location in the printer buffer where 2000-dot data A is
   *       accumulated, then data B will be accumulated in the printer buffer
   *       after data A has been printed.
   *     - The multi-gradation (16 scales) maximum size is up to 600 dots
   *       vertically. In the case of multi-gradation (16 scales), a data volume
   *       that is four times that of monochrome (2 scales) is required.
   *     - If the vertical size of one image element exceeds the data volume
   *       that can be processed in one go, printing will not be performed.
   *       - Monochrome (2 scales) maximum value: 2400 dots
   *       - Multi-gradation (16 scales) maximum value: 600 dots
   */
  async addRotateBegin() {
    try {
      return await NativeInterface.addRotateBegin(this.#id);
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds the end batch rotate print mode to the command buffer.
   *
   * - This API does not work in the page mode.
   * - Use the add APIs for batch rotate printing (Example: addText) by
   *   enclosing between this API and the `addRotateBegin` API.
   */
  async addRotateEnd() {
    try {
      return await NativeInterface.addRotateEnd(this.#id);
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a sheet cut command to the command buffer.
   *
   * Sets how to cut paper.
   *
   * - This API cannot be used in the page mode.
   * - Use this API at the "beginning of a line." If this API is used elsewhere,
   *   it will be ignored.
   * - If print data is not specified after the cut reservation
   *   (Printer.CUT_RESERVE), the printer will execute the cut after feeding
   *   paper up to the position of the reserved cut.
   * - Depending on the printer, it may wait approximately 2 seconds for the
   *   print data after the cut reservation (Printer.CUT_RESERVE) before
   *   starting the paper feed operation.
   * - When using the cut reservation (Printer.CUT_RESERVE), set the length of
   *   one receipt to at least 20 mm.
   */
  async addCut(
    /** Specifies the cut type. */
    type?: PrinterCutType,
  ) {
    try {
      return await NativeInterface.addCut(
        this.#id,
        type ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a drawer kick command to the command buffer.
   *
   * Sets the drawer kick.
   *
   * - This API cannot be used in the page mode.
   * - The drawer and optional external buzzer cannot be connected
   *   simultaneously.
   * - Do not open the drawer repeatedly for a short time. The drawer may be
   *   damaged due to too much load.
   * - For built-in buzzer equipped models of the following printers, sounding
   *   the buzzer is possible using the pulse output commands for drawer kick
   *   connectors. For details on controlling the built-in buzzer, refer to the
   *   Technical Reference Guide of the printer. TM-T70 / TM-T70II / TM-T82II /
   *   TM-T82III / TM-T83II / TM-T88IV / TM-T88V / TM-T88VI / TM-T88VII /
   *   TM-T82II-i / TM-T83II-i / TM-T88VI-iHUB / TM-L90 / TM-L100
   */
  async addPulse(
    /** Specifies the drawer kick connector number. */
    drawer?: PrinterPulseDrawer,
    /** Specifies the on time (in milliseconds). */
    time?: PrinterPulseTime,
  ) {
    try {
      return await NativeInterface.addPulse(
        this.#id,
        drawer ?? Printer.PARAM_DEFAULT,
        time ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds buzzer sound setting to the command buffer.
   *
   * Sets the buzzer.
   *
   * - This API cannot be used in the page mode.
   * - The drawer and optional external buzzer cannot be connected simultaneously.
   * - This API cannot be used if the printer is not equipped with a buzzer.
   * - The timing to receive the callback of sendData API varies by printer.
   *   - Mobile models: after the `sendData` API is executed.
   *   - Other than Mobile models: after the buzzer sounding is finished.
   * - For built-in buzzer equipped models of the following printers, sounding
   *   the buzzer is possible using `addPulse`.
   *   TM-T70 / TM-T70II / TM-T82II / TM-T82III / TM-T83II / TM-T88IV / TM-T88V
   *   / TM-T88VI / TM-T88VII / TM-T82II-i / TM-T83II-i / TM-T88VI-iHUB / TM-L90
   *   / TM-L100
   */
  async addSound(
    /** Specifies the sound pattern. */
    pattern?: PrinterSoundPattern,
    /** Specifies the repeat count. 0 = Unlimited */
    repeat?: number,
    /** Effective for Patterns 1 to 10 only. */
    cycle?: number,
  ) {
    try {
      return await NativeInterface.addSound(
        this.#id,
        pattern ?? Printer.PARAM_DEFAULT,
        repeat ? Math.max(0, Math.min(255, repeat)) : Printer.PARAM_DEFAULT,
        cycle ? Math.max(1000, Math.min(25500, cycle)) : Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a label sheet/black mark sheet feed command to the command buffer.
   *
   * - The label sheet/black mark sheet can be controlled in the standard mode.
   * - This API cannot be used in the page mode.
   * - Use this API at the "beginning of a line." If this API is used elsewhere,
   *   it will be ignored.
   */
  async addFeedPosition(position: PrinterFeedPosition) {
    try {
      return await NativeInterface.addFeedPosition(this.#id, position);
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds layout setting of the label sheet/black mark sheet to the command
   * buffer.
   *
   * - This API does not work in the page mode.
   * - Use this API at the "beginning of a line." If this API is used elsewhere,
   *   it will be ignored.
   * - Available setting values vary by TM printer model. For more details, see
   *   the FS (L<Function 33> command.
   *   https://support.epson.net/publist/reference_en/
   * - The available parameter values for each type of paper are listed below.
   *   The following table shows available values for TM printer models, and
   *   shows those for POS terminal models in parentheses.
   */
  async addLayout(
    /** Specifies the paper type. */
    type: PrinterLayoutType,
    /** Specifies the paper width (in 0.1 mm units). */
    width: number,
    /**
     * Specifies the distance from the print reference mark to the next print
     * reference mark (in 0.1mm units).
     */
    height: number,
    /**
     * Specifies the distance from the print reference mark to the top of the
     * sheet (in 0.1mm units).
     */
    marginTop: number,
    /**
     * Specifies the distance from the eject reference mark to the bottom edge
     * of the printable area (in 0.1mm units).
     */
    marginBottom: number,
    /**
     * Specifies the distance from the eject reference mark to the cut position
     * (in 0.1mm units).
     */
    offsetCut: number,
    /**
     * Specifies the distance from the eject reference mark to the bottom edge
     * of the label (in 0.1mm units).
     */
    offsetLabel: number,
  ) {
    try {
      return await NativeInterface.addLayout(
        this.#id,
        type,
        Math.max(1, Math.min(10000, width)),
        Math.max(0, Math.min(10000, height)),
        Math.max(-9999, Math.min(10000, marginTop)),
        Math.max(-9999, Math.min(10000, marginBottom)),
        Math.max(-9999, Math.min(10000, offsetCut)),
        Math.max(0, Math.min(10000, offsetLabel)),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Adds a command to the command buffer.
   *
   * Sends the ESC/POS command.
   *
   * - Refer to the following URL for details of the ESC/POS command.
   *   https://support.epson.net/publist/reference_en/
   *
   * - Epson ePOS SDK does not check the commands sent using this API.
   *
   *   If the commands interfere with Epson ePOS SDK operations, other APIs may
   *   work wrongly or status values may become invalid.
   *
   *   This API should be used with a full understanding of ESC/POS commands and
   *   the receipt printer specifications.
   */
  async addCommand(command: string) {
    try {
      return await NativeInterface.addCommand(this.#id, command);
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Acquires the value of the printer's maintenance counter.
   */
  async getMaintenanceCounter(
    type: PrinterMaintainenceCounterType,
    timeout?: number,
  ) {
    try {
      return await NativeInterface.getMaintenanceCounter(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
        type,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Resets the value of the printer's maintenance counter.
   *
   * The value acquired by this API is notified to the listener method specified
   * in the listener parameter.
   */
  async resetMaintenanceCounter(
    type: PrinterMaintainenceCounterType,
    timeout?: number,
  ) {
    try {
      return await NativeInterface.resetMaintenanceCounter(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
        type,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Acquires the set value of the printer setting.
   *
   * The value acquired by this API is notified to the listener method specified
   * in the listener parameter.
   */
  async getPrinterSetting(type: PrinterSettingType, timeout?: number) {
    try {
      const ret = await NativeInterface.getPrinterSetting(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
        type,
      );

      return ret as PrinterSettingValue;
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Changes the set value of the printer setting.
   *
   * The value acquired by this API is notified to the listener method specified
   * in the listener parameter.
   */
  async setPrinterSetting(
    settings: Record<PrinterSettingType, PrinterSettingValue>,
    timeout?: number,
  ) {
    try {
      return await NativeInterface.setPrinterSetting(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
        settings,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Acquires the set value of the printer setting in JSON format.
   */
  async getPrinterSettingEx(timeout?: number) {
    try {
      const ret = await NativeInterface.getPrinterSettingEx(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
      );

      return ret as PrinterSettings;
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Changes the set value of the printer setting in JSON format.
   *
   * For the JSON used in this API, use the printer information JSON acquired
   * with the getPrinterSettingEx API.
   *
   * Do not use the printer information JSON acquired from another model.
   *
   * Before executing the API, you can execute the verifyPassword API to make
   * sure this API uses the correct password.
   *
   * Execute the getPrinterSettingEx API after executing this API, and check
   * that the printer settings have been changed correctly.
   *
   * This API error status is the API processing result.
   *
   * The processing result of the devices using this API is notified to the
   * listener method set by the `setSetPrinterSettingExListener` API of the
   * Printer class.
   *
   * Do not execute this API in continuation without checking the processing
   * result with the callback method.
   */
  async setPrinterSettingEx(
    /**
     * Specifies the set value of the printer setting in JSON format.
     *
     * Refer to JSON_Spec_sheet_revx.pdf included in the package for more
     * information.
     */
    settings: PrinterSettings["Setting"],
    password: string,
    timeout?: number,
  ) {
    try {
      return await NativeInterface.setPrinterSettingEx(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
        JSON.stringify({ Setting: settings }),
        password,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Compare the character string specified in this API with the administrator
   * password set in the printer. Check to see if the specified character string
   * and administrator password match.
   *
   * This API error status is the API processing result.
   *
   * The processing result of the devices using this API is notified to the
   * listener method set by the `setVerifyPasswordListener` API of the Printer
   * class.
   *
   * Do not execute this API in continuation without checking the processing
   * result with the callback method.
   */
  async verifyPassword(password: string, timeout?: number) {
    try {
      const ret = await NativeInterface.verifyPassword(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
        password,
      );

      return ret as CallbackCode;
    } catch (error) {
      throw (
        getEpsonError(error, {
          [ErrorCode.ERR_CONNECT]: "Communication with the server failed.",
        }) ?? error
      );
    }
  }

  /**
   * Acquires the printer serial number and the missing dot information of the
   * thermal head.
   *
   * The value acquired by this API is notified to the listener method specified
   * in the listener parameter.
   */
  async getPrinterInformation(timeout?: number) {
    try {
      const ret = await NativeInterface.getPrinterInformation(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
      );

      return ret as PrinterInformation;
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Acquires the firmware information for the connected printer.
   */
  async getPrinterFirmwareInfo(timeout?: number) {
    try {
      const ret = await NativeInterface.getPrinterFirmwareInfo(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
      );

      return ret as PrinterFirmwareInfomation;
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Compares the firmware of the connected printer with the firmware image
   * specified by `updateFirmware`.
   *
   * Execute this API after executing `updateFirmware`, and confirm that the
   * printer firmware has been overwritten by the firmware image specified in
   * `updateFirmware`.
   *
   * The processing result of this API is notified to the listener method
   * specified in the listener parameter.
   */
  async verifyUpdate(targetFirmwareInfo: PrinterFirmwareInfomation) {
    try {
      return await NativeInterface.verifyUpdate(
        this.#id,
        JSON.stringify(targetFirmwareInfo),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  async downloadFirmwareList(printerModel: string, option: string) {
    try {
      const ret = await NativeInterface.downloadFirmwareList(
        this.#id,
        printerModel,
        option,
      );

      return ret as PrinterFirmwareInfomation[];
    } catch (error) {
      throw (
        getEpsonError(error, {
          [ErrorCode.ERR_PARAM]:
            "- An invalid parameter was passed.\n - This API was called before updateFirmware was executed.",
        }) ?? error
      );
    }
  }

  /**
   * Downloads the firmware image from the server and instructs the printer to
   * overwrite the firmware image.
   *
   * Execute verifyUpdate after executing this API, and confirm that the printer
   * firmware has been overwritten by the firmware image.
   *
   * The return value from this API is the result of instructing writing of the
   * firmware image to the printer. It is not the execution result of the
   * overall firmware update.
   *
   * The progress and processing result of this API is notified to the listener
   * method specified in the listener parameter.
   *
   * @returns The maximum waiting time for the firmware update
   */
  async updateFirmware(firmwareInfo: PrinterFirmwareInfomation) {
    try {
      return await NativeInterface.updateFirmware(
        this.#id,
        JSON.stringify(firmwareInfo),
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Forcibly sends the error recovery command from a recoverable error status
   * (example: auto cutter error).
   *
   * For details on recoverable errors, refer to the Technical Reference Guide
   * of each printer.
   *
   * - After recovering from a recoverable error, the buffer of the printer is
   *   reset.
   * - For TM-H6000V, the “Command execution during offline” setting must be
   *   enabled.  \
   *   Refer to TM-H6000V Utility User’s Manual for more information.
   * - Available during ePOS-Device XML control.
   */
  async forceRecover(timeout?: number) {
    try {
      return await NativeInterface.forceRecover(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Forcibly sends the drawer kick command.
   *
   * - The drawer and optional external buzzer cannot be connected
   *   simultaneously.
   * - For TM-H6000V, the “Command execution during offline” setting must be
   *   enabled.  \
   *   Refer to TM-H6000V Utility User’s Manual for more information.
   * - Available during ePOS-Device XML control.
   */
  async forcePulse(
    drawer: PrinterPulseDrawer,
    time?: PrinterPulseTime,
    timeout?: number,
  ) {
    try {
      return await NativeInterface.forcePulse(
        this.#id,
        drawer,
        time ?? Printer.PARAM_DEFAULT,
        timeout ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Forcibly sends the buzzer sound command.
   *
   * - The drawer and optional external buzzer cannot be connected
   *   simultaneously.
   * - For TM-H6000V, the “Command execution during offline” setting must be
   *   enabled.  \
   *   Refer to TM-H6000V Utility User’s Manual for more information.
   * - Available during ePOS-Device XML control.
   */
  async forceStopSound(timeout?: number) {
    try {
      return await NativeInterface.forceStopSound(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Forcibly sends the ESC/POS command.
   *
   * - For TM-H6000V, the “Command execution during offline” setting must be
   *   enabled.  \
   *   Refer to TM-H6000V Utility User’s Manual for more information.
   * - Available during ePOS-Device XML control.
   */
  async forceCommand(
    /** Base64 encoded byte[] */
    data: string,
    timeout?: number,
  ) {
    try {
      return await NativeInterface.forceCommand(
        this.#id,
        data,
        timeout ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  /**
   * Forcibly sends the printer reset command.
   *
   * - For TM-H6000V, the “Command execution during offline” setting must be
   *   enabled.  \
   *   Refer to TM-H6000V Utility User’s Manual for more information.
   * - Available during ePOS-Device XML control.
   */
  async forceReset(timeout?: number) {
    try {
      return await NativeInterface.forceReset(
        this.#id,
        timeout ?? Printer.PARAM_DEFAULT,
      );
    } catch (error) {
      throw getEpsonError(error) ?? error;
    }
  }

  #mutex: Promise<unknown> = Promise.resolve();

  /**
   * Sending print data in the callback as a single transaction.
   */
  async transaction(callback: (printer: Printer) => Promise<void>) {
    this.#mutex = this.#mutex.then(async () => {
      await this.beginTransaction();
      await callback(this);
      await this.endTransaction();
    });

    await this.#mutex;
  }

  /**
   * Sending print data in the callback as a single rotate batch.
   */
  async rotate(callback: (printer: Printer) => Promise<void>) {
    this.#mutex = this.#mutex.then(async () => {
      await this.addRotateBegin();
      await callback(this);
      await this.addRotateEnd();
    });

    await this.#mutex;
  }

  /**
   * Sending print data in the callback as a single page.
   */
  async page(callback: (printer: Printer) => Promise<void>) {
    this.#mutex = this.#mutex.then(async () => {
      await this.addPageBegin();
      await callback(this);
      await this.addPageEnd();
    });

    await this.#mutex;
  }
}

// For future use: incremental status change
//
// this.on("statusChange", async (event) => {
//   switch (event) {
//     case PrinterStatusChangeEvent.EVENT_ONLINE:
//       status.online = true;
//       break;
//     case PrinterStatusChangeEvent.EVENT_OFFLINE:
//       status.online = false;
//       break;
//     case PrinterStatusChangeEvent.EVENT_POWER_OFF:
//       status.connection = false;
//       status.online = false;
//       break;
//     case PrinterStatusChangeEvent.EVENT_COVER_CLOSE:
//       status.coverOpen = false;
//       break;
//     case PrinterStatusChangeEvent.EVENT_COVER_OPEN:
//       status.coverOpen = true;
//       break;
//     case PrinterStatusChangeEvent.EVENT_PAPER_OK:
//       status.paper = PrinterPaperStatus.PAPER_OK;
//       break;
//     case PrinterStatusChangeEvent.EVENT_PAPER_NEAR_END:
//       status.paper = PrinterPaperStatus.PAPER_NEAR_END;
//       break;
//     case PrinterStatusChangeEvent.EVENT_PAPER_EMPTY:
//       status.paper = PrinterPaperStatus.PAPER_EMPTY;
//       break;
//     case PrinterStatusChangeEvent.EVENT_DRAWER_HIGH:
//       status.drawer = PrinterDrawerStatus.DRAWER_HIGH;
//       break;
//     case PrinterStatusChangeEvent.EVENT_DRAWER_LOW:
//       status.drawer = PrinterDrawerStatus.DRAWER_LOW;
//       break;
//     case PrinterStatusChangeEvent.EVENT_BATTERY_EMPTY:
//       status.batteryLevel = PrinterBatteryLevelStatus.BATTERY_LEVEL_0;
//       break;
//     case PrinterStatusChangeEvent.EVENT_REMOVAL_WAIT_PAPER:
//       status.removalWaiting = true;
//       break;
//     case PrinterStatusChangeEvent.EVENT_REMOVAL_WAIT_NONE:
//       status.removalWaiting = false;
//       break;
//     case PrinterStatusChangeEvent.EVENT_AUTO_RECOVER_OK:
//       status.autoRecoverError = undefined;
//       break;
//     // case PrinterStatusChangeEvent.EVENT_BATTERY_ENOUGH:
//     // case PrinterStatusChangeEvent.EVENT_AUTO_RECOVER_ERROR:
//     // case PrinterStatusChangeEvent.EVENT_UNRECOVERABLE_ERROR:
//     // case PrinterStatusChangeEvent.EVENT_REMOVAL_DETECT_PAPER:
//     // case PrinterStatusChangeEvent.EVENT_REMOVAL_DETECT_PAPER_NONE:
//     // case PrinterStatusChangeEvent.EVENT_REMOVAL_DETECT_UNKNOWN:
//     default:
//       status = await this.getStatus();
//   }
// });
