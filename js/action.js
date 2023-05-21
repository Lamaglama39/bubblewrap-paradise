import { popSound } from "./sound.js";

// ぷちぷちクリックイベント設定
function PushPuchi(device) {
  const eventTypes = device === "touch" ? ["touchstart", "touchmove"] : ["click", "mousemove"];
  let circles = Array.from(document.querySelectorAll(".alive"));

  circles.forEach((circle) => {
    let mode = document.getElementById("modeButton");
    const handleClickWrapper = (e) => handleClick(e, mode.classList.contains("normal") ? eventTypes[0] : eventTypes[1]);
    circle.addEventListener(mode.classList.contains("normal") ? eventTypes[0] : eventTypes[1], handleClickWrapper, true);
    circle.handleClickWrapper = handleClickWrapper;
  });
}

// ぷちぷちクリック判定
function handleClick(e, eventType) {
  performActionOnElement(e.target);
  if (eventType === "touchmove") {
    e.preventDefault();
    document.addEventListener('touchmove', function(event) {
      let touch = event.touches[0];
      let element = document.elementFromPoint(touch.clientX, touch.clientY);
      performActionOnElement(element);
    }, false);
    e.target.removeEventListener("touchmove", e.target.handleClickWrapper, true);
  } else {
    e.target.removeEventListener("mousemove", e.target.handleClickWrapper, true);
  }
}

// 共通イベント
function performActionOnElement(element) {
  if (element && element.tagName.toLowerCase() === 'img' && element.classList.contains("alive")) {
    popSound();
    changeImage(element);
    addCount();
  }
}

// ぷちぷち画像変更
function changeImage(circle) {
  circle.src = "src/img/background.png";
  circle.classList.remove("alive");
  circle.classList.add("after");
}

// スコアカウンター
let count = 0;
function addCount() {
  let countElement = document.getElementById("Counter");
  count++;
  countElement.textContent = count.toString();
}

// 単発-連射モード切り替え
function clickStyle(device) {
  const eventTypes = device === "touch" ? ["touchstart", "touchmove"] : ["click", "mousemove"];
  let modeButton = document.getElementById("modeButton");
  let mode = document.getElementById("mode");

  modeButton.addEventListener("click", () => {
    let circles = Array.from(document.querySelectorAll(".alive"));

    if (modeButton.classList.contains("normal")) {
      modeButton.classList.remove("normal");
      modeButton.classList.add("auto");
      mode.innerHTML = "auto";

      circles.forEach((circle) => {
        circle.removeEventListener(eventTypes[0], circle.handleClickWrapper, true);
        circle.handleClickWrapper = null;
      });
    } else {
      modeButton.classList.remove("auto");
      modeButton.classList.add("normal");
      mode.innerHTML = "normal";

      circles.forEach((circle) => {
        if (circle.handleClickWrapper) {
          circle.removeEventListener(eventTypes[1], circle.handleClickWrapper, true);
          circle.handleClickWrapper = null;
        }
      });
    }
    PushPuchi(device);
  });
}

export { PushPuchi, clickStyle };