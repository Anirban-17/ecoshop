import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function TopBanner() {
  return (
    <Box
      w={"full"}
      bgColor={"brand.1"}
      color={"white"}
      py={4}
      fontSize={["xs", "sm", "md"]}
      textAlign={"center"}
      fontFamily={"'Inter', sans-serif"}
    >
      <Text>
        Free Shipping with minimum purchase Rp250.000
      </Text>
    </Box>
  );
}
