import './styles.css'
import { ContextMenu } from './menu.js'

document.addEventListener('contextmenu', (e) => {
    e.preventDefault()

    const contextMenu = new ContextMenu('.menu', { clickX: e.pageX, clickY: e.pageY })

    contextMenu.open()
})