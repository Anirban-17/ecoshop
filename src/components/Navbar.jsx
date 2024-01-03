import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import {
  Box,
  Collapse,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { RiUserLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import CustomButton from "./CustomButton";
import { useFirebase } from "../context/Firebase";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const isSignedIn = useFirebase().isSignedIn;
  const signOut = useFirebase().signOutUser;
  return (
    <>
      <Box borderBottom={"1.5px solid #658C4A"}>
        <HStack justifyContent={"space-between"} py={4} px={[5, 10]}>
          <Link to={"/"}>
            <Image src={logo} w={"5rem"} cursor={"pointer"} />
          </Link>
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
            {isSignedIn ? (
              <>
                <Menu>
                  <MenuButton>
                    <RiUserLine
                      size={"1.5rem"}
                      color="gray"
                      cursor={"pointer"}
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={signOut} color={"red"} bgColor={""}>
                      <MdLogout /> &nbsp;Log Out
                    </MenuItem>
                  </MenuList>
                </Menu>
                <BsHandbag size={"1.5rem"} color="gray" cursor={"pointer"} />
              </>
            ) : (
              <Link to={"/login"}>
                <CustomButton text="Login" />
              </Link>
            )}
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
          <NavHashLink smooth={true} to="/#new">
            <Text cursor={"pointer"}>NEW!</Text>
          </NavHashLink>
          <Link to={"/products/category/electronics"}>
            <Text cursor={"pointer"}>Electronics</Text>
          </Link>
          <Link to={"/products/category/jewelery"}>
            <Text cursor={"pointer"}>Jewelery</Text>
          </Link>
          <Link to={"/products/category/men's clothing"}>
            <Text cursor={"pointer"}>Men's Clothing</Text>
          </Link>
          <Link to={"/products/category/women's clothing"}>
            <Text cursor={"pointer"}>Women's Clothing</Text>
          </Link>
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
          {isOpen ? (
            <RiCloseLine size={"2rem"} onClick={onToggle} />
          ) : (
            <RiMenuLine size={"2rem"} onClick={onToggle} />
          )}
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
          <NavHashLink smooth={true} to="/#new">
            <Text cursor={"pointer"}>NEW!</Text>
          </NavHashLink>
          <Link to={"/products/category/electronics"}>
            <Text cursor={"pointer"}>Electronics</Text>
          </Link>
          <Link to={"/products/category/jewelery"}>
            <Text cursor={"pointer"}>Jewelery</Text>
          </Link>
          <Link to={"/products/category/men's clothing"}>
            <Text cursor={"pointer"}>Men's Clothing</Text>
          </Link>
          <Link to={"/products/category/women's clothing"}>
            <Text cursor={"pointer"}>Women's Clothing</Text>
          </Link>
        </VStack>
      </Collapse>
    </>
  );
}
