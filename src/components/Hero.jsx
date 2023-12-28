import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import heroimg from "../assets/heroImage.png";
import electronics from "../assets/electronics.jpg";
import jewelery from "../assets/jewelery.jpg";
import menClothing from "../assets/menClothing.jpg";
import womenClothing from "../assets/womenClothing.jpg";

import "../styles/hero.scss";

const categories = [
  {
    id: 1,
    name: "Electronics",
    image: electronics,
  },
  {
    id: 2,
    name: "Jewelery",
    image: jewelery,
  },
  {
    id: 3,
    name: "Men's Clothing",
    image: menClothing,
  },
  {
    id: 4,
    name: "Women's Clothing",
    image: womenClothing,
  },
];

export default function Hero() {
  return (
    <>
      <HStack className="container">
        <VStack
          alignItems={["center", "flex-start"]}
          px={["3rem", 20]}
          py={["5rem", 0]}
          zIndex={1000}
        >
          <Heading
            fontFamily={"'Libre Baskerville', serif"}
            lineHeight={"150%"}
            textAlign={["center", "left"]}
            fontSize={["4xl", "5xl"]}
            color={"#333"}
          >
            Healthy cutlery, <br /> healthy body
          </Heading>
          <Text
            fontFamily={"'Inter', sans-serif"}
            color={"gray.600"}
            pr={["0", "5rem"]}
            my={3}
            textAlign={["center", "left"]}
          >
            Upgrade your dining experience and begin your path to a healthy you
            right now.
          </Text>
          <CustomButton text="Learn More" />
        </VStack>
        <Image src={heroimg} w={"50%"} className="heroImage" />
      </HStack>
      <Stack
        direction={["column", "row"]}
        p={10}
        gap={10}
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"container.xl"}
        mx={"auto"}
      >
        <Heading fontFamily={"'Libre Baskerville', serif"} color={"brand.1"}>
          Category for you
        </Heading>
        {categories.map((item) => (
          <CategoryCard key={item.id} name={item.name} image={item.image} />
        ))}
      </Stack>
    </>
  );
}

const CategoryCard = ({ name, image }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <Skeleton w={"100%"} h={"100%"} borderRadius={"0.5rem"} isLoaded={loaded}>
      <Box pos={"relative"} w={"100%"} h={"100%"} cursor={"pointer"}>
        <Image src={image} borderRadius={"0.5rem"} />
        <Button
          variant={"unstyled"}
          disabled="true"
          borderRadius={"1rem"}
          px={4}
          pos={"absolute"}
          bottom={2}
          left={2}
          bgColor={"blackAlpha.700"}
          color={"white"}
        >
          {name}
        </Button>
      </Box>
    </Skeleton>
  );
};

// https://www.figma.com/file/gkZuonrgdOIjAKUfcSbi9k/ECO-Shop---Eco-Friendly-Store-Responsive-Website-(Community)?type=design&node-id=877-1178&mode=design&t=wVeCoHnpez7Vt30b-0
