import './styles.css'
import { ContextMenu } from './menu.js'

// Событие которое произойдет после загрузки DOM элементов
document.addEventListener('DOMContentLoaded', () => {
    const menu = new ContextMenu('.menu')

    // Событие при вызове контекстного меню
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        // Передача ивента в метод, для получения координат клика
        menu.open(e)
    })
})