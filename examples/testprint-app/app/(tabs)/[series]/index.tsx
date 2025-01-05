import { useLocalSearchParams } from "expo-router";
import { FunctionComponent, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  connect,
  DeviceInfo,
  discoverPrinters,
  PrinterAlign,
  PrinterCutType,
  PrinterFont,
  PrinterLanguage,
  PrinterLocale,
  PrinterSeries,
  PrinterSymbolLevelQrcode,
  PrinterSymbolTypeQrcode,
} from "react-native-epson-escposprinter";

const testPrint = async (
  series: PrinterSeries,
  lang: PrinterLocale,
  target: string,
) => {
  const printer = await connect(series, lang, target);
  console.log("✅ connected:", target);

  const info = await printer.getPrinterInformation();
  console.log("✅ status", info);

  await printer.addTextLang(PrinterLanguage.LANG_MULTI);
  await printer.addTextAlign(PrinterAlign.ALIGN_LEFT);
  await printer.addTextFont(PrinterFont.FONT_A);

  [
    [1, 1],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
  ].forEach(async ([width, height]) => {
    await printer.addTextSize(width, height);
    await printer.addText("Hello World!你好世界！\n");
  });

  await printer.addSymbol(
    "https://www.google.com",
    PrinterSymbolTypeQrcode.SYMBOL_QRCODE_MODEL_1,
    PrinterSymbolLevelQrcode.LEVEL_H,
    8,
  );
  console.log("✅ printText");

  await printer.addCut(PrinterCutType.FULL_CUT_FEED);
  console.log("✅ cutPaper");

  await printer.disconnect();
  console.log("✅ disconnect");
};

const Printer: FunctionComponent = () => {
  const { series } = useLocalSearchParams();
  const printerSeries: PrinterSeries = Array.isArray(series)
    ? +series[0]
    : +series;

  useEffect(() => {
    const discovery = discoverPrinters();

    (async () => {
      for await (const device of discovery) {
        setPrinters((devices) => (devices ?? []).concat(device));
      }
    })();

    return () => {
      discovery.return();
    };
  }, []);

  const [printers, setPrinters] = useState<DeviceInfo[] | null>(null);
  const [printing, setPrinting] = useState(false);

  return (
    <SafeAreaView className="bg-gray-300">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className="min-h-screen"
      >
        <View className="px-3 py-10 h-full flex gap-5">
          <View className="p-4 text-xs color-gray-200 flex flex-row items-center gap-2">
            <ActivityIndicator />

            <Text>Searching for printers...</Text>
          </View>

          {printers?.map((printer) => (
            <Pressable
              className="bg-gray-200 active:bg-gray-300 active:opacity-50 rounded-xl"
              key={printer.target}
              disabled={printing}
              onPress={async () => {
                setPrinting(true);

                try {
                  await testPrint(
                    printerSeries,
                    PrinterLocale.MODEL_CHINESE,
                    printer.target,
                  );
                } catch (e) {
                  if (e instanceof Error) {
                    console.error(e.message);
                  } else {
                    throw e;
                  }
                }

                setPrinting(false);
              }}
            >
              <View className="p-4 flex flex-row justify-between">
                <Text className="color-black">{printer.deviceName}</Text>

                <Text className="text-xs color-blue-500">
                  {printer.bdAddress}
                </Text>
                <Text className="text-xs color-blue-500">
                  {printer.ipAddress}
                </Text>
                <Text className="text-xs color-black">
                  {printer.macAddress}
                </Text>
                <Text className="text-xs color-black">{printer.target}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Printer;
