import { useIsHermes } from "@/hooks/useIsHermes";
import { useNewArchitecture } from "@/hooks/useNewArchitecture";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Platform,
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

const testPage = async (device: DeviceInfo) => {
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

    for (
      const [width, height] of [
        [1, 1],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 8],
      ]
    ) {
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
};

const Home: FunctionComponent = () => {
  const isFabric = useNewArchitecture();
  const isHermes = useIsHermes();
  const [printers, setPrinters] = useState<DeviceInfo[]>([]);

  useEffect(() => {
    let promise: ReturnType<typeof discoverPrinters> | null = discoverPrinters(
      { deviceType: FilterDeviceType.TYPE_PRINTER },
      { verbose: true },
    );

    (async () => {
      while (promise) {
        try {
          for await (const printer of await promise) {
            setPrinters((printers) => [...printers, printer]);
          }
        } catch (e) {
          console.error("Creating new discovery service on error...", e);

          await new Promise((r) => setTimeout(r, 500));

          setPrinters([]);

          promise = discoverPrinters(
            { deviceType: FilterDeviceType.TYPE_PRINTER },
            { verbose: true },
          );
        }
      }
    })();

    return () => {
      setPrinters([]);

      promise?.then((d) => d.return());
      promise = null;
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

          <View className="flex flex-row items-center gap-1">
            <ActivityIndicator
              size={10}
              color="#9CA3AF"
              className={Platform.OS === "ios" ? "px-2" : undefined}
            />
            <Text className="text-xs text-gray-400">
              Scanning for printers...
            </Text>
          </View>

          <View className="flex flex-row flex-wrap gap-3">
            {printers.map((printer) => (
              <PrinterCard key={printer.target} device={printer} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const PrinterCard: FunctionComponent<{ device: DeviceInfo }> = (
  { device },
) => {
  const [printing, setPrinting] = useState(false);

  return (
    <Pressable
      className="bg-gray-200 active:bg-gray-300 active:opacity-50 rounded-xl w-60"
      onPress={async () => {
        try {
          setPrinting(true);

          await testPage(device);
        } catch (e) {
          console.error(e);
        } finally {
          setPrinting(false);
        }
      }}
    >
      <View className="p-4 flex flex-col justify-between">
        <View className={printing ? "opacity-20" : ""}>
          <Text className="color-black">{device.deviceName}</Text>

          {device.target && (
            <Text className="text-xs color-blue-500">{device.target}</Text>
          )}

          {device.ipAddress && (
            <Text className="text-xs color-black">{device.ipAddress}</Text>
          )}

          {device.macAddress && (
            <Text className="text-xs color-black">{device.macAddress}</Text>
          )}

          {device.bdAddress && (
            <Text className="text-xs color-black">{device.bdAddress}</Text>
          )}

          {device.leBdAddress && (
            <Text className="text-xs color-black">{device.leBdAddress}</Text>
          )}
        </View>

        {printing && (
          <ActivityIndicator
            size="small"
            color="blue"
            className="absolute top-0 left-0 bottom-0 right-0"
          />
        )}
      </View>
    </Pressable>
  );
};

export default Home;
