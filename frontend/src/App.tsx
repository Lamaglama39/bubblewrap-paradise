import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { TopBar } from "./components/TopBar";
import { BubbleSheet } from "./components/BubbleSheet";

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Box w={"100vw"} h={"100vh"}>
        <TopBar />
        <BubbleSheet />
      </Box>
    </ChakraProvider>
  );
};
