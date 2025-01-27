import { MenuButton } from "@/components/MenuButton";
import { PrinterSettings } from "@/components/PrinterForm";
import { PrinterListItem } from "@/components/PrinterListItem";
import { useQuery } from "@/gqty";
import {
  Link,
  Stack,
  useFocusEffect,
  useLocalSearchParams,
  useRouter,
} from "expo-router";
import type { FunctionComponent } from "react";
import React, { useCallback } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useMMKVObject, useMMKVString } from "react-native-mmkv";

export { ErrorBoundary } from "@/components/ErrorBoundary";

/**
 * Start searching for printers to print the orders from this shop.
 */
const Shop: FunctionComponent = () => {
  const { shopId } = useLocalSearchParams<{ shopId: string }>();
  const [, setShopId] = useMMKVString("shopId");
  const [token] = useMMKVString("id_token");
  const [printers] = useMMKVObject<PrinterSettings[]>(`printers.${shopId}`);
  const router = useRouter();
  const query = useQuery({ extensions: { token } });

  useFocusEffect(useCallback(() => setShopId(shopId), [setShopId, shopId]));

  // Check current user
  query.me?.$on.User?.id;
  if (query.me === null) {
    throw new Error("Unauthorized");
  }

  // Check current shop
  if (query.node({ id: shopId }) === null) {
    router.dismissAll();
    return null;
  }

  // [ ] Check all printer status here before enabling start button
  //     [ ] Order poller
  //     [ ] Printer middlewares must add print info to the message
  //     [ ] For messages unprinted, list them out as warning in the UI

  return (
    <>
      <Stack.Screen
        options={{
          title: query.node({ id: shopId })?.$on.CompanyShop?.name ?? "Shop",
        }}
      />

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
                  href={`./printer/edit/${i}`}
                  relativeToDirectory
                  asChild
                >
                  <MenuButton>
                    <PrinterListItem printer={printer} />
                  </MenuButton>
                </Link>
              ))}

              <Link href="./printer/searchAdd" relativeToDirectory asChild>
                <MenuButton>
                  <Text className="text-lg group-disabled:opacity-50">
                    Add Printer
                  </Text>
                </MenuButton>
              </Link>
            </View>

            {printers?.length && (
              <Link href="./print" relativeToDirectory asChild>
                <MenuButton>
                  <Text className="text-lg group-disabled:opacity-50">
                    Start Printing
                  </Text>
                </MenuButton>
              </Link>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Shop;
