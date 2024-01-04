import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Avatar,
  Badge,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { useFirebase } from "../context/Firebase";

export default function Profile() {
  const { uid } = useParams();
  const user = useFirebase().user;
  // console.log(user)
  return (
    <>
      <Navbar />
      <Container maxW={"container.xl"} p={10}>
        <Stack
          direction={["column", "row"]}
          gap={10}
          alignItems={["center", "flex-start"]}
        >
          <Avatar
            src={user?.photoURL}
            size={"2xl"}
            name={user?.displayName}
            alt="Profile"
          />
          <VStack
            justify={"space-evenly"}
            alignItems={["center", "flex-start"]}
            my={"auto"}
            gap={5}
          >
            <Heading
              fontFamily={"'Libre Baskerville', serif"}
              textTransform={"capitalize"}
              fontSize={["xl", "4xl"]}
            >
              {user?.displayName || "Guest User"}
            </Heading>
            <Text fontFamily={"'Inter', sans-serif"} textAlign={"center"}>
              {user?.email}{" "}
              <Badge colorScheme={user?.emailVerified ? "green" : "red"}>
                {user?.emailVerified ? "Verified" : "Not verified"}
              </Badge>{" "}
            </Text>
            <Button
              bgColor={"#658C4A"}
              color={"white"}
              _hover={{ bgColor: "rgba(101, 140, 74, 0.9)" }}
            >
              <FaEdit /> &nbsp; Edit Profile
            </Button>
          </VStack>
        </Stack>
      </Container>
    </>
  );
}
