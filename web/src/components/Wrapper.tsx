import React from "react";
import { Box } from "@chakra-ui/core";
interface wrapperProps {
  variant?: "small" | "regular";
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
