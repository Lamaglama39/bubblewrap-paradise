import { popSound } from "./sound.js";
import { imgPath, puchiImg } from "./path.js";

// プチプチ状態判定
function handleClick(e, eventType) {
  let circle = e.target;
  if (circle.classList.contains("alive")) {
    popSound();
    change(circle);
    addCount();
  }
  if (eventType === "mousemove") {
    circle.removeEventListener("mousemove", handleClick, true);
  }
}

// プチプチ時のクリックイベント
async function PushPuchi() {
  let circles = Array.from(document.querySelectorAll(".alive"));
  circles.forEach((circle) => {
    let mode = document.getElementById("modeButton");
    const handleClickWrapper = (e) => handleClick(e, mode.classList.contains("normal") ? "click" : "mousemove");

    if (mode.classList.contains("normal")) {
      circle.addEventListener("click", handleClickWrapper, true);
    } else {
      circle.addEventListener("mousemove", handleClickWrapper, true);
    }
    circle.handleClickWrapper = handleClickWrapper; // 保持するために新しいプロパティに関数を保存
  });
}

// プチプチ画像置き換え
async function change(circle) {
  // circle.src = "src/img/puchi-back.png";
  circle.src = "src/img/background.png";
  circle.classList.remove("alive");
}

// スコアカウント
let count = 0;
async function addCount() {
  let countElement = document.getElementById("Counter");
  count++;
  countElement.textContent = count.toString();
}

// 単発-連射モード切り替え
async function clickStyle() {
  let modeButton = document.getElementById("modeButton");
  let mode = document.getElementById("mode");

  modeButton.addEventListener("click", () => {
    if (modeButton.classList.contains("normal")) {
      modeButton.classList.remove("normal");
      modeButton.classList.add("auto");
      mode.innerHTML = "auto";

      let circles = Array.from(document.querySelectorAll(".alive"));
      circles.forEach((circle) => {
        circle.removeEventListener(
          "click",
          (e) => handleClick(e, "click"),
          true
        );
      });
      PushPuchi();
    } else {
      modeButton.classList.remove("auto");
      modeButton.classList.add("normal");
      mode.innerHTML = "normal";

      let circles = Array.from(document.querySelectorAll(".alive"));
      circles.forEach((circle) => {
        if (modeButton.classList.contains("normal")) {
          circle.removeEventListener("mousemove", circle.handleClickWrapper, true); // 以前に保存した関数を使用
        } else {
          circle.removeEventListener("click", circle.handleClickWrapper, true); // 以前に保存した関数を使用
        }
      });
      PushPuchi();
    }
  });
}

export { PushPuchi, clickStyle };
