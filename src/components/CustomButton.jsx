import React from "react";
import { Button } from "@chakra-ui/react";

export default function CustomButton({ text = "Click me" }) {
  return (
    <Button
      fontFamily={"'Inter', sans-serif"}
      color={"white"}
      // bg={"brand.1"}
      // letterSpacing={"1px"}
      background={
        "linear-gradient(45deg, rgba(101,140,74,1) 0%, rgba(137,188,104,1) 100%)"
      }
      p={6}
      borderRadius={"2rem"}
      fontWeight={400}
      _hover={{ bgColor: "#668c4ad6" }}
      style={{ "-webkit-tap-highlight-color": "transparent" }}
    >
      {text}
    </Button>
  );
}
