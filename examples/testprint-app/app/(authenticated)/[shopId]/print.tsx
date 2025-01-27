import { MenuButton } from "@/components/MenuButton";
import { PrinterSettings } from "@/components/PrinterForm";
import { PrinterListItem } from "@/components/PrinterListItem";
import { IteratorType } from "@/lib/async/pipe";
import { sqlite } from "@/lib/async/sqlite/expo";
import { checkoutStream } from "@/lib/checkoutStream";
import { epsonPrinter } from "@/lib/epsonPrinter";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { useMMKV, useMMKVObject } from "react-native-mmkv";

export { ErrorBoundary } from "@/components/ErrorBoundary";

type CheckoutType = IteratorType<typeof checkoutStream>;

export default function Print() {
  const { shopId } = useLocalSearchParams<{ shopId: string }>();
  const [printers = []] = useMMKVObject<PrinterSettings[]>(
    `printers.${shopId}`,
  );
  const mmkv = useMMKV();

  // [ ] List of printers
  // [ ] Printer connection status
  // [ ] Printer status (paper, ink, etc)
  // [ ] Printer retry count
  // [ ] Printer queue metrics (size)
  // [ ] List items are MenuButtons linking to individual print queue list
  // [ ] Query printing templates from shop by printer hashtags
  // [ ] Translate printing templates to printer commands

  // useEffect > useFocusEffect to keep the stream alive when navigating
  // into printer queues.
  useEffect(() => {
    let stream: AsyncIterableIterator<CheckoutType> = checkoutStream(shopId, {
      mmkv,
    });

    stream = map(stream, (checkout) => {
      // [ ] Log incoming print jobs...
      console.log("New checkout:", checkout);

      return checkout;
    });

    for (const printer of printers) {
      stream = sqlite<CheckoutType>(`printers.${shopId}.${printer.target}`)(
        stream,
      );

      stream = epsonPrinter<CheckoutType>(printer, {})(stream);
    }

    return () => {
      stream.return?.();
    };
  }, [shopId, printers]);

  return (
    <>
      <Stack.Screen options={{ title: "Printing ..." }} />

      <SafeAreaView className="bg-gray-100">
        <ScrollView
          className="min-h-screen"
          contentInsetAdjustmentBehavior="automatic"
        >
          <View className="flex h-full gap-3 px-3 py-20">
            <View className="flex gap-2">
              {printers?.map((printer, i) => (
                <Link
                  key={i}
                  href={`./printer/view/${i}`}
                  relativeToDirectory
                  asChild
                >
                  <MenuButton>
                    <PrinterListItem printer={printer} />
                  </MenuButton>
                </Link>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

async function* map<T, U>(
  iterable: AsyncIterable<T>,
  transform: (message: T) => U | Promise<U>,
) {
  for await (const message of iterable) {
    yield await transform(message);
  }
}
