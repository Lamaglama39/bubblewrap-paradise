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
  if (eventType === "touchmove") {
    console.log(eventType)
    circle.removeEventListener("touchmove", handleClick, true);
  } else {
    console.log(eventType)
    circle.removeEventListener("mousemove", handleClick, true);
  }
}

// プチプチ時のクリックイベント
async function PushPuchi(device) {
  let circles = Array.from(document.querySelectorAll(".alive"));
  circles.forEach((circle) => {
    let mode = document.getElementById("modeButton");
    // タッチデバイスの場合
    if (device === "touch") {
      const handleClickWrapper = (e) => handleClick(e, mode.classList.contains("normal") ? "touchstart" : "touchmove");
      if (mode.classList.contains("normal")) {
        circle.addEventListener("touchstart", handleClickWrapper, true);
      } else {
        circle.addEventListener("touchmove", handleClickWrapper, true);
      }
      circle.handleClickWrapper = handleClickWrapper; // 保持するために新しいプロパティに関数を保存
    } else {
      // タッチデバイスではない場合
      const handleClickWrapper = (e) => handleClick(e, mode.classList.contains("normal") ? "click" : "mousemove");
      if (mode.classList.contains("normal")) {
        circle.addEventListener("click", handleClickWrapper, true);
      } else {
        circle.addEventListener("mousemove", handleClickWrapper, true);
      }
      circle.handleClickWrapper = handleClickWrapper; // 保持するために新しいプロパティに関数を保存
    }
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
async function clickStyle(device) {
  let modeButton = document.getElementById("modeButton");
  let mode = document.getElementById("mode");

  modeButton.addEventListener("click", () => {
    // タッチデバイスの場合
    if(device === "touch"){
      if (modeButton.classList.contains("normal")) {
        modeButton.classList.remove("normal");
        modeButton.classList.add("auto");
        mode.innerHTML = "auto";
  
        let circles = Array.from(document.querySelectorAll(".alive"));
        circles.forEach((circle) => {
          circle.removeEventListener(
            "touchstart",
            (e) => handleClick(e, "touchstart"),
            true
          );
        });
        PushPuchi(device);
      } else {
        modeButton.classList.remove("auto");
        modeButton.classList.add("normal");
        mode.innerHTML = "normal";
  
        let circles = Array.from(document.querySelectorAll(".alive"));
        circles.forEach((circle) => {
          if (modeButton.classList.contains("normal")) {
            circle.removeEventListener("touchmove", circle.handleClickWrapper, true); // 以前に保存した関数を使用
          } else {
            circle.removeEventListener("touchstart", circle.handleClickWrapper, true); // 以前に保存した関数を使用
          }
        });
        PushPuchi(device);
      }
    } else {
      // タッチデバイスではない場合
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
        PushPuchi(device);
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
        PushPuchi(device);
      }
    }
  });
}

export { PushPuchi, clickStyle };
