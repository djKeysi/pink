import { Menu } from './core/menu'
import { BackgroundModule } from './modules/background.module'
import { BmiPanel } from './modules/bmipanel'
import { ClickCounter } from './modules/clicks.module'
import { MessageModule } from './modules/message.module'
import { SoundModule } from './modules/sound.module'
import { TimerModule } from './modules/timer.module'
import { ShapeModule } from './modules/shape.module'
import { GuessNumber } from './modules/guessnumber.module'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        // Массив со всеми модулями, которые будут в контекстном меню
        this.modules = [
            // Все модули указываются по примеру через запятую, вверху только заимпортить
            new MessageModule(),
            new BackgroundModule(),
            new BmiPanel(),
            new SoundModule(),
            new ClickCounter(),
            new TimerModule(),
            new ShapeModule(),
            new GuessNumber()
        ]
        // Вызов на каждом модуле метода по добавлению его в контекстное меню
        this.modules.forEach(module => this.add(module))
        // Установка события по клику на каждый элемент меню
        this.el.addEventListener('click', this.clickMenuElementHandler.bind(this))
    }

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