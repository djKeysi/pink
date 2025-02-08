<<<<<<< HEAD
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


=======
import { Menu } from './core/menu'
// import { TimerModule } from './modules/timer.module'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        // Массив со всеми модулями, которые будут в контекстном меню
        this.modules = [
            // Все модули указываются по примеру через запятую, вверху только заимпортить
            // new TimerModule('timer', 'Запустить таймер'),
        ]
        // Вызов на каждом модуле метода по добавлению его в контекстное меню
        this.modules.forEach(module => this.add(module))
        // Установка события по клику на каждый элемент меню
        this.el.addEventListener('click', this.clickMenuElementHandler.bind(this))
    }
>>>>>>> 64cf6fd5444d9e41ba47daa62261b0970c0668fc

    clickMenuElementHandler(event) {
        // Находим элемент на который кликнули по типу
        const selectedModule = this.modules.find(m => m.type === event.target.dataset.type)
        if (selectedModule) {
            // Если он есть запускаем метод вызова фичи и закрываем меню
            selectedModule.trigger()
            this.close()
        }
    }

    setPosition(event) {
        const { clientX: clickX, clientY: clickY } = event // Координаты клика
        const { offsetWidth: menuWidth, offsetHeight: menuHeight } = this.el // Размеры меню
        const { innerWidth: windowWidth, innerHeight: windowHeight } = window // Размеры окна

        // Установка значений координат для меню и проверка если клик произошел близко к правому краю или низу, чтобы не уплыло
        const left = (windowWidth - clickX < menuWidth) ? (clickX - menuWidth) : clickX
        const top = (windowHeight - clickY < menuHeight) ? (clickY - menuHeight) : clickY

        this.el.style.left = `${left}px`
        this.el.style.top = `${top}px`
    }

    open(event) {
        this.el.classList.add('open')
        // Вызов метода для установки позиции меню с помощью event
        // Делаем после добавления класса выше, так как если поменять местами, при первом клике высота всегда 0
        this.setPosition(event)
    }

    close() {
        this.el.classList.remove('open')
    }

    add(module) {
        // Вызов метода у модуля для записи его содержимого в меню
        this.el.innerHTML += module.toHTML()
    }
}