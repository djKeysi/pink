import { ContextMenu } from './menu'
import './styles.css'

// Событие которое произойдет после загрузки DOM элементов
document.addEventListener('DOMContentLoaded', () => {
    const menu = new ContextMenu('.menu')

    // Событие при вызове контекстного меню
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        // Открытие меню и передача в метод координат клика
        menu.open(e)
    })
})
