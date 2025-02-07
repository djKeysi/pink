import { Menu } from './core/menu'
// import { TimerModule } from './modules/timer.module'

export class ContextMenu extends Menu {

    constructor(selector, clickPosition) {
        const modules = [
            // new TimerModule('timer', 'Запустить таймер'),
        ]

        super(selector)
        this.el.innerHTML = ''
        this.setPosition(clickPosition)
        modules.forEach(module => this.add(module))
    }

    setPosition(clickPosition) {
        const { clickX, clickY } = clickPosition

        if ((window.innerWidth - clickX) < this.el.offsetWidth) {
            this.el.style.left = `${clickX - this.el.offsetWidth}px`
        } else {
            this.el.style.left = `${clickX}px`
        }

        if ((window.innerHeight - clickY) < this.el.offsetHeight) {
            this.el.style.top = `${clickY - this.el.offsetHeight}px`
        } else {
            this.el.style.top = `${clickY}px`
        }
    }

    open() {
        this.el.classList.add('open')
    }

    close() {
        this.el.classList.remove('open')
    }

    add(module) {
        this.el.innerHTML += module.toHTML()
    }
}