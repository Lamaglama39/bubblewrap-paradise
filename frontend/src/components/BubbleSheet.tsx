import React from "react";
import { Box } from "@chakra-ui/react";
import { BubbleBox } from "./BubbleBox";

export const BubbleSheet: React.FC = () => {
  return (
    <Box
      bgImage={"/img/background.png"}
      backgroundSize={"cover"}
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(10, 10, 10, 0.1)"
        pointerEvents="none"
      />
      <BubbleBox></BubbleBox>
    </Box>
  );
};
