import { forwardRef, useImperativeHandle } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { DeviceInfo } from "react-native-epson-escposprinter";
import { ErrorMessage } from "./ErrorMessage";

export type PrinterSettings = DeviceInfo & {
  displayName: string;
  hashtags: string[];
};

type PrinterSettingsInput = Omit<PrinterSettings, "hashtags"> & {
  hashtags: string;
};

const transformPrinterSettings = (
  printer: PrinterSettingsInput,
): PrinterSettings => ({
  ...printer,
  hashtags: printer.hashtags.split(/\s*,\s*/),
});

export type PrinterFormProps = {
  printer: PrinterSettings;
  onSave: (printer: PrinterSettings) => void | Promise<void>;
  onDelete?: () => void | Promise<void>;
};

export type PrinterFormRef = {
  save: () => Promise<PrinterSettings | undefined>;
};

export const PrinterForm = forwardRef<PrinterFormRef, PrinterFormProps>(
  ({ printer, onSave, onDelete }, ref) => {
    const {
      control,
      formState: { errors, isLoading, isValidating, isSubmitting },
      handleSubmit,
    } = useForm<PrinterSettingsInput>({
      values: {
        ...printer,
        hashtags: printer.hashtags.join(", "),
      },
    });

    useImperativeHandle(ref, () => ({
      save: () =>
        new Promise((resolve) =>
          handleSubmit(
            (printer) => resolve(transformPrinterSettings(printer)),
            () => resolve(undefined),
          )(),
        ),
    }));

    return (
      <View className="flex gap-5">
        <View className="border-t border-gray-100 bg-white">
          <View
            className="flex flex-row items-center gap-3 border-b border-gray-100
              p-2"
          >
            <Text className="w-28 text-lg">Device Name</Text>

            <Controller
              control={control}
              name="displayName"
              disabled={isLoading || isSubmitting || isValidating}
              rules={{ required: true }}
              render={({ field }) => (
                <TextInput
                  className="grow text-lg"
                  onChangeText={field.onChange}
                  {...field}
                />
              )}
            />
          </View>

          <View
            className="flex flex-row items-center gap-3 border-b border-gray-100
              p-2"
          >
            <Text className="w-28 text-lg">Hashtags</Text>

            <Controller
              control={control}
              name="hashtags"
              disabled={isLoading || isSubmitting || isValidating}
              rules={{ required: true }}
              render={({ field: { value, ...field } }) => (
                <TextInput
                  className="grow text-lg"
                  onChangeText={field.onChange}
                  {...field}
                />
              )}
            />
          </View>

          <View
            className="flex flex-row items-center gap-3 border-b border-gray-100
              p-2"
          >
            <Text className="w-28 text-base">Target</Text>
            <Text className="text-base text-gray-500">{printer.target}</Text>
          </View>
        </View>

        <ErrorMessage error={errors.displayName} />

        <ErrorMessage error={errors.hashtags} />

        <View className="flex w-full flex-row gap-3">
          {onDelete && (
            <Pressable
              className="group flex min-w-60 grow flex-col justify-between
                rounded-xl bg-white p-3 active:bg-red-200 active:opacity-50"
              onPress={onDelete}
            >
              <Text
                className="text-center text-lg text-red-500
                  group-active:text-red-700 group-disabled:opacity-50"
              >
                Delete
              </Text>
            </Pressable>
          )}

          {onSave && (
            <Pressable
              className="group flex min-w-60 grow flex-col justify-between
                rounded-xl bg-white p-3 active:bg-green-200 active:opacity-50"
              onPress={handleSubmit((printer) =>
                onSave(transformPrinterSettings(printer)),
              )}
            >
              <Text
                className="text-center text-lg group-active:text-green-700
                  group-disabled:opacity-50"
              >
                Save
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  },
);
