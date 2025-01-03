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
  ESCPOSConst,
  searchCitizenPrinter,
  type CitizenPrinerInfo,
  type CitizenPrinerWiFiInfo,
} from "react-native-epson-escposprinter";

const testPrint = async (connectType: number, address?: string) => {
  const printer = await connect(connectType, address);
  console.log("✅ connected:", address);
  await printer.printerCheck();
  console.log("✅ printerCheck");
  const printerStatus = await printer.status();
  await printer.setEncoding("UTF-8");
  console.log("✅ status", printerStatus);
  await printer.printText("Hello World!你好世界！\n");
  await printer.printText(
    "Hello World!你好世界！\n",
    ESCPOSConst.CMP_ALIGNMENT_LEFT,
    ESCPOSConst.CMP_FNT_DEFAULT,
    ESCPOSConst.CMP_TXT_2WIDTH | ESCPOSConst.CMP_TXT_2HEIGHT,
  );
  await printer.printText(
    "Hello World!你好世界！\n",
    ESCPOSConst.CMP_ALIGNMENT_LEFT,
    ESCPOSConst.CMP_FNT_DEFAULT,
    ESCPOSConst.CMP_TXT_3WIDTH | ESCPOSConst.CMP_TXT_3HEIGHT,
  );
  await printer.printText(
    "Hello World!你好世界！\n",
    ESCPOSConst.CMP_ALIGNMENT_LEFT,
    ESCPOSConst.CMP_FNT_DEFAULT,
    ESCPOSConst.CMP_TXT_4WIDTH | ESCPOSConst.CMP_TXT_4HEIGHT,
  );
  await printer.printText(
    "Hello World!你好世界！\n",
    ESCPOSConst.CMP_ALIGNMENT_LEFT,
    ESCPOSConst.CMP_FNT_DEFAULT,
    ESCPOSConst.CMP_TXT_5WIDTH | ESCPOSConst.CMP_TXT_5HEIGHT,
  );
  await printer.printText(
    "Hello World!你好世界！\n",
    ESCPOSConst.CMP_ALIGNMENT_LEFT,
    ESCPOSConst.CMP_FNT_DEFAULT,
    ESCPOSConst.CMP_TXT_6WIDTH | ESCPOSConst.CMP_TXT_6HEIGHT,
  );
  await printer.printText(
    "Hello World!你好世界！\n",
    ESCPOSConst.CMP_ALIGNMENT_LEFT,
    ESCPOSConst.CMP_FNT_DEFAULT,
    ESCPOSConst.CMP_TXT_7WIDTH | ESCPOSConst.CMP_TXT_7HEIGHT,
  );
  await printer.printText(
    "Hello World!你好世界！\n",
    ESCPOSConst.CMP_ALIGNMENT_LEFT,
    ESCPOSConst.CMP_FNT_DEFAULT,
    ESCPOSConst.CMP_TXT_8WIDTH | ESCPOSConst.CMP_TXT_8HEIGHT,
  );
  await printer.printQRCode(
    "https://www.google.com",
    8,
    ESCPOSConst.CMP_QRCODE_EC_LEVEL_H,
  );
  console.log("✅ printText");
  await printer.cutPaper(ESCPOSConst.CMP_CUT_FULL_PREFEED);
  console.log("✅ cutPaper");
  await printer.disconnect();
  console.log("✅ disconnect");
};

const App: FunctionComponent = () => {
  const isFabric = useNewArchitecture();
  const isHermes = useIsHermes();

  const [answer, setAnswer] = useState<CitizenPrinerInfo[] | null>(null);
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
                await testPrint(ESCPOSConst.CMP_PORT_USB);
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
            {loading ? (
              <ActivityIndicator className="p-4 text-lg color-blue-500" />
            ) : (
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
                setAnswer(
                  await searchCitizenPrinter(ESCPOSConst.CMP_PORT_WiFi),
                );
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
            {loading ? (
              <ActivityIndicator className="p-4 text-lg color-blue-500" />
            ) : (
              <Text className="p-3 color-blue-500 text-lg text-center">
                Search Wifi Printers
              </Text>
            )}
          </Pressable>

          {answer
            ?.filter(
              (printer): printer is CitizenPrinerWiFiInfo =>
                !!(printer as any).ipAddress,
            )
            .map((printer) => (
              <Pressable
                className="bg-gray-200 active:bg-gray-300 active:opacity-50 rounded-xl"
                key={printer.ipAddress}
                disabled={loading}
                onPress={async () => {
                  setLoading(true);

                  try {
                    await testPrint(
                      ESCPOSConst.CMP_PORT_WiFi,
                      printer.ipAddress,
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
