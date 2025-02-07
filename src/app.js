import { ContextMenu } from './menu'
import { MessageModule } from './modules/message.module'
import './styles.css'

const menuBlock = document.querySelector('.menu')

window.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    menuBlock.innerHTML = new ContextMenu('.menu').open()

    menuBlock.style.display = 'block'
    menuBlock.style.left = `${event.pageX}px`
    menuBlock.style.top = `${event.pageY}px`

    menuBlock.classList.add('open')
})

menuBlock.addEventListener('click', (event) => {
    switch (event.target.dataset.type) {
        case 'message-module':
            new MessageModule('message-module', 'Сообщение').trigger();
    }
    menuBlock.style.display = 'none'
    menuBlock.classList.remove('open')
})