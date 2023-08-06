import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { TopBar } from "./components/TopBar";
import { BubbleSheet } from "./components/BubbleSheet";

export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [clickMode, setclickMode] = useState(true);

  const toggleMode = () => {
    setclickMode(!clickMode);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <ChakraProvider>
      <Box w={"100vw"} h={"100vh"}>
        <TopBar count={count} clickMode={clickMode} toggleMode={toggleMode} />
        <BubbleSheet clickMode={clickMode} onIncrement={incrementCount} />
      </Box>
    </ChakraProvider>
  );
};
