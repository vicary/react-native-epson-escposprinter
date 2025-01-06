import { useIsHermes } from "@/hooks/useIsHermes";
import { useNewArchitecture } from "@/hooks/useNewArchitecture";
import { Link } from "expo-router";
import { FunctionComponent } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { PrinterSeries } from "react-native-epson-escposprinter";

const availablePrinters: Record<PrinterSeries, string> = {
  0: "TM_M10",
  1: "TM_M30",
  2: "TM_P20",
  3: "TM_P60",
  4: "TM_P60II",
  5: "TM_P80",
  6: "TM_T20",
  7: "TM_T60",
  8: "TM_T70",
  9: "TM_T81",
  10: "TM_T82",
  11: "TM_T83",
  12: "TM_T88",
  13: "TM_T90",
  14: "TM_T90KP",
  15: "TM_U220",
  16: "TM_U330",
  17: "TM_L90",
  18: "TM_H6000",
  19: "TM_T83III",
  20: "TM_T100",
  22: "TM_M30II",
  23: "TS_100",
  24: "TM_M50",
  25: "TM_T88VII",
  26: "TM_L90LFC",
  27: "EU_M30",
  28: "TM_L100",
  30: "TM_P20II",
  31: "TM_P80II",
  32: "TM_M30III",
  33: "TM_M50II",
  34: "TM_M55",
  35: "TM_U220II",
};

const Home: FunctionComponent = () => {
  const isFabric = useNewArchitecture();
  const isHermes = useIsHermes();

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
            {Object.entries(availablePrinters).map(([key, value]) => (
              <Link key={key} href={`/${key}`} asChild>
                <Pressable className="bg-gray-200 active:bg-gray-300 active:opacity-50 rounded-xl w-32">
                  <Text className="p-3 color-blue-500 text-lg text-center">
                    {value}
                  </Text>
                </Pressable>
              </Link>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
