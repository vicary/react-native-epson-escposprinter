import { ErrorMessage } from "@/components/ErrorMessage";
import { TextInput } from "@/components/TextInput";
import { useMutation } from "@/gqty";
import { useRouter } from "expo-router";
import type { FunctionComponent } from "react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useMMKVListener, useMMKVString } from "react-native-mmkv";

const Login: FunctionComponent = () => {
  const [login, { error: loginError }] = useMutation(
    (mutation, { uid, pwd }: { uid: string; pwd: string }) =>
      mutation.sessionStart({ email: uid, password: pwd }).id_token ??
      undefined,
  );
  const {
    control,
    formState: { errors: formErrors, isLoading, isValidating, isSubmitting },
    handleSubmit,
    setFocus,
  } = useForm<{ uid: string; pwd: string }>();
  const [, setToken] = useMMKVString("id_token");
  const router = useRouter();

  useMMKVListener((key) => {
    if (key === "id_token") {
      router.replace("/");
    }
  });

  return (
    <SafeAreaView className="bg-gray-100">
      <ScrollView
        className="min-h-screen"
        contentInsetAdjustmentBehavior="automatic"
      >
        <View className="flex h-full gap-3 px-3 py-10">
          <Text className="text-2xl">Login</Text>

          <Text className="font-medium text-gray-900">Email</Text>
          <Controller
            control={control}
            name="uid"
            rules={{ required: true }}
            render={({ field }) => (
              <TextInput
                autoCapitalize="none"
                autoComplete="email"
                autoFocus
                disableFullscreenUI
                textContentType="emailAddress"
                submitBehavior="submit"
                onSubmitEditing={() => setFocus("pwd")}
                onChangeText={field.onChange}
                {...field}
              />
            )}
          />
          <ErrorMessage error={formErrors.uid} />

          <Text className="font-medium text-gray-900">Password</Text>
          <Controller
            control={control}
            name="pwd"
            rules={{ required: true }}
            render={({ field }) => (
              <TextInput
                autoCapitalize="none"
                autoComplete="current-password"
                disableFullscreenUI
                secureTextEntry
                onChangeText={field.onChange}
                {...field}
              />
            )}
          />
          <ErrorMessage error={formErrors.pwd} />

          <ErrorMessage error={loginError} />

          <Button
            title="Submit"
            disabled={isLoading || isValidating || isSubmitting}
            onPress={handleSubmit(async ({ uid, pwd }) => {
              const token = await login({ args: { uid, pwd } });

              setToken(token);
            })}
          />

          <TokenForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const TokenForm = () => {
  const router = useRouter();
  const [token, setToken] = useMMKVString("id_token");
  const [value, setValue] = useState(token);

  return (
    <>
      <Text className="font-medium text-gray-900">ID Token</Text>
      <TextInput
        autoCapitalize="none"
        value={value}
        numberOfLines={1}
        onSubmitEditing={() => {
          setToken(value);
        }}
        onChangeText={(text) => {
          setValue(text);
        }}
      />
    </>
  );
};

export default Login;
