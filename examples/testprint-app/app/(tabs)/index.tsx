import { useIsHermes } from "@/hooks/useIsHermes";
import { useNewArchitecture } from "@/hooks/useNewArchitecture";
import React, { FunctionComponent, useEffect, useState } from "react";
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
  FilterDeviceType,
  getPrinterSeriesFromDeviceName,
  PrinterAlign,
  PrinterCutType,
  PrinterFont,
  PrinterLanguage,
  PrinterLocale,
  PrinterSymbolLevelQrcode,
  PrinterSymbolTypeQrcode,
} from "react-native-epson-escposprinter";

const testPrint = async (
  device: DeviceInfo,
  lang: PrinterLocale,
) => {
  const series = getPrinterSeriesFromDeviceName(device.deviceName);
  if (!series) {
    throw new Error(`Unsupported printer: ${device.deviceName}`);
  }

  const printer = await connect(series, lang, device.target);
  console.log("✅ connected:", device.target);

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

const Home: FunctionComponent = () => {
  const isFabric = useNewArchitecture();
  const isHermes = useIsHermes();
  const [printers, setPrinters] = useState<DeviceInfo[]>([]);

  useEffect(() => {
    const promise = discoverPrinters({
      deviceType: FilterDeviceType.TYPE_PRINTER,
    }, { verbose: true });

    (async () => {
      for await (const printer of await promise) {
        setPrinters((printers) => [...printers, printer]);
      }
    })();

    return () => {
      promise.then((d) => d.return());
    };
  }, []);

  return (
    <SafeAreaView className="bg-gray-300">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className="min-h-screen"
      >
        <View className="px-3 py-10 h-full flex gap-3">
          <Text className="text-2xl font-bold">TestPrint</Text>

          <View>
            <Text className="text-xl">Environment</Text>
            <View className="flex flex-row gap-3">
              <Text>Fabric: {isFabric ? "✅" : "❎"}</Text>
              <Text>Hermes: {isHermes ? "✅" : "❎"}</Text>
            </View>
          </View>

          <View className="flex flex-row flex-wrap gap-3">
            {printers.map((printer) => (
              <Printer key={printer.target} printer={printer} />
            ))}
          </View>

          <View>
            <ActivityIndicator size="small" />
            <Text className="text-xl">Scanning...</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Printer: FunctionComponent<{ printer: DeviceInfo }> = ({ printer }) => {
  const [printing, setPrinting] = useState(false);

  return (
    <Pressable
      className="bg-gray-200 active:bg-gray-300 active:opacity-50 rounded-xl w-32"
      onPress={async () => {
        setPrinting(true);

        try {
          await testPrint(printer, PrinterLocale.MODEL_CHINESE);
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
      <View className="p-4 flex flex-col justify-between">
        {printing ? <ActivityIndicator size="small" color="blue" /> : (
          <>
            <Text className="color-black">{printer.deviceName}</Text>

            <Text className="text-xs color-blue-500">{printer.bdAddress}</Text>
            <Text className="text-xs color-blue-500">{printer.ipAddress}</Text>
            <Text className="text-xs color-black">{printer.macAddress}</Text>
            <Text className="text-xs color-black">{printer.target}</Text>
          </>
        )}
      </View>
    </Pressable>
  );
};

export default Home;
