import React, { useState } from "react";
import useSound from "use-sound";
import { Image } from "@chakra-ui/react";
import { bubbleList, bubbleBreak } from "../utils/ImagePath";
import { bubbleSound } from "../utils/SoundPath";

interface BubbleImageProps {
  index: number;
}

export const BubbleImage = React.memo<BubbleImageProps>(({ index }) => {
  const currentSound: string =
    bubbleSound[Math.floor(Math.random() * bubbleSound.length)];

  const [isVisible, setIsVisible] = useState(true);
  const [currentImageUrl, setCurrentImageUrl] = useState(
    bubbleList[Math.floor(Math.random() * bubbleList.length)]
  );
  const [play] = useSound(currentSound);

  const handleClick = () => {
    if (!isVisible) return;
    play();

    setCurrentImageUrl(bubbleBreak);
    setIsVisible(false);
  };

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
      onClick={handleClick}
      onMouseOver={handleClick}
    />
  );
});
