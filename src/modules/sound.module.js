import { Module } from "../core/module";
import { randomSound } from "../utils";
import one from "../../assets/sound/1.mp3";
import two from "../../assets/sound/2.mp3"
import three from "../../assets/sound/3.mp3"
import four from "../../assets/sound/4.mp3"

export class SoundModule extends Module {
  constructor() {
    super('sound', 'Случайный звук')
  }

  trigger() {
   // const sound =`../../assets/sound/`
    // const arrSound = [
    //   `${sound}1.mp3`,
    //   `${sound}2.mp3`,
    //   `${sound}3.mp3`,
    //   `${sound}4.mp3`,
    // ];
    const arrSound = [
       one,
        two,
        three,
        four,
      ];
    const audio = new Audio(arrSound[randomSound(arrSound)]);
    audio.play();

  }
}
