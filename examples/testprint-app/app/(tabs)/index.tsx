import { useIsHermes } from "@/hooks/useIsHermes";
import { useNewArchitecture } from "@/hooks/useNewArchitecture";
import { useTestPrint } from "@/hooks/useTestPrint";
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
  DeviceInfo,
  discoverPrinters,
  FilterDeviceType,
} from "react-native-epson-escposprinter";

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
        <View className="flex h-full gap-3 px-3 py-10">
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

const PrinterCard: FunctionComponent<{ device: DeviceInfo }> = ({ device }) => {
  const [printing, setPrinting] = useState(false);
  const testPrint = useTestPrint();

  return (
    <Pressable
      className="w-60 rounded-xl bg-gray-200 active:bg-gray-300
        active:opacity-50"
      onPress={async () => {
        try {
          setPrinting(true);

          await testPrint(device);
        } catch (e) {
          console.error(e);
        } finally {
          setPrinting(false);
        }
      }}
    >
      <View className="flex flex-col justify-between p-4">
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
            className="absolute bottom-0 left-0 right-0 top-0"
          />
        )}
      </View>
    </Pressable>
  );
};

export default Home;
