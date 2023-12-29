import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import vector from "../assets/vector.png";
import { FaShippingFast, FaSmile, FaLeaf } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import t6 from "../assets/t6.png";
import t7 from "../assets/t7.png";
import t8 from "../assets/t8.png";

import "../styles/testimonials.scss";

const cardData = [
  {
    id: 1,
    image: <FaShippingFast size={"3rem"} color="gray" />,
    title: "Free Shipping",
    desc: "Shop now and enjoy free shipping on all orders",
  },
  {
    id: 2,
    image: <FaSmile size={"3rem"} color="gray" />,
    title: "Satisfaction Guaranteed",
    desc: "Our satisfaction guarantee ensures quality products",
  },
  {
    id: 3,
    image: <FaLeaf size={"3rem"} color="gray" />,
    title: "Eco Friendly Packaging",
    desc: "Using eco-friendly materials, sustainable and biodegradable.",
  },
  {
    id: 4,
    image: <RiCustomerService2Fill size={"3rem"} color="gray" />,
    title: "Fast Response",
    desc: "24/7 fast and reliable assistance whenever you need it",
  },
];
const testimonials = [
  {
    id: 1,
    image: t1,
  },
  {
    id: 2,
    image: t2,
  },
  {
    id: 3,
    image: t3,
  },
  {
    id: 4,
    image: t4,
  },
  {
    id: 5,
    image: t5,
  },
  {
    id: 6,
    image: t6,
  },
  {
    id: 7,
    image: t7,
  },
  {
    id: 8,
    image: t8,
  },
];

export default function Testimonials() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      <Box
        w={"full"}
        className="containertwo"
        px={[5, 20]}
        pt={20}
        pb={10}
        textAlign={"center"}
        fontSize={["2xl", "3xl"]}
      >
        <Text
          color={"white"}
          fontFamily={"'Libre Baskerville', serif"}
          lineHeight={"160%"}
        >
          Shop guilt-free knowing that our eco-friendly e-commerce platform is
          committed to reducing environmental impact and promoting sustainable
          practices in every step of the shopping process
        </Text>
        <Image src={vector} alt="vector" mx={"auto"} mt={4} />
      </Box>
      <Container
        maxW={"container.xl"}
        textAlign={"center"}
        p={[10, 20]}
        alignItems={"center"}
      >
        <Heading
          fontFamily={"'Libre Baskerville', serif"}
          fontSize={["4xl", "5xl"]}
          color={"brand.1"}
        >
          Why Bought From Us?
        </Heading>
        <Grid
          templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={5}
          mt={[10, 20]}
        >
          {cardData.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              desc={card.desc}
              loaded={loaded}
            />
          ))}
        </Grid>
      </Container>
      <Stack
        direction={["column", "row"]}
        className="testimonials"
        alignItems={"center"}
        px={10}
        py={[10, 0]}
        justifyContent={"center"}
      >
        <Heading
          fontFamily={"'Libre Baskerville', serif"}
          fontSize={["4xl", "5xl"]}
          color={"brand.1"}
          borderRight={[0, "2px solid #333"]}
        >
          We Are Exist
        </Heading>
        <Grid
          templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={5}
          p={[10, 20]}
          mx={"auto"}
        >
          {testimonials.map((item) => (
            <Image key={item.id} src={item.image} alt="testimonials" />
          ))}
        </Grid>
      </Stack>
      <Box className="newsletter" p={[2, 20]} pt={['12rem', 20]}>
        <VStack
          p={10}
          px={[7, 10]}
          alignItems={"flex-start"}
          bg={"white"}
          w={"fit-content"}
          borderRadius={"2rem"}
        >
          <Text
            fontFamily={"'Inter', sans-serif"}
            color={"#333"}
            fontWeight={600}
          >
            Subscribe to our Newsletter
          </Text>
          <Text fontFamily={"'Inter', sans-serif"} color={"#666"}>
            Be the first to know about exclusive offers, eco-tips, and new
            arrivals!
          </Text>
          <InputGroup size="sm" pos={"relative"} borderRadius={"2rem"}>
            <Input
              type="email"
              placeholder="Your email"
              borderRadius={"2rem"}
              p={5}
              className="newsletterInput"
              _focusVisible={{ outline: "none" }}
            />
            <InputRightAddon
              border={"1px solid #658C4A"}
              borderRadius={"2rem"}
              pos={"absolute"}
              right={0}
              bg={"brand.1"}
              color={"white"}
              p={5}
              cursor={"pointer"}
            >
              Subscribe
            </InputRightAddon>
          </InputGroup>
        </VStack>
      </Box>
    </>
  );
}

const Card = ({ image, title, desc, loaded }) => {
  return (
    <GridItem rowSpan={1} colSpan={1}>
      <VStack
        alignItems={"flex-start"}
        textAlign={"left"}
        justifyContent={"center"}
      >
        <SkeletonCircle isLoaded={loaded} borderRadius={"1rem"}>
          {image}
        </SkeletonCircle>
        <SkeletonText
          isLoaded={loaded}
          mt="4"
          noOfLines={4}
          spacing="4"
          skeletonHeight="2"
        >
          <Text
            as={"a"}
            fontFamily={"'Inter', sans-serif"}
            fontSize={["md", "lg"]}
            color={"#333"}
            fontWeight={600}
          >
            {title}
          </Text>
          <Text
            fontFamily={"'Inter', sans-serif"}
            fontSize={["md", "lg"]}
            color={"brand.1"}
            fontWeight={600}
          >
            {desc}
          </Text>
        </SkeletonText>
      </VStack>
    </GridItem>
  );
};
