// プチプチ音一覧
const soundPath = "../src/sound/";

// クリック時の音
let pop = [
  "Packaging_Air_Cushion01-07(Pop).mp3",
  "Packaging_Air_Cushion01-08(Pop).mp3",
  "Packaging_Air_Cushion01-17(Far-Pop).mp3",
  "Packaging_Air_Cushion01-18(Far-Pop).mp3",
];

// スクロール時の音
let rustle = [
  "Packaging_Air_Cushion01-01(Rustle).mp3",
  "Packaging_Air_Cushion01-02(Rustle).mp3",
  "Packaging_Air_Cushion01-03(Rustle).mp3",
];

async function playSound(soundList) {
  let rand = Math.floor(Math.random() * soundList.length);
  let sound = soundPath + soundList[rand];
  let audio = new Audio(sound);
  audio.currentTime = 0;
  audio.play();
}

export function popSound() {
  playSound(pop);
}

export function rustleSound() {
  playSound(rustle);
}