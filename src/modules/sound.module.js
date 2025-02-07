import { Module } from '../core/module'
import myAudioResource from '../../assets/sound/1.mp3'


export class SoundModule extends Module{
    constructor(text,type){
        //this.text = text
        super(text,type)
    }

    trigger(){
     console.log(this.text);

        if(this.text === 'Звук'){
       
            const myAudio = new Audio(myAudiolResource);
            myAudio.play();
           
            console.log("ffff");
            

        }

    }
    
}
//../../assets/sound/1.mp3'
window.randomSound = function() {
    var arrSound = ['../../assets/sound/1.mp3', '../../assets/sound/2.mp3'];
    var randomSound = Math.floor(Math.random() * arrSound.length);
    var audio = new Audio(arrSound[randomSound]);
    audio.play();
  }