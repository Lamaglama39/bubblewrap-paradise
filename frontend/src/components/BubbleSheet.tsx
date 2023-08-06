import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroller";
import { BubbleBox } from "./BubbleBox";
import useSound from "use-sound";
import { rustleSound } from "../utils/SoundPath";

interface BubbleSheetProps {
  onIncrement: () => void;
}

export const BubbleSheet: React.FC<BubbleSheetProps> = ({ onIncrement }) => {
  //表示するデータ
  const [list, setList] = useState<JSX.Element[]>([]);

  const rustlesSound: string =
    rustleSound[Math.floor(Math.random() * rustleSound.length)];
  const [play] = useSound(rustlesSound);

  //項目を読み込むときのコールバック
  const loadMore = () => {
    setList([...list, <BubbleBox onIncrement={onIncrement} />]);
    if (list.length > 3) {
      list.shift();
    }
    play();
  };

  //スクロール時の表示要素
  const items = (
    <ul>
      {list.map((value, index) => (
        <Box key={index}>{value}</Box>
      ))}
    </ul>
  );

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
      <InfiniteScroll
        loadMore={loadMore} //項目読み込み時のコールバック関数
        hasMore={true} //読み込み判定
        // threshold={0.8} // スクロールの閾値を80%に設定
      >
        {items} {/* コンポーネント */}
      </InfiniteScroll>
    </Box>
  );
};
