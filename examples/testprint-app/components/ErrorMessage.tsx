import { GQtyError } from "gqty";
import React, { type FunctionComponent } from "react";
import type { FieldError } from "react-hook-form";
import { Text } from "react-native";

const isFieldErrror = (error: unknown): error is FieldError =>
  error !== null && typeof error === "object" && "type" in error;

const getFieldErrorMessage = (error: FieldError) => {
  let message = error.message?.toString().trim() || undefined;
  if (message) return message;

  switch (error.type) {
    case "required":
      return "This field is required.";
    case "minLength":
      return `Text must be at least ${error.types?.minLength} characters long.`;
    case "maxLength":
      return `Text must be at most ${error.types?.maxLength} characters long.`;
    case "min":
      return `Value must be at least ${error.types?.min}`;
    case "max":
      return `Value must be at most ${error.types?.max}`;
    case "pattern":
      return "Entered text has invalid format.";
    case "validate":
      return "Invalid value.";
    default:
      return "An unknown error occurred.";
  }
};

export const ErrorMessage: FunctionComponent<{ error: unknown }> = ({
  error,
}) => {
  if (error instanceof GQtyError) {
    return (
      <>
        <Text className="text-red-500 empty:hidden">{error.message}</Text>

        {error.graphQLErrors?.map((error, index) => (
          <Text key={index} className="text-red-500 empty:hidden">
            {index}. {error.message} at {error.path?.join(".")}
          </Text>
        ))}

        {error.otherError != null && (
          <Text className="text-red-500 empty:hidden">
            {`${error.otherError}`}
          </Text>
        )}
      </>
    );
  } else if (isFieldErrror(error)) {
    return <Text className="text-red-500">{getFieldErrorMessage(error)}</Text>;
  } else if (error instanceof Error && error.message) {
    return <Text className="text-red-500">{error.message}</Text>;
  } else if (error != null) {
    return <Text className="text-red-500">An error occurred.</Text>;
  } else {
    return null;
  }
};
