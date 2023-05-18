import { popSound } from "./sound.js";

// プチプチ状態判定
function handleClick(e, eventType) {
  let circle = e.target;
  if (circle.classList.contains("alive")) {
    popSound();
    change(circle);
    addCount();
  }
  if (eventType === "touchmove") {
    circle.removeEventListener("touchmove", handleClick, true);
  } else {
    circle.removeEventListener("mousemove", handleClick, true);
  }
}

// プチプチ時のクリックイベント
async function PushPuchi(device) {
  const eventTypes =
    device === "touch" ? ["touchstart", "touchmove"] : ["click", "mousemove"];
  let circles = Array.from(document.querySelectorAll(".alive"));

  circles.forEach((circle) => {
    let mode = document.getElementById("modeButton");
    const handleClickWrapper = (e) =>
      handleClick(
        e,
        mode.classList.contains("normal") ? eventTypes[0] : eventTypes[1]
      );
    circle.addEventListener(
      mode.classList.contains("normal") ? eventTypes[0] : eventTypes[1],
      handleClickWrapper,
      true
    );
    circle.handleClickWrapper = handleClickWrapper; // 保持するために新しいプロパティに関数を保存
  });
}

// プチプチ画像置き換え
async function change(circle) {
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
  const eventTypes =
    device === "touch" ? ["touchstart", "touchmove"] : ["click", "mousemove"];
  let modeButton = document.getElementById("modeButton");
  let mode = document.getElementById("mode");

  modeButton.addEventListener("click", () => {
    let circles = Array.from(document.querySelectorAll(".alive"));

    if (modeButton.classList.contains("normal")) {
      modeButton.classList.remove("normal");
      modeButton.classList.add("auto");
      mode.innerHTML = "auto";

      circles.forEach((circle) => {
        circle.removeEventListener(
          eventTypes[0],
          (e) => handleClick(e, eventTypes[0]),
          true
        );
      });
    } else {
      modeButton.classList.remove("auto");
      modeButton.classList.add("normal");
      mode.innerHTML = "normal";

      circles.forEach((circle) => {
        if (modeButton.classList.contains("normal")) {
          circle.removeEventListener(
            eventTypes[1],
            circle.handleClickWrapper,
            true
          ); // 以前に保存した関数を使用
        } else {
          circle.removeEventListener(
            eventTypes[0],
            circle.handleClickWrapper,
            true
          ); // 以前に保存した関数を使用
        }
      });
    }
    PushPuchi(device);
  });
}
export { PushPuchi, clickStyle };
