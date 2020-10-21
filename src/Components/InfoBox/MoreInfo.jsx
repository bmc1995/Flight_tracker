import React from "react";
import {
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Box,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/core";

const MoreInfo = (props) => {
  if (props.response.live) {
    return (
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              More Info
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel
            bg="gray.100"
            display="flex"
            flexWrap="wrap"
            justifyContent="space-around"
            pb={4}
          >
            <Box mt="12px">
              <Tag variant="solid" size="sm">
                <TagLabel>Aircraft Location</TagLabel>
              </Tag>
              <Box>
                <Text fontSize="sm">
                  <strong>Latitude:</strong>{" "}
                  {props.response.live.latitude || "--"}
                </Text>
                <Text fontSize="sm">
                  <strong>Longitude:</strong>{" "}
                  {props.response.live.longitude || "--"}
                </Text>
                <Text fontSize="sm">
                  <strong>Altitude:</strong>{" "}
                  {props.response.live.altitude || "--"}
                </Text>
                <Text fontSize="sm">
                  <strong>Direction:</strong>{" "}
                  {props.response.live.direction || "--"}
                </Text>
              </Box>
            </Box>
            <Box mt="12px">
              <Tag variant="solid" size="sm">
                <TagLabel>Aircraft Speed</TagLabel>
              </Tag>
              <Box>
                <Text fontSize="sm">
                  <strong>Horizontal:</strong>{" "}
                  {props.response.live.speed_horizontal || "--"}
                </Text>
                <Text fontSize="sm">
                  <strong>Vertical:</strong>{" "}
                  {props.response.live.speed_vertical || "--"}
                </Text>
              </Box>
            </Box>
            <Box mt="12px">
              <Tag variant="solid" size="sm">
                <TagLabel>Aircraft Type</TagLabel>
              </Tag>
              <Box>
                <Text fontSize="sm">
                  <strong>Registration:</strong>
                  {props.response.aircraft.registration || "--"}
                </Text>
                <Text fontSize="sm">
                  <strong>IATA:</strong> {props.response.aircraft.iata || "--"}
                </Text>
                <Text fontSize="sm">
                  <strong>ICAO:</strong> {props.response.aircraft.icao || "--"}
                </Text>
                <Text fontSize="sm">
                  <strong>ICAO24:</strong>{" "}
                  {props.response.aircraft.icao24 || "--"}
                </Text>
              </Box>
            </Box>
            <Box mt="12px">
              <Tag variant="solid" size="sm">
                <TagLabel>Airline</TagLabel>
              </Tag>
              <Box>
                <Text fontSize="sm">
                  <strong>{props.response.airline.name || "--"}</strong>
                </Text>
                <Text fontSize="sm">
                  <strong>IATA:</strong> {props.response.airline.iata || "--"}
                </Text>
                <Text fontSize="sm">
                  <strong>ICAO:</strong> {props.response.airline.icao || "--"}
                </Text>
              </Box>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  }
  return null;
};

export default MoreInfo;
