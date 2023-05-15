"use strict";
import { rustleSound } from "./sound.js";
import { CreatePuchi, scrollPages } from "./create.js";
import { PushPuchi, clickStyle } from "./action.js";

{
  // デバイス判定
  if ("ontouchstart" in window) {
    // タッチデバイスの場合
    const device = "touch";
    // 初期表示用のプチプチ作成
    CreatePuchi("firstPuchi", device);
    // 初期のプチプチクリックイベント設定
    PushPuchi(device);
    // 単発-連射モード切り替え設定
    clickStyle(device);
    // スクロール時のプチプチ作成
    scrollPages(device);
  } else {
    // タッチデバイスではない場合
    const device = "mouse";
    // 初期表示用のプチプチ作成
    CreatePuchi("firstPuchi", device);
    // 初期のプチプチクリックイベント設定
    PushPuchi(device);
    // 単発-連射モード切り替え設定
    clickStyle(device);
    // スクロール時のプチプチ作成
    scrollPages(device);
  }
}
