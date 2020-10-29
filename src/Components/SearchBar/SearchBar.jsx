import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Box,
  useToast,
} from "@chakra-ui/core";

const SearchBar = (props) => {
  const [value, setValue] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // if value doesnt match 2 A-Z and 3-4 number chars, return a toast.
  const handleSubmit = async (value) => {
    if (!value.match(/^[A-Z]{2}\d{3,4}$/gi)) {
      return toast({
        title: "Invalid flight designator",
        description: "Please enter a valid flight designator",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }

    setIsloading(true);
    //Free API doesn't support https.
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.aviationstack.com/v1/flights?access_key=3ffefb67dcd0e291d5562eb4234186a9&flight_iata=${value}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    await response
      .json()
      .then((res) => {
        if (res.data[0] !== undefined) {
          console.log(res);
          props.setResponse(res);
        } else {
          toast({
            title: "Flight not found.",
            description: "We can't seem to find that flight.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <Box mt={5} maxW="4xl" marginX="auto">
      <form onSubmit={(e) => e.preventDefault()}>
        <FormControl marginX={3}>
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
        <Button
          mt={3}
          marginLeft={3}
          isLoading={isLoading}
          onClick={() => handleSubmit(value)}
        >
          Search
        </Button>
      </form>
    </Box>
  );
};

export default SearchBar;
