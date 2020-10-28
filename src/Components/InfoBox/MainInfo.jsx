import React from "react";
import { Box, Text, Heading, Tag, TagLabel, TagIcon } from "@chakra-ui/core";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

const TimingInfo = (props) => {
  return (
    <Box margin="auto">
      <Box mb={2} textAlign="center">
        <Tag>
          <TagIcon icon={props.arrival ? FaPlaneArrival : FaPlaneDeparture} />
          <TagLabel>{props.arrival ? "Arrival" : "Departure"}</TagLabel>
        </Tag>
      </Box>
      <Box my={2} textAlign="center">
        <Tag mr={5}>
          <TagLabel>
            <strong>Gate: </strong>
            {props.response.gate || "--"}
          </TagLabel>
        </Tag>
        <Tag mt="2px">
          <TagLabel>
            <strong>Terminal: </strong>
            {props.response.terminal || "--"}
          </TagLabel>
        </Tag>
      </Box>
      <Box display="inline-flex" margin="auto">
        <Box bg="gray.200" borderRight="1px">
          <Box p={3} borderBottom="1px solid black">
            <Heading size="xs">Scheduled</Heading>
            <Text fontSize="xs">{props.response.scheduled || "--"}</Text>
          </Box>
          <Box p={3}>
            <Heading size="xs">Actual</Heading>
            <Text fontSize="xs">{props.response.actual || "--"}</Text>
          </Box>
        </Box>
        <Box bg="gray.200">
          <Box p={3} borderBottom="1px solid black">
            <Heading size="xs">Estimated</Heading>
            <Text fontSize="xs">{props.response.estimated || "--"}</Text>
          </Box>
          <Box p={3}>
            <Heading size="xs">Runway</Heading>
            <Text fontSize="xs">{props.response.actual_runway || "--"}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TimingInfo;
