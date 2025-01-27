import Ionicons from "@expo/vector-icons/Ionicons";
import React, { forwardRef } from "react";
import { Pressable, View, type PressableProps } from "react-native";

export const DEFAULT_CLASSES =
  "group flex min-w-60 flex-row items-center justify-between rounded-xl bg-white p-3 active:bg-gray-200 disabled:text-gray-300";

export type MenuButtonProps = PressableProps & {
  overrideClassName?: boolean;
};

export const MenuButton = forwardRef<View, MenuButtonProps>(
  ({ children, className = "", overrideClassName = false, ...props }, ref) => (
    <Pressable
      {...props}
      ref={ref}
      className={`${overrideClassName ? "" : DEFAULT_CLASSES} ${className}`}
    >
      {typeof children === "function" ? (
        (state) => (
          <>
            <View>{children(state)}</View>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
          </>
        )
      ) : (
        <>
          <View>{children}</View>
          <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
        </>
      )}
    </Pressable>
  ),
);

MenuButton.displayName = "MenuButton";
