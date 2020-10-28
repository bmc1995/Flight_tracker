import React from "react";
import { Box, Flex, Divider } from "@chakra-ui/core";
import StatusBar from "./StatusBar";
import MainInfo from "./MainInfo";
import MoreInfo from "./MoreInfo";
import MapComponent from "../Map";

const InfoBox = (props) => {
  return (
    <Box margin="auto" maxWidth="4xl" border="1px solid black">
      <Box>
        <StatusBar response={props.response} />
      </Box>

      <Flex
        my={10}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
      >
        <MainInfo response={props.response.departure || "--"} />
        {/* orientation prop isn't responsive in Chakra-ui */}
        <Divider orientation="vertical" />
        <Divider
          mb={{ xs: "2rem", md: "none" }}
          display={{ md: "none" }}
          orientation="horizontal"
        />
        <MainInfo response={props.response.arrival || "--"} arrival={true} />
      </Flex>
      <MapComponent response={props.response} />
      <MoreInfo response={props.response} />
    </Box>
  );
};

export default InfoBox;
