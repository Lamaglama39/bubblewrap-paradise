import React from "react";
import { Box, Image } from "@chakra-ui/react";

export const BubbleBox: React.FC = () => {
  const row: number = 50;
  const column: number = 15;

  const fillROW: number[] = Array(row).fill(row);
  const fillColumn: number[] = Array(column).fill(column);

  const bubbleList: string[] = [
    "/img/puchi1.png",
    "/img/puchi2.png",
    "/img/puchi3.png",
    "/img/puchi4.png",
    "/img/puchi5.png",
    "/img/puchi6.png",
    "/img/puchi7.png",
  ];

  return (
    <Box display={"flex"}>
      {fillColumn.map((ColumnNum) => (
        <Box key={ColumnNum}>
          {fillROW.map((RowNum, index) => (
            <Image
              key={RowNum}
              w={"6vw"}
              h={"6vw"}
              bgImage={
                bubbleList[Math.floor(Math.random() * bubbleList.length)]
              }
              bgSize={"auto 100%"}
              borderRadius={"50%"}
              marginLeft={index % 2 === 0 ? "0vw" : "3vw"}
              marginRight={index % 2 === 0 ? "3vw" : "0vw"}
              cursor={"pointer"}
              userSelect={"none"}
              border={"0.1vw darkgray solid"}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};
