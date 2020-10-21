import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import HeaderComponent from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import InfoBox from "../../Components/InfoBox/InfoBox";
// import ArrivalInfo from "../../Components/InfoBox/ArrivalInfo";
// import LiveInfo from "../../Components/InfoBox/LiveInfo";

import { response as defaultResponse } from "../../mockResponse";

const App = () => {
  const [response, setResponse] = useState(defaultResponse);
  return (
    <Box>
      <HeaderComponent />
      <SearchBar setResponse={setResponse} />
      <InfoBox response={response.data[0]} />
    </Box>
  );
};

export default App;
