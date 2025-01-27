import {
  PrinterForm,
  PrinterFormRef,
  PrinterSettings,
} from "@/components/PrinterForm";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { FunctionComponent, useRef } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { useMMKVObject } from "react-native-mmkv";

// [ ] Add header buttons (< Back, Add)
const ConfirmPrinterAdd: FunctionComponent = () => {
  const { shopId } = useLocalSearchParams<{ shopId: string }>();
  const [, setPrinters] = useMMKVObject<PrinterSettings[]>(
    `printers.${shopId}`,
  );
  const [printer, setPrinter] = useMMKVObject<PrinterSettings>(
    `printers.${shopId}.new`,
  );
  const router = useRouter();
  const ref = useRef<PrinterFormRef>(null);

  if (!printer) {
    router.replace(`./searchAdd`);
    return null;
  }

  return (
    <SafeAreaView className="bg-gray-100">
      <ScrollView
        className="min-h-screen"
        contentInsetAdjustmentBehavior="automatic"
      >
        <View className="flex h-full gap-3 px-3 py-20">
          <PrinterForm
            ref={ref}
            printer={printer}
            onSave={(printer) => {
              setPrinters((printers = []) => printers.concat(printer));
              setPrinter(undefined);
              router.dismissTo(`/${shopId}`);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmPrinterAdd;
