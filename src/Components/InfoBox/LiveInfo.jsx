import React from "react";
import { Heading, Box, Text } from "@chakra-ui/core";
import { FaPlane } from "react-icons/fa";

const statusBoxGenerator = (value) => {
  let statusBox = {
    heading: "--",
    bgColor: "gray.400",
    textColor: "white",
  };

  switch (value) {
    case "active":
      statusBox.heading = "Airborne";
      statusBox.bgColor = "green.400";
      statusBox.textColor = "white";
      break;
    case "scheduled":
      statusBox.heading = "Scheduled";
      statusBox.bgColor = "green.200";
      statusBox.textColor = "white";
      break;
    case "cancelled":
      statusBox.heading = "Cancelled";
      statusBox.bgColor = "red.400";
      statusBox.textColor = "black";
      break;
    case "landed":
      statusBox.heading = "Landed";
      statusBox.bgColor = "green.400";
      statusBox.textColor = "green";
      break;
    case "incident":
      statusBox.heading = "Incident";
      statusBox.bgColor = "yellow.400";
      statusBox.textColor = "black";
      break;
    case "diverted":
      statusBox.heading = "Diverted";
      statusBox.bgColor = "yellow.400";
      statusBox.textColor = "black";
      break;
  }

  return (
    <Box
      flexGrow="1"
      p="0.5rem"
      color={statusBox.textColor}
      bg={statusBox.bgColor}
    >
      {/* TODO: add logic to determine colors based on flight status.  add logic to determine Text based on flight status */}
      <Heading size="md">{statusBox.heading}</Heading>
    </Box>
  );
};

const LiveInfo = (props) => {
  return (
    <Box fontSize="sm" shadow="lg" display={{ md: "flex" }} textAlign="center">
      <Box p="0.5rem" bg="gray.300">
        <Heading size="md">{props.response.flight.iata || "--"}</Heading>
        <Text>
          {props.response.airline.name || "--"} (
          {props.response.airline.iata || "--"})
        </Text>
      </Box>
      <Box p="0.5rem" borderBottom={{ xs: "1px solid black", md: "none" }}>
        <Heading size="md">{props.response.departure.iata || "--"}</Heading>
        <Text>{props.response.departure.airport || "--"}</Text>
      </Box>
      <Box
        margin={{ xs: "auto", md: "auto 6rem" }}
        fontSize={{ sm: "xl", md: "2xl" }}
        as={FaPlane}
      />
      <Box p="0.5rem" borderTop={{ xs: "1px solid black", md: "none" }}>
        <Heading size="md">{props.response.arrival.iata || "--"}</Heading>
        <Text>{props.response.arrival.airport || "--"}</Text>
      </Box>
      {statusBoxGenerator(props.response.flight_status)}
    </Box>
  );
};

export default LiveInfo;
