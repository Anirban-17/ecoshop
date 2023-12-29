import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    try {
      const getProducts = async () => {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
        setIsLoaded(true);
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <FaArrowRight color="gray" />,
    prevArrow: <FaArrowLeft color="gray" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <Container maxW={"container.xl"} py={[10, 20]} px={[5, 10]} id="new">
      <Heading
        fontFamily={"'Libre Baskerville', serif"}
        fontSize={["3xl", "4xl"]}
        color={"#333"}
      >
        New Arrival
      </Heading>
      <Text fontFamily={"'Inter', sans-serif"} color={"gray.600"} my={3}>
        Be the first to have the first-class product
      </Text>
      <Box>
        <Slider {...settings}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              isLoaded={isLoaded}
            />
          ))}
        </Slider>
      </Box>
      <HStack justifyContent={"center"}>
        <CustomButton text="See More" />
      </HStack>
    </Container>
  );
}

const ProductCard = ({ id, title, price, image, isLoaded }) => {
  return (
    <Link to={`/products/${id}`}>
      <Skeleton isLoaded={isLoaded}>
        <Box maxW={"container.sm"} p={10}>
          <Image src={image} alt={title} aspectRatio={"1/1"} />
          <Text
            mt={5}
            fontFamily={"'Inter', sans-serif"}
            fontSize={["md", "lg"]}
            color={"#333"}
            fontWeight={600}
          >
            {title}
          </Text>
          <Text
            mt={2}
            fontFamily={"'Inter', sans-serif"}
            fontSize={["md", "lg"]}
            color={"brand.1"}
            fontWeight={600}
          >
            ${price}
          </Text>
        </Box>
      </Skeleton>
    </Link>
  );
};
