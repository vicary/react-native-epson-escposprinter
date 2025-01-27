import { PrinterForm, PrinterSettings } from "@/components/PrinterForm";
import { useLocalSearchParams, useRouter } from "expo-router";
import type { FunctionComponent } from "react";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { useMMKVObject } from "react-native-mmkv";

export { ErrorBoundary } from "@/components/ErrorBoundary";

// [ ] Add header buttons (< Back, Save)
const PrinterPage: FunctionComponent = () => {
  const { printerId, shopId } = useLocalSearchParams<{
    shopId: string;
    printerId: string;
  }>();
  const [printers, setPrinters] = useMMKVObject<PrinterSettings[]>(
    `printers.${shopId}`,
  );
  const router = useRouter();
  const printer = printers?.[+printerId];

  if (!printer) {
    throw new Error(`Printer setting not found: ${printerId}`);
  }

  return (
    <>
      <SafeAreaView className="bg-gray-100">
        <ScrollView
          className="min-h-screen"
          contentInsetAdjustmentBehavior="automatic"
        >
          <View className="flex h-full gap-3 px-3 py-20">
            <PrinterForm
              printer={printer}
              onSave={(printer) => {
                setPrinters((printers = []) => {
                  printers[+printerId] = printer;
                  return printers;
                });
                router.dismissTo(`/${shopId}`);
              }}
              onDelete={() => {
                setPrinters((printers = []) => {
                  printers.splice(+printerId, 1);
                  return printers;
                });
                router.dismissTo(`/${shopId}`);
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PrinterPage;
