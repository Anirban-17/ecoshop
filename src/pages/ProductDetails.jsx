import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  Badge,
  Container,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Star from "../components/Star";
import CustomButton from "../components/CustomButton";
import SimilarProducts from "../components/SimilarProducts";
import Loader from "../components/Loader";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      window.scrollTo(0, 0);
      const getProduct = async () => {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(data);
        setLoading(false);
      };
      getProduct();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <>
      <Navbar />

      {/* Product Details */}
      {loading ? (
        <Loader />
      ) : (
        <Container maxW={"container.xl"}>
          <Grid
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
            templateRows={["1fr 2fr", "repeat(1, 1fr)"]}
            px={[0, 10]}
            py={[10, 20]}
            gap={[10, 0]}
          >
            <Image
              src={product.image}
              alt={product.title}
              w={["70%", "50%"]}
              m={"auto"}
            />
            <VStack
              alignItems={["center", "flex-start"]}
              justifyContent={"space-evenly"}
              gap={10}
            >
              <Text
                textAlign={["center", "left"]}
                fontFamily={"'Libre Baskerville', serif"}
                fontSize={["xl", "3xl"]}
                textTransform={"capitalize"}
              >
                {product.title}
              </Text>
              <Link to={`/products/category/${product.category}`}>
                <Badge ml="1" fontSize="0.8em" colorScheme="green">
                  {product.category}
                </Badge>
              </Link>
              <Stack direction={["column", "row"]} gap={3}alignItems={'center'}>
                <Star rate={product.rating.rate} />
                <Text
                  fontFamily={"'Inter', sans-serif"}
                  color={"gray.500"}
                >
                  {product.rating.count} Customer Reviews
                </Text>
              </Stack>
              <Text
                px={[10, 0]}
                textAlign={["justify", "left"]}
                fontFamily={"'Inter', sans-serif"}
                textTransform={"capitalize"}
              >
                {product.description}
              </Text>
              <HStack gap={5}>
                <Text
                  fontFamily={"'Inter', sans-serif"}
                  fontSize={"3xl"}
                  fontWeight={600}
                >
                  ${product.price}
                </Text>
                <Text
                  fontFamily={"'Inter', sans-serif"}
                  fontSize={"xl"}
                  fontWeight={600}
                  color={"gray.500"}
                  textDecoration={"line-through"}
                >
                  ${(product.price + 10).toPrecision(4)}
                </Text>
              </HStack>
              <Stack direction={["column", "row"]} gap={5}>
                <CustomButton text="Buy Now" />
                <CustomButton
                  text="Add to Cart"
                  isOutlined={true}
                  both={true}
                />
              </Stack>
            </VStack>
          </Grid>
        </Container>
      )}
      {product && <SimilarProducts category={product.category} />}
    </>
  );
}
