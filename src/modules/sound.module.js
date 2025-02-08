import { Module } from "../core/module";
import { randomSound } from "../utils";

export class SoundModule extends Module {
  constructor(text, type) {
    super(text, type);
  }

  trigger() {
    const sound ="../../assets/sound/"
    var arrSound = [
      `${sound}1.mp3`,
      `${sound}2.mp3`,
      `${sound}3.mp3`,
      `${sound}4.mp3`,
    ];
    const audio = new Audio(arrSound[randomSound(arrSound)]);
    audio.play();
  }
}
