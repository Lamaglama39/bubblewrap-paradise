import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

export const TopBar: React.FC = () => {
  return (
    <Box
      bgImage={"/img/top.png"}
      backgroundSize={"cover"}
      opacity={"0.9"}
      color="white"
      display={"flex"}
      justifyContent={"space-around"}
      position={"fixed"}
      w={"100vw"}
      top={"0"}
      padding={"0.5em"}
      zIndex={"1"}
      textAlign={"center"}
      alignContent={"center"}
      alignItems={"center"}
      borderY={"0.5vh solid gray"}
      h={"7vh"}
      textColor={"black"}
    >
      <Button
        fontSize={"2vh"}
        bg={"gray.400"}
        borderRadius={"5vh"}
        textColor={"black"}
        w={"20%"}
        h={"4vh"}
        border={"0.1vw solid black"}
        backgroundColor={"gray.400"}
      >
        Mode :
      </Button>
      <Text userSelect={"none"} fontSize={"2vh"} fontWeight={"bold"}>
        COUNTER :
      </Text>
      <Button
        fontSize={"2vh"}
        bg={"gray.400"}
        borderRadius={"5vh"}
        textColor={"black"}
        w={"20%"}
        h={"4vh"}
        border={"0.1vw solid black"}
      >
        素材提供
      </Button>
    </Box>
  );
};
