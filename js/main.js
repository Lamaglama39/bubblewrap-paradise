"use strict";
import { rustleSound } from "./sound.js";
import { CreatePuchi, scrollPages } from "./create.js";
import { PushPuchi, clickStyle } from "./action.js";

{
  // 初期表示用のプチプチ作成
  CreatePuchi("firstPuchi");

  // スクロール時のプチプチ作成
  scrollPages();

  // 初期のプチプチクリックイベント設定
  PushPuchi();

  // 単発-連射モード切り替え設定
  clickStyle();
}
