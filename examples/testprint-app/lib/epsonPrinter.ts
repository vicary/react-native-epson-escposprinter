import { PrinterSettings } from "@/components/PrinterForm";
import {
  connect,
  getPrinterSeriesFromDeviceName,
  type Printer,
  PrinterLocale,
  PrinterSeries,
} from "react-native-epson-escposprinter";
import type { AsyncIterablePipe } from "./async/pipe";

/**
 * Ensures only one printer connection per target.
 */
class PrinterConnection {
  private static readonly connections = new Map<string, PrinterConnection>();

  static async connect(
    series: PrinterSeries,
    lang: PrinterLocale,
    target: string,
    timeout?: number,
  ) {
    if (this.connections.has(target)) {
      const wrapper = this.connections.get(target)!;

      wrapper.referenceCount++;

      return wrapper;
    }

    const printer = await connect(series, lang, target, timeout);

    this.connections.set(target, new PrinterConnection(printer));

    printer.once("disconnect", () => {
      this.connections.delete(target);
    });

    return new PrinterConnection(printer);
  }

  public referenceCount = 1;

  constructor(readonly printer: Printer) {}

  async disconnect() {
    if (--this.referenceCount === 0) {
      // Delay for possible navigation re-mounts.
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Still no references after delay, disconnect.
      if (this.referenceCount <= 0) {
        await this.printer.disconnect();
      }
    }
  }
}

export type PrintTemplate = Array<{
  type: string;
  data: any;
}>;

export type EpsonPrinterOptions<T> = {
  // template: PrintTemplate;
  connectionTimeout?: number;
  onConnect?: (printer: Printer) => unknown;
  onError?: (error: Error) => unknown;
  onPrint?: (printer: Printer, message: T) => unknown;
};

export const epsonPrinter = <T>(
  { deviceName, target }: PrinterSettings,
  { connectionTimeout, onConnect, onError, onPrint }: EpsonPrinterOptions<T>,
): AsyncIterablePipe<T> =>
  async function* (iterator) {
    const series = getPrinterSeriesFromDeviceName(deviceName);
    if (!series) {
      throw new Error(`Unsupported printer series: ${deviceName}`);
    }

    while (true) {
      try {
        const connection = await PrinterConnection.connect(
          series,
          PrinterLocale.MODEL_ANK,
          target,
          connectionTimeout,
        );

        await onConnect?.(connection.printer);

        for await (const message of iterator) {
          while (true) {
            try {
              await connection.printer.transaction(async (printer) => {
                await onPrint?.(printer, message);
              });

              break;
            } catch (error) {
              if (!(error instanceof Error)) throw error;

              await onError?.(error);
            }
          }
        }

        await connection.disconnect();
      } catch (error) {
        if (!(error instanceof Error)) throw error;

        await onError?.(error);
      }
    }
  };
