// プチプチ音一覧
let pop = [
  "Packaging_Air_Cushion01-07(Pop).mp3",
  "Packaging_Air_Cushion01-08(Pop).mp3",
  // 'Packaging_Air_Cushion01-09(Pop).mp3',
  // 'Packaging_Air_Cushion01-10(Pop).mp3',
  "Packaging_Air_Cushion01-17(Far-Pop).mp3",
  "Packaging_Air_Cushion01-18(Far-Pop).mp3",
  // 'Packaging_Air_Cushion01-19(Far-Pop).mp3',
  // 'Packaging_Air_Cushion01-20(Far-Pop).mp3',
];

let rustle = [
  "Packaging_Air_Cushion01-01(Rustle).mp3",
  "Packaging_Air_Cushion01-02(Rustle).mp3",
  "Packaging_Air_Cushion01-03(Rustle).mp3",
  "Packaging_Air_Cushion01-04(Rustle).mp3",
  "Packaging_Air_Cushion01-05(Rustle).mp3",
  "Packaging_Air_Cushion01-11(Far-Rustle).mp3",
  "Packaging_Air_Cushion01-12(Far-Rustle).mp3",
  "Packaging_Air_Cushion01-13(Far-Rustle).mp3",
  "Packaging_Air_Cushion01-14(Far-Rustle).mp3",
  "Packaging_Air_Cushion01-15(Far-Rustle).mp3",
  "Packaging_Air_Cushion01-16(Far-Rustle).mp3",
];
const soundPath = "../src/sound/";

// クリック時の音
async function popSound() {
  let rand = Math.floor(Math.random() * pop.length);
  let sound = soundPath + pop[rand];
  let audio = new Audio(sound);
  audio.currentTime = 0;
  audio.play();
}

// スクロール時の音
async function rustleSound() {
  let rand = Math.floor(Math.random() * rustle.length);
  let sound = soundPath + rustle[rand];
  let audio = new Audio(sound);
  audio.currentTime = 0;
  audio.play();
}

export { popSound, rustleSound };
