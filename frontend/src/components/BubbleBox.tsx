import React from "react";
import { Box } from "@chakra-ui/react";
import { BubbleImage } from "./BubbleImage";

interface BubbleBoxProps {
  onIncrement: () => void;
}

export const BubbleBox: React.FC<BubbleBoxProps> = ({ onIncrement }) => {
  const row: number = 3;
  const column: number = 15;

  const fillROW: number[] = Array.from(Array(row).keys());
  const fillColumn: number[] = Array.from(Array(column).keys());

  return (
    <Box display={"flex"}>
      {fillColumn.map((ColumnNum) => (
        <Box key={ColumnNum}>
          {fillROW.map((_, index) => (
            <BubbleImage
              onIncrement={onIncrement}
              key={`${ColumnNum}-${index}`}
              index={index}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};
