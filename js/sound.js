// プチプチ音一覧
const soundPath = "../src/sound/";

// クリック時の音
let pop = [
  "Packaging_Air_Cushion01-07(Pop).mp3",
  "Packaging_Air_Cushion01-08(Pop).mp3",
  "Packaging_Air_Cushion01-17(Far-Pop).mp3",
  "Packaging_Air_Cushion01-18(Far-Pop).mp3",
];

async function popSound() {
  let rand = Math.floor(Math.random() * pop.length);
  let sound = soundPath + pop[rand];
  let audio = new Audio(sound);
  audio.currentTime = 0;
  audio.play();
}

// スクロール時の音
let rustle = [
  "Packaging_Air_Cushion01-01(Rustle).mp3",
  "Packaging_Air_Cushion01-02(Rustle).mp3",
  "Packaging_Air_Cushion01-03(Rustle).mp3",
];

async function rustleSound() {
  let rand = Math.floor(Math.random() * rustle.length);
  let sound = soundPath + rustle[rand];
  let audio = new Audio(sound);
  audio.currentTime = 0;
  audio.play();
}

export { popSound, rustleSound };
