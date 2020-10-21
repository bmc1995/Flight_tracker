import React from "react";
import { Flex, Heading } from "@chakra-ui/core";

const HeaderComponent = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg="teal.500"
      padding="1.5rem"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Flight Tracker
        </Heading>
      </Flex>
    </Flex>
  );
};

export default HeaderComponent;
