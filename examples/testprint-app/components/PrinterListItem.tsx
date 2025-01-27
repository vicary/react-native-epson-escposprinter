import Ionicons from "@expo/vector-icons/Ionicons";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Text, View } from "react-native";
import {
  connect,
  getPrinterSeriesFromDeviceName,
  PrinterLocale,
  PrinterStatus,
} from "react-native-epson-escposprinter";
import { PrinterSettings } from "./PrinterForm";

export const PrinterListItem: FunctionComponent<{
  printer: PrinterSettings;
}> = ({ printer }) => {
  const [state, setState] = useState<PrinterStatus | Error>();

  useEffect(() => {
    doConnect();
    async function doConnect() {
      console.log(printer);
      try {
        const series = getPrinterSeriesFromDeviceName(printer.deviceName);
        if (!series) {
          throw new Error(`Printer series not found: ${printer.deviceName}`);
        }

        const connection = await connect(
          series,
          PrinterLocale.MODEL_ANK,
          printer.target,
        );

        try {
          const status = await connection.getStatus();

          setState(status);
        } finally {
          await connection.disconnect();
        }
      } catch (error) {
        console.error(`Printer connection error:`, error);

        if (error instanceof Error) {
          setState(error);
        } else {
          throw error;
        }
      }
    }
  }, [printer]);

  return (
    <>
      <View className="flex flex-row items-center gap-2">
        {state === undefined ? (
          <Ionicons name="ellipse" color="gray" className="animate-ping" />
        ) : state instanceof Error ? (
          <Ionicons name="ellipse" color="red" />
        ) : state.connection ? (
          state.online ? (
            <Ionicons name="ellipse" color="green" />
          ) : (
            <Ionicons name="ellipse" color="gray" />
          )
        ) : (
          <Ionicons name="ellipse" color="red" />
        )}

        <Text className="text-lg group-disabled:opacity-50">
          {printer.displayName}
        </Text>
      </View>

      <Text className="text-xs text-gray-500 group-disabled:opacity-50">
        {printer.target}
      </Text>

      <Text className="text-xs text-gray-500 group-disabled:opacity-50">
        {printer.hashtags.join(", ")}
      </Text>

      {state instanceof Error ? (
        <Text className="text-xs text-red-500 group-disabled:opacity-50">
          {state.message}
        </Text>
      ) : (
        state && (
          <Text className="text-xs text-gray-500 group-disabled:opacity-50">
            {JSON.stringify(state)}
          </Text>
        )
      )}
    </>
  );
};
