import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function TopBanner() {
  return (
    <Box
      w={"full"}
      background={
        "linear-gradient(45deg, rgba(101,140,74,1) 0%, rgba(137,188,104,1) 100%)"
      }
      color={"white"}
      py={4}
      fontSize={["xs", "sm", "md"]}
      textAlign={"center"}
      fontFamily={"'Inter', sans-serif"}
    >
      <Text>Free Shipping with minimum purchase Rp250.000</Text>
    </Box>
  );
}
