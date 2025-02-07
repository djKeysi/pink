import { Menu } from './core/menu'

export class ContextMenu extends Menu {

    constructor(selector, clickPosition) {
        super(selector)
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
}