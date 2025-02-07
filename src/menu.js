import { Menu } from './core/menu'
import { MessageModule } from './modules/message.module'

export class ContextMenu extends Menu {
    add() {
        this.$messageMenuEl = new MessageModule('message-module', 'Сообщение').toHTML();
        return this.$messageMenuEl
    }

    open() {
        this.$menu = this.add()
        return this.$menu
    }

    close() {
        this.el.removeAttribute('style')
        this.el.classList.remove('open')
    }
}