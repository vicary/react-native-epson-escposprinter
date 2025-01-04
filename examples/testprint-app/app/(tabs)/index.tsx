import { useIsHermes } from "@/hooks/useIsHermes";
import { useNewArchitecture } from "@/hooks/useNewArchitecture";
import { FunctionComponent, useState } from "react";
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
  // await printer.setEncoding("UTF-8");
  await printer.addTextLang(PrinterLanguage.LANG_MULTI);
  await printer.addText("Hello World!你好世界！\n");
  await printer.addTextAlign(PrinterAlign.ALIGN_LEFT);
  await printer.addTextFont(PrinterFont.FONT_A);

  [
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

const App: FunctionComponent = () => {
  const isFabric = useNewArchitecture();
  const isHermes = useIsHermes();

  const [printers, setAnswer] = useState<DeviceInfo[] | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView className="bg-gray-300">
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className="min-h-screen"
      >
        <View className="px-3 py-10 h-full flex gap-5">
          <Text>Fabric: {isFabric ? "✅" : "❎"}</Text>
          <Text>Hermes: {isHermes ? "✅" : "❎"}</Text>

          <Pressable
            className="bg-gray-200 active:bg-gray-300 active:opacity-50 rounded-xl"
            onPress={async () => {
              setLoading(!loading);

              try {
                await testPrint(
                  PrinterSeries.TM_P80,
                  PrinterLocale.MODEL_CHINESE,
                  "USB:",
                );
              } catch (e) {
                if (e instanceof Error) {
                  console.error(e);
                } else {
                  throw e;
                }
              }

              setLoading(false);
            }}
          >
            {loading
              ? <ActivityIndicator className="p-4 text-lg color-blue-500" />
              : (
                <Text className="p-3 color-blue-500 text-lg text-center">
                  Test USB Printer
                </Text>
              )}
          </Pressable>

          <Pressable
            className="bg-gray-200 active:bg-gray-300 active:opacity-50 rounded-xl"
            onPress={async () => {
              setLoading(true);
              setAnswer(null);

              try {
                // [ ] Support array
                for await (const device of discoverPrinters({})) {
                  setAnswer((devices) => (devices ?? []).concat(device));
                  // [ ] Implement timeout before returning
                  return;
                }
              } catch (e) {
                if (e instanceof Error) {
                  console.error(e);
                } else {
                  throw e;
                }
              } finally {
                setLoading(false);
              }
            }}
          >
            {loading
              ? <ActivityIndicator className="p-4 text-lg color-blue-500" />
              : (
                <Text className="p-3 color-blue-500 text-lg text-center">
                  Search Wifi Printers
                </Text>
              )}
          </Pressable>

          {printers
            ?.map((printer) => (
              <Pressable
                className="bg-gray-200 active:bg-gray-300 active:opacity-50 rounded-xl"
                key={printer.ipAddress}
                disabled={loading}
                onPress={async () => {
                  setLoading(true);

                  try {
                    await testPrint(
                      PrinterSeries.TM_P80, // [ ] Searchable?
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

                  setLoading(false);
                }}
              >
                <View className="p-4 flex flex-row justify-between">
                  <Text className="color-blue-500">{printer.ipAddress}</Text>
                  <Text className="color-black">{printer.macAddress}</Text>
                </View>
              </Pressable>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
