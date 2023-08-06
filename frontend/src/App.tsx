import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { TopBar } from "./components/TopBar";
import { BubbleSheet } from "./components/BubbleSheet";

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <ChakraProvider>
      <Box w={"100vw"} h={"100vh"}>
        <TopBar count={count} />
        <BubbleSheet onIncrement={incrementCount} />
      </Box>
    </ChakraProvider>
  );
};
