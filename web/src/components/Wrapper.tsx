import React from "react";
import { Box } from "@chakra-ui/core";
import { type } from "os";

export type WrapperVariant = "small" | "regular";
interface wrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<wrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      maxW={variant === "regular" ? "800px" : "400px"}
      mx="auto"
      w="100%"
      mt={8}
    >
      {children}
    </Box>
  );
};
