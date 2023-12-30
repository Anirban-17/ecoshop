import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { HStack } from "@chakra-ui/react";

export default function Star({ rate }) {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rate >= index + 1 ? (
          <FaStar color="#658C4A" />
        ) : rate >= number ? (
          <FaStarHalfAlt color="#658C4A" />
        ) : (
          <AiOutlineStar color="#658C4A" />
        )}
      </span>
    );
  });
  return <HStack>{ratingStar}</HStack>;
}
