import { MenuButton } from "@/components/MenuButton";
import { FilterOperator, SortOrder, useQuery } from "@/gqty";
import { useRouter } from "expo-router";
import Link from "expo-router/link";
import React, {
  type FunctionComponent,
  Suspense,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useMMKVString } from "react-native-mmkv";

export { ErrorBoundary } from "@/components/ErrorBoundary";

const Home: FunctionComponent = () => {
  const [search, setSearch] = useState<string>();
  const deferredSearch = useDeferredValue(search);
  const [shopId] = useMMKVString("shopId");
  const router = useRouter();

  useEffect(() => {
    if (!shopId?.trim()) return;

    // setTimeout is required for expo-router is still mounting
    setTimeout(() => {
      router.push(`/${shopId}`);
    });
  }, []);

  return (
    <SafeAreaView className="bg-gray-100">
      <ScrollView
        className="min-h-screen"
        contentInsetAdjustmentBehavior="automatic"
      >
        <View className="flex h-full gap-3 px-3 py-20">
          <TextInput
            placeholder="Type to search"
            className="block w-full rounded-md border border-gray-300 bg-white
              px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400
              focus:border-indigo-600"
            onChangeText={(text) => setSearch(text)}
          />

          <Suspense
            fallback={
              <View className="item-center flex flex-row gap-2">
                <Text className="text-sm text-gray-500">Loading shops</Text>
                <ActivityIndicator size={14} color="#6b7280" />
              </View>
            }
          >
            <ShopList search={deferredSearch} />
          </Suspense>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ShopList: FunctionComponent<{ search?: string }> = ({ search }) => {
  const [token] = useMMKVString("id_token");
  const query = useQuery({ extensions: { token } });

  if (query.me === null) {
    throw new Error("Unauthorized");
  }

  return query.me?.$on.User?.shops(
    !search
      ? { sortBy: [{ field: "name.keyword", order: SortOrder.ASC }] }
      : {
          filter: {
            name: {
              operator: FilterOperator.LIKE,
              value: [`%${search}%`],
            },
          },
          sortBy: [{ field: "name.keyword", order: SortOrder.ASC }],
        },
  ).nodes.map((shop) => (
    <Link href={`/${shop.id}`} key={shop.id ?? 0} asChild>
      <MenuButton
        className="flex min-w-60 flex-row items-center justify-between
          rounded-xl bg-white p-3 active:bg-gray-200 disabled:text-gray-300"
      >
        <Text className="text-lg">{shop.name}</Text>
        <Text className="text-xs text-gray-500">{shop.hostname}</Text>
      </MenuButton>
    </Link>
  ));
};

export default Home;
