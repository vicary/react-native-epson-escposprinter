import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f3f4f6" },
        headerShadowVisible: false,
        headerShown: true,
        headerTransparent: true,
        statusBarBackgroundColor: "#f3f4f6",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="print"
        options={{ title: "Printing...", presentation: "modal" }}
      />
      <Stack.Screen name="printer" options={{ headerShown: false }} />
    </Stack>
  );
}
