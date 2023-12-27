import React from "react";
import logo from "../assets/Logo.png";
import {
  Box,
  Collapse,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { RiUserLine, RiMenuLine } from "react-icons/ri";
import { BsHandbag } from "react-icons/bs";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box borderBottom={"1.5px solid #658C4A"}>
        <HStack justifyContent={"space-between"} py={4} px={[5, 10]}>
          <Image src={logo} w={"5rem"} cursor={"pointer"} />
          <InputGroup maxW={"container.sm"} display={["none", "inline-flex"]}>
            <InputLeftElement pointerEvents="none">
              <IoSearch color="gray" size={"1.5rem"} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search here..."
              borderRadius={"5rem"}
              borderColor={"gray.400"}
              focusBorderColor="gray.400"
            />
          </InputGroup>
          <HStack gap={5}>
            <RiUserLine size={"1.5rem"} color="gray" cursor={"pointer"} />
            <BsHandbag size={"1.5rem"} color="gray" cursor={"pointer"} />
          </HStack>
        </HStack>

        <HStack
          display={["none", "flex"]}
          fontFamily={"'Inter', sans-serif"}
          justifyContent={"center"}
          gap={20}
          py={5}
          fontWeight={600}
        >
          <Text cursor={"pointer"}>NEW!</Text>
          <Text cursor={"pointer"}>Electronics</Text>
          <Text cursor={"pointer"}>Jewelery</Text>
          <Text cursor={"pointer"}>Men's Clothing</Text>
          <Text cursor={"pointer"}>Women's Clothing</Text>
        </HStack>

        <HStack display={["flex", "none"]} p={5} gap={5}>
          <InputGroup maxW={"container.xs"}>
            <InputLeftElement pointerEvents="none">
              <IoSearch color="gray" size={"1.5rem"} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search here..."
              borderRadius={"5rem"}
              borderColor={"gray.400"}
              focusBorderColor="gray.400"
            />
          </InputGroup>
          <RiMenuLine size={"2rem"} onClick={onToggle} />
        </HStack>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <VStack
          fontFamily={"'Inter', sans-serif"}
          fontWeight={600}
          alignItems={"flex-start"}
          p={5}
          gap={5}
        >
          <Text cursor={"pointer"}>NEW!</Text>
          <Text cursor={"pointer"}>Electronics</Text>
          <Text cursor={"pointer"}>Jewelery</Text>
          <Text cursor={"pointer"}>Men's Clothing</Text>
          <Text cursor={"pointer"}>Women's Clothing</Text>
        </VStack>
      </Collapse>
    </>
  );
}
