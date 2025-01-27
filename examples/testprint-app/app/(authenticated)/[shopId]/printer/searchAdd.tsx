import { MenuButton } from "@/components/MenuButton";
import { PrinterSettings } from "@/components/PrinterForm";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import React, { useCallback, useState, type FunctionComponent } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import {
  discoverPrinters,
  type DeviceInfo,
} from "react-native-epson-escposprinter";
import { useMMKVObject } from "react-native-mmkv";

export { ErrorBoundary } from "@/components/ErrorBoundary";

// [ ] Add header buttons (Cancel, )
const AddPrinter: FunctionComponent = () => {
  const { shopId } = useLocalSearchParams<{ shopId: string }>();
  const [, setPrinter] = useMMKVObject<PrinterSettings>(
    `printers.${shopId}.new`,
  );

  return (
    <SafeAreaView className="bg-gray-100">
      <ScrollView
        className="min-h-screen"
        contentInsetAdjustmentBehavior="automatic"
      >
        <View className="flex h-full gap-3 px-3 py-20">
          {/* <Text className="text-2xl font-bold">Add Printer</Text> */}

          <View className="flex flex-row items-center gap-2">
            <Text className="text-xs text-gray-500">Looking for printers</Text>

            <ActivityIndicator size={10} color="#6b7280" />
          </View>

          <PrinterList
            onSelect={(device) => {
              setPrinter({
                ...device,
                displayName: device.deviceName,
                hashtags: [],
              });

              router.push(`./confirmAdd`);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const PrinterList: FunctionComponent<{
  onSelect: (device: DeviceInfo) => unknown;
}> = ({ onSelect }) => {
  const [devices, setDevices] = useState<DeviceInfo[]>([]);

  useFocusEffect(
    useCallback(() => {
      const discovery = discoverPrinters();

      (async () => {
        for await (const printer of await discovery) {
          setDevices((prev) => {
            if (prev.some((p) => p.target === printer.target)) {
              return prev;
            } else {
              return [...prev, printer];
            }
          });
        }
      })();

      return () => {
        discovery.then((d) => d.return()).then(() => setDevices([]));
      };
    }, []),
  );

  return (
    <>
      {devices.map((device) => (
        <MenuButton key={device.target} onPress={() => onSelect(device)}>
          <Text className="text-lg">{device.deviceName}</Text>
          <Text>{device.target}</Text>
        </MenuButton>
      ))}
    </>
  );
};

export default AddPrinter;
