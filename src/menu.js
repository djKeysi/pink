import {Menu} from './core/menu'
import { SoundModule } from './modules/sound.module';
console.log('ddd2');

export class ContextMenu extends Menu {
    constructor(selector){
        super(selector)
   



     }


    test(e){

        this.el.style.top = `${e.pageY}px`;
        this.el.style.left = `${e.pageX}px`;
        this.el.classList.add('open')
        //console.log(  this.el.style.left);
        
       // this.el.classList.add('open')
    }
    add(){

       
        const LiElement = document.createElement('li')
        const soundModule = new SoundModule("Type",'Звук')

        LiElement.innerHTML = soundModule.toHTML()

        LiElement.addEventListener('click',(event)=>{
           soundModule.trigger()
           // console.log('hhhhh')
        })
        
        // LiElement.textContent = soundModule.toHTML()//'cddfdf'//soundModule.trigger()
        // LiElement.style.color = "white"
        // LiElement.className = "menu-item"

        this.el.append(LiElement)
    }



}