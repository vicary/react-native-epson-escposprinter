import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f3f4f6" },
        headerShadowVisible: false,
        headerTransparent: true,
        statusBarBackgroundColor: "#f3f4f6",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Select a Shop" }} />
      <Stack.Screen name="[shopId]" options={{ headerShown: false }} />
    </Stack>
  );
}
