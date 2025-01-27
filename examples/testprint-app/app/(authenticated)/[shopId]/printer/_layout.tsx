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
      <Stack.Screen name="searchAdd" options={{ title: "Choose a printer" }} />
      <Stack.Screen
        name="confirmAdd"
        options={{ title: "Add Printer", presentation: "modal" }}
      />
      <Stack.Screen
        name="edit/[printerId]"
        options={{ title: "Edit Printer", presentation: "modal" }}
      />
    </Stack>
  );
}
