import {
  type ErrorBoundaryProps,
  Link,
  useFocusEffect,
  useRouter,
} from "expo-router";
import { GQtyError } from "gqty";
import React, { type FunctionComponent, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { ErrorMessage } from "./ErrorMessage";

export const ErrorBoundary: FunctionComponent<ErrorBoundaryProps> = ({
  error,
  retry,
}) => {
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      const messages =
        error instanceof GQtyError
          ? [
              error.message,
              ...(error.graphQLErrors?.map((e) => e.message) ?? []),
            ]
          : [error.message];

      if (
        messages.some(
          (m) => m.includes("Unauthorized") || m.includes("not authorized"),
        )
      ) {
        router.push("/logout");
      }
    }, [error, router]),
  );

  return (
    <View className="flex flex-col gap-3 text-red-300">
      <Text className="text-xl">Opps!</Text>

      <ErrorMessage error={error} />

      <View className="flex flex-row gap-3">
        <Pressable
          className="group flex min-w-60 flex-col justify-between rounded-xl
            bg-white p-3 active:bg-gray-200 active:opacity-50"
          onPress={retry}
        >
          <Text className="text-lg group-disabled:opacity-50">Retry</Text>
        </Pressable>

        <Link href="/" asChild>
          <Pressable
            className="group flex min-w-60 flex-col justify-between rounded-xl
              bg-white p-3 active:bg-gray-200 active:opacity-50"
          >
            <Text className="text-lg group-disabled:opacity-50">Home</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};
