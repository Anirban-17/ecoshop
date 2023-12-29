import React from "react";
import badge from "../assets/badge.png";

import "../styles/footer.scss";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Box className="footerContainer" pos={"relative"} py={10}>
      <Image
        src={badge}
        alt="badge"
        pos={"absolute"}
        left={"0"}
        right={"0"}
        // top={"2rem"}
        textAlign={"center"}
        m={"auto"}
      />
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={5}
        pt={"10rem"}
        fontFamily={"'Inter', sans-serif"}
        px={["1rem", "5rem"]}
        borderBottom={"1px solid #666"}
        pb={5}
      >
        <GridItem>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={"xl"} color={"brand.1"}>
              ECO Shop
            </Text>
            <Text>About Us</Text>
            <Text>Contact Us</Text>
            <Text>FAQs</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={"xl"} color={"brand.1"}>
              Product Categories
            </Text>
            <Text>New</Text>
            <Text>Electronics</Text>
            <Text>Jewelery</Text>
            <Text>Men's Clothing</Text>
            <Text>Women's Clothing</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={"xl"} color={"brand.1"}>
              Support
            </Text>
            <Text>Shipping</Text>
            <Text>Returns</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms of Use</Text>
            <Text>Affiliates</Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack alignItems={"flex-start"} wrap={"wrap"}>
            <Text fontWeight={600} fontSize={"xl"} color={"brand.1"}>
              Payment
            </Text>
            <VStack>
              <HStack>
                <Image src={p1} alt="p1" w={"4rem"} />
                <Image src={p2} alt="p2" w={"4rem"} />
                <Image src={p3} alt="p3" w={"4rem"} />
                <Image src={p4} alt="p4" w={"4rem"} />
              </HStack>
              <HStack>
                <Image src={p5} alt="p5" w={"4rem"} />
                <Image src={p6} alt="p6" w={"4rem"} />
                <Image src={p7} alt="p7" w={"4rem"} />
                <Image src={p8} alt="p8" w={"4rem"} />
              </HStack>
              <HStack>
                <Image src={p9} alt="p9" w={"4rem"} />
                <Image src={p10} alt="p10" w={"4rem"} />
                <Image src={p11} alt="p11" w={"4rem"} />
                <Image src={p12} alt="p12" w={"4rem"} />
              </HStack>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
      <Stack
        direction={["column", "row"]}
        p={6}
        justifyContent={["center", "space-between"]}
        alignItems={"center"}
        gap={5}
      >
        <VStack order={[2, 1]}>
          <Text>© 2023 ECO Shop India. All Rights Reserved.</Text>
          <Text>Made with 💓 by Sayandeep Adhikary.</Text>
        </VStack>
        <HStack order={[1, 2]} gap={5}>
          <FaFacebook size={"2rem"} color="black" />
          <FaInstagram size={"2rem"} color="black" />
          <FaLinkedin size={"2rem"} color="black" />
          <FaGithub size={"2rem"} color="black" />
        </HStack>
      </Stack>
    </Box>
  );
}
