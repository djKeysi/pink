import { Module } from "../core/module";
import { randomSound } from "../utils";

export class SoundModule extends Module {
  constructor() {
    super('sound', 'Случайный звук')
  }

  trigger() {
    const sound =`../../assets/sound/`
    const arrSound = [
      `${sound}1.mp3`,
      `${sound}2.mp3`,
      `${sound}3.mp3`,
      `${sound}4.mp3`,
    ];
    const audio = new Audio(arrSound[randomSound(arrSound)]);
    audio.play();


//     const sound =Number(`../../assets/sound/1.mp3`.split('')[19])

// //     var arrSound = [
// //      sound
// //     ];
// //    // console.log(arrSound.forEach(sounds=>sounds.replace(+sound[19],'2') ));

// //     const d = arrSound.forEach(sounds=>sounds) 
//     console.log(sound);
    
    
    // const audio = new Audio(arrSound[randomSound(arrSound)]);
    // audio.play();
  }
}
