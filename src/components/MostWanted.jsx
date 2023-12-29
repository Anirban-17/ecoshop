import {
  Grid,
  GridItem,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    mrp: "259.000",
  },
  {
    id: 2,
    name: "Mens Casual Premium Slim Fit T-Shirts",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 22.3,
    mrp: "75.80",
  },
  {
    id: 3,
    name: "Mens Cotton Jacket",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 55.99,
    mrp: "189.88",
  },
  {
    id: 4,
    name: "Mens Casual Slim Fit",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    price: 15.99,
    mrp: "46.40",
  },
];

export default function MostWanted() {
  return (
    <VStack bg={"#FFEFE5"} py={20} px={[5, 10]} textAlign={"center"}>
      <Heading
        fontFamily={"'Libre Baskerville', serif"}
        fontSize={["4xl", "5xl"]}
        color={"#333"}
      >
        Our Most Wanted Products
      </Heading>
      <Text
        fontFamily={"'Inter', sans-serif"}
        fontSize={["md", "lg"]}
        color={"#666"}
      >
        Good for environment, good for you
      </Text>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={5}
        mt={5}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </VStack>
  );
}

const ProductCard = ({ product }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  return (
    <Link to={`/products/${product.id}`}>
      <GridItem rowSpan={1} colSpan={1} cursor={"pointer"}>
        <VStack alignItems={"flex-start"} textAlign={"left"} gap={5}>
          <Skeleton isLoaded={loaded} borderRadius={"1rem"}>
            <Image
              src={product.image}
              alt={product.name}
              aspectRatio={"1/1"}
              borderRadius={"1rem"}
              boxShadow={"0 0 15px gray"}
            />
          </Skeleton>
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
              {product.name}
            </Text>
            <Text
              fontFamily={"'Inter', sans-serif"}
              fontSize={["md", "lg"]}
              color={"brand.1"}
              fontWeight={600}
            >
              ${product.price}
            </Text>
            <Text
              fontFamily={"'Inter', sans-serif"}
              fontSize={["sm", "md"]}
              color={"#666"}
              fontWeight={600}
              textDecoration={"line-through"}
            >
              ${product.mrp}
            </Text>
          </SkeletonText>
        </VStack>
      </GridItem>
    </Link>
  );
};
