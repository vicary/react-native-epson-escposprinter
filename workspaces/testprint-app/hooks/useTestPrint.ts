import { useCallback } from "react";
import {
  connect,
  type DeviceInfo,
  getPrinterSeriesFromDeviceName,
  PrinterAlign,
  PrinterCutType,
  PrinterFont,
  PrinterLanguage,
  PrinterLocale,
  PrinterSymbolLevelQrcode,
  PrinterSymbolTypeQrcode,
} from "react-native-epson-escposprinter";

export const useTestPrint = () => {
  return useCallback(async (device: DeviceInfo) => {
    const series = getPrinterSeriesFromDeviceName(device.deviceName);
    if (!series) {
      throw new Error(`Unsupported printer: ${device.deviceName}`);
    }

    const printer = await connect(
      series,
      PrinterLocale.MODEL_ANK,
      device.target,
    );
    console.log("✅ connected:", device.target);

    try {
      const info = await printer.getPrinterInformation();
      console.log("✅ status", info);

      await printer.addTextLang(PrinterLanguage.LANG_ZH_TW);
      await printer.addTextAlign(PrinterAlign.ALIGN_LEFT);
      await printer.addTextFont(PrinterFont.FONT_A);

      for (const [width, height] of [
        [1, 1],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 8],
      ]) {
        await printer.addTextSize(width, height);
        await printer.addText("Hello World!你好世界！\n");
      }

      await printer.addSymbol(
        "https://www.google.com",
        PrinterSymbolTypeQrcode.SYMBOL_QRCODE_MODEL_1,
        PrinterSymbolLevelQrcode.LEVEL_H,
        10,
      );
      // await printer.sendData();
      console.log("✅ printText");

      await printer.addCut(PrinterCutType.CUT_FEED);
      console.log("✅ cutPaper");

      await printer.sendData();
      await printer.clearCommandBuffer();
    } finally {
      await printer.disconnect();
      console.log("✅ disconnect");
    }
  }, []);
};
