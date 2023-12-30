import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaSortAmountDown } from "react-icons/fa";
import Loader from "../components/Loader";
import Star from "../components/Star";

export default function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("asc");
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const getProducts = async () => {
      window.scrollTo(0, 0);
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}?sort=${sort}`
      );
      setProducts(data);
      setLoading(false);
    };
    getProducts();
  }, [category, sort]);

  return (
    <>
      <Navbar />
      <Container maxW={"container.xl"} px={[6, 8]} py={8}>
        <HStack justifyContent={"space-between"}>
          <Text
            fontFamily={"'Libre Baskerville', serif"}
            fontSize={["2xl", "5xl"]}
            color={"#333"}
            textTransform={"capitalize"}
          >
            {category}
          </Text>
          <IconButton
            display={["flex", "none"]}
            variant="outline"
            border={"1px solid #658C4A"}
            _active={{ backgroundColor: "none" }}
            aria-label="Sort By"
            icon={<FaSortAmountDown color="#658C4A" />}
            onClick={onOpen}
          />
          <Select
            display={["none", "flex"]}
            maxW={"xs"}
            focusBorderColor="brand.1"
            defaultValue={"asc"}
            onChange={(e) => setSort(e.currentTarget.value)}
          >
            <option value="desc">Price High to Low</option>
            <option value="asc">Price Low to High</option>
          </Select>
        </HStack>
      </Container>

      {/* Products */}
      <SimpleGrid
        minChildWidth={"xs"}
        spacing={20}
        py={[10]}
        px={[6, 8]}
        justifyContent={"center"}
      >
        {loading ? (
          <Loader />
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </SimpleGrid>

      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderRadius={"1.5rem 1.5rem 0 0"} p={4}>
          <DrawerHeader borderBottomWidth="1px">Sort By</DrawerHeader>
          <DrawerBody>
            <RadioGroup name="sort-by" onClick={onClose} onChange={setSort}>
              <Radio
                value="asc"
                my={2}
                _focusVisible={{ outline: "none" }}
                colorScheme={"green"}
                checked={sort === "asc"}
              >
                Price Low to High
              </Radio>
              <Radio
                value="desc"
                my={2}
                _focusVisible={{ outline: "none" }}
                colorScheme={"green"}
                checked={sort === "desc"}
              >
                Price High to Low
              </Radio>
            </RadioGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <VStack alignItems={"flex-start"} textAlign={"left"} gap={5}>
        <Image
          src={product.image}
          alt={product.name}
          aspectRatio={"1/1"}
          borderRadius={"1rem"}
          boxShadow={"0 0 15px gray"}
        />
        <Text
          as={"a"}
          fontFamily={"'Inter', sans-serif"}
          fontSize={["md", "lg"]}
          color={"#333"}
          fontWeight={600}
        >
          {product.title}
        </Text>
        <HStack>
          <Star rate={product.rating.rate} />
          <Text
            fontFamily={"'Inter', sans-serif"}
            fontSize={["sm", "md"]}
            color={"gray.500"}
          >
            {product.rating.count} Customer Reviews
          </Text>
        </HStack>
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
          ${(product.price + 10).toPrecision(4)}
        </Text>
      </VStack>
    </Link>
  );
};
