import React, { InputHTMLAttributes } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/core";
import { useField } from "formik";

type inputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  textarea?: boolean;
};

export const InputField: React.FC<inputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
  let InputOrTextArea = Input;
  if (textarea) {
    InputOrTextArea = Textarea;
  }
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputOrTextArea
        {...field}
        {...props}
        id={field.name}
        placeholder={props.placeholder}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
