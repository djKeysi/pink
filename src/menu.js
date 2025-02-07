import { Menu } from './core/menu'
// import { TimerModule } from './modules/timer.module'

export class ContextMenu extends Menu {
    constructor(selector, clickPosition) {
        super(selector)
        this.el.innerHTML = ''

        const modules = [
            // new TimerModule('timer', 'Запустить таймер'),
        ]
        modules.forEach(module => this.add(module))

        const listElements = document.querySelectorAll('.menu-item')
        listElements.forEach(item => item.addEventListener('click', (event) => {
            const selectedModule = modules.find(m => m.type === event.target.dataset.type)
            if (selectedModule) {
                selectedModule.trigger()
                this.close()
            }
        }))

        this.open()
        this.setPosition(clickPosition)
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