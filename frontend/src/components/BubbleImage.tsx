import React, { useState } from "react";
import useSound from "use-sound";
import { Image } from "@chakra-ui/react";
import { bubbleList, bubbleBreak } from "../utils/ImagePath";
import { bubbleSound } from "../utils/SoundPath";

interface BubbleImageProps {
  index: number;
  clickMode: boolean;
  onIncrement: () => void;
}

export const BubbleImage = React.memo<BubbleImageProps>(
  ({ index, clickMode, onIncrement }) => {
    const currentSound: string =
      bubbleSound[Math.floor(Math.random() * bubbleSound.length)];

    const [isVisible, setIsVisible] = useState(true);
    const [currentImageUrl, setCurrentImageUrl] = useState(
      bubbleList[Math.floor(Math.random() * bubbleList.length)]
    );
    const [play] = useSound(currentSound);

    const handleInteraction = () => {
      if (!isVisible) return;
      play();
      onIncrement();
      setCurrentImageUrl(bubbleBreak);
      setIsVisible(false);
    };

    const eventProps = clickMode
      ? { onClick: handleInteraction }
      : { onMouseOver: handleInteraction };

    return (
      <Image
        w={"6vw"}
        h={"6vw"}
        bgImage={currentImageUrl}
        bgSize={"auto 100%"}
        borderRadius={"50%"}
        marginLeft={index % 2 === 0 ? "0vw" : "3vw"}
        marginRight={index % 2 === 0 ? "3vw" : "0vw"}
        cursor={"pointer"}
        userSelect={"none"}
        border={"0.1vw darkgray solid"}
        {...eventProps}
      />
    );
  }
);
