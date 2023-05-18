import { rustleSound } from "./sound.js";
import { PushPuchi } from "./action.js";
import { imgPath, puchiImg } from "./path.js";

// ぷちぷち作成
async function CreatePuchi(id, device) {
  const isTouchDevice = device === "touch";
  const repetitions = isTouchDevice ? 6 : 24;
  const lightClass = isTouchDevice ? "light-m" : "light-d";
  const leftClass = isTouchDevice ? "left-m" : "left-d";
  const imgClass = isTouchDevice ? "mobile" : "desktop";

  for (let i = 0; i <= 20; i++) {
    let parentElement = document.getElementById(id);

    const newElementLight = document.createElement("div");
    newElementLight.classList = lightClass;
    for (let i = 0; i <= repetitions; i++) {
      const newImg = document.createElement("img");
      newImg.src = imgPath + puchiImg[Math.floor(Math.random() * puchiImg.length)];
      newImg.classList.add("alive");
      newImg.classList.add(imgClass);
      newElementLight.appendChild(newImg);
    }
    parentElement.appendChild(newElementLight);

    const newElementLeft = document.createElement("div");
    newElementLeft.classList = leftClass;
    for (let i = 0; i <= repetitions; i++) {
      const newImg = document.createElement("img");
      newImg.src = imgPath + puchiImg[Math.floor(Math.random() * puchiImg.length)];
      newImg.classList.add("alive");
      newImg.classList.add(imgClass);
      newElementLeft.appendChild(newImg);
    }
    parentElement.appendChild(newElementLeft);
  }
}


// スクロール時のページ作成
function scrollPages(device) {
  gsap.registerPlugin(ScrollTrigger);

  const container = document.querySelector(".container"); //コンテナ要素を取得して代入

  let panelNum = document.querySelectorAll(".section").length; //最初のセクション数を取得
  const createSection = (index) => {
    const section = document.createElement("section"); // sectionタグを持つ要素を作成
    // const h1 = document.createElement("h1");// h1タグを作成
    container.appendChild(section); // コンテナ要素の中に追加
    // section.appendChild(h1);// セクション要素の中に追加
    section.setAttribute("id", `Puchi${index + 1}`);
    // h1.innerHTML = `セクション${index+1}`;// テキスト挿入
    CreatePuchi(`Puchi${index + 1}`, device);
    rustleSound();
    PushPuchi(device);
  };

  ScrollTrigger.create({
    trigger: container, // トリガー位置指定
    start: "top top", // 処理スタート位置設定
    end: "bottom bottom", // 処理終了位置設定
    onUpdate: (self) => {
      // スクロールする度に呼び出し
      let progress = self.progress.toFixed(2); // 小数第二位まで有効に
      if (progress >= 0.9 && self.direction === 1) {
        createSection(panelNum++);
        ScrollTrigger.refresh(); // 位置の再計算
      }
    },
  });
}

export { CreatePuchi, scrollPages };
