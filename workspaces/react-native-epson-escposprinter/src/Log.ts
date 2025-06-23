import { getEpsonError, PrinterParamError } from "./errors";
import { NativeInterface } from "./NativeInterface";

export const enum LogPeriod {
  PERIOD_TEMPORARY = 0,
  PERIOD_PERMANENT = 1,
}

export const enum LogOutput {
  OUTPUT_DISABLE = 0,
  OUTPUT_STORAGE = 1,
  OUTPUT_TCP = 2,
}

export const enum LogLevel {
  LOGLEVEL_LOW = 0,
}

export class Log {
  /**
   * Disable logs.
   */
  public static async disable() {
    try {
      return await NativeInterface.setLogSettings(
        LogPeriod.PERIOD_TEMPORARY,
        LogOutput.OUTPUT_DISABLE,
        "",
        1024,
        1,
        LogLevel.LOGLEVEL_LOW,
      );
    } catch (error) {
      throw getEpsonError(error);
    }
  }

  /**
   * Enable logs and send the output to the device storage.
   */
  public static async enableLocal(
    /**
     * Specifies whether the log output function setting is temporary or
     * permanent. The configuration file is not created for temporary setting
     * but is created for permanent setting.
     *
     * @default LogPeriod.PERIOD_TEMPORARY
     */
    period = LogPeriod.PERIOD_TEMPORARY,
    /**
     * Specifies the maximum capacity of the log stored in the storage.
     *
     * @default 10
     */
    size = 10,
    level = LogLevel.LOGLEVEL_LOW,
  ) {
    if (size <= 0 || size > 1000) {
      throw new PrinterParamError("Log size must be between 1 and 1000 MB.");
    }

    try {
      return await NativeInterface.setLogSettings(
        period,
        LogOutput.OUTPUT_STORAGE,
        "",
        1,
        size,
        level,
      );
    } catch (error) {
      throw getEpsonError(error);
    }
  }

  /**
   * Enable logs and stream output to the specified TCP endpoint.
   */
  public static async enableNetwork(
    /** Specifies the IP address in the IPv4 format for TCP communication. */
    ip: string,
    /** Specifies the port number for TCP communication. */
    port: number,
    level = LogLevel.LOGLEVEL_LOW,
  ) {
    if (port < 1 || port > 65535) {
      throw new PrinterParamError("Port number must be between 1 and 65535.");
    }

    try {
      return await NativeInterface.setLogSettings(
        LogPeriod.PERIOD_TEMPORARY,
        LogOutput.OUTPUT_TCP,
        ip,
        port,
        1,
        level,
      );
    } catch (error) {
      throw getEpsonError(error);
    }
  }

  /** Acquires the Epson ePOS SDK version. */
  public static async getSdkVersion(): Promise<string> {
    try {
      return await NativeInterface.getSdkVersion();
    } catch (error) {
      throw getEpsonError(error);
    }
  }
}
