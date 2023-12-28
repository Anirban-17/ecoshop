import React, { useEffect, useState } from "react";
import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomButton from "../components/CustomButton";
import MostWanted from "../components/MostWanted";
import NewArrivals from "../components/NewArrivals";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 5000);
  }, []);

  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero />
      <MostWanted/>
      <NewArrivals/>
      <Testimonials/>
      <Modal
        closeOnOverlayClick={false}
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        isCentered
        size={["xs", "xl"]}
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
        <ModalContent>
          <ModalCloseButton _focusVisible={{ outline: "none" }} />
          <ModalBody
            boxShadow={"0 0 20px gray"}
            borderRadius={"1rem"}
            background={
              "linear-gradient(45deg, rgba(231,206,192,1) 0%, rgba(255,255,255,1) 100%)"
            }
          >
            <VStack p={[10, 20]} gap={5} textAlign={"center"}>
              <Heading fontFamily={"'Libre Baskerville', serif"}>
                Get 15% Off
              </Heading>
              <Text fontFamily={"'Inter', sans-serif"}>
                on your initial purchase of our chosen products
              </Text>
              <CustomButton text="Shop Now" />
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
