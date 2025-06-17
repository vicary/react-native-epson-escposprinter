import type { ConfigContext, ExpoConfig } from "@expo/config";
import { pascalCase } from "change-case";
import { config } from "dotenv";
import * as path from "node:path";
import { name, version } from "./package.json";

config({
  path: [
    path.resolve(__dirname, ".env.local"),
    path.resolve(__dirname, ".env"),
  ],
});

const newArchEnabled = ["1", "true", "yes", "on", "enabled"].includes(
  process.env.RCT_NEW_ARCH_ENABLED?.toLowerCase().trim()!,
);

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: pascalCase(name),
  slug: "testprint-app",
  version,
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "testprint",
  userInterfaceStyle: "automatic",
  newArchEnabled,
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.example.testprintapp",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    package: "com.example.testprintapp",
    permissions: ["android.permission.ACCESS_WIFI_STATE"],
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-font",
    "expo-router",
    "expo-web-browser",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    [
      "expo-sqlite",
      {
        useSQLCipher: false,
        ios: {
          customBuildFlags: "-DSQLITE_ENABLE_DBSTAT_VTAB=1",
        },
      },
    ],
    [
      "expo-dev-launcher",
      {
        launchMode: "most-recent",
      },
    ],
    "react-native-epson-escposprinter",
  ],
  experiments: {
    turboModules: newArchEnabled,
    typedRoutes: true,
  },
});
