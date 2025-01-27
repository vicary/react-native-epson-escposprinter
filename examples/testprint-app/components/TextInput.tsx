import { forwardRef } from "react";
import { TextInput as RNTextInput, TextInputProps } from "react-native";

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ className = "", ...props }, ref) => (
    <RNTextInput
      ref={ref}
      {...props}
      className={`className="block focus:border-indigo-600" w-full rounded-md
        border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900
        placeholder:text-gray-400 ${className}`}
    />
  ),
);
