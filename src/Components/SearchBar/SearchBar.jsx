import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Box,
} from "@chakra-ui/core";

const SearchBar = (props) => {
  // const [invalid, setInvalid] = useState(true);
  const [value, setValue] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (value) => {
    setIsloading(true);
    console.log(value);

    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.aviationstack.com/v1/flights?access_key=3ffefb67dcd0e291d5562eb4234186a9&flight_iata=${value}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    await response
      .json()
      .then((data) => {
        console.log(data);
        props.setResponse(data);
        setIsloading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsloading(false);
      });
  };

  return (
    <Box maxW="4xl" marginX="auto">
      <form onSubmit={(e) => e.preventDefault()}>
        <FormControl>
          <FormLabel htmlFor="FindFlight">Find Flight</FormLabel>
          <Input
            id="FindFlight"
            placeholder="Flight designator/number.."
            aria-describedby="FindFlight-helper-text"
            value={value}
            onChange={handleChange}
            maxLength="6"
          />
          <FormHelperText id="FindFlight-helper-text">
            e.g. DL1234 for Delta Airlines flight 1234
          </FormHelperText>
        </FormControl>
        <Button isLoading={isLoading} onClick={() => handleSubmit(value)}>
          Search
        </Button>
      </form>
    </Box>
  );
};

export default SearchBar;
