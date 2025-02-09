import { Module } from '../core/module'
import { randomColor } from '../utils'

export class ShapeModule extends Module {
    constructor() {
        super('shape', 'Случайная фигура')
    }

    trigger() {
        const shape = document.createElement('div')

        const rColor = randomColor()
        shape.style.backgroundColor = rColor

        const randomWidth = Math.random() * 100 + 50  // Ширина от 50 до 150px
        const randomHeight = Math.random() * 100 + 50  // Высота от 50 до 150px
        shape.style.width = `${randomWidth}px`
        shape.style.height = `${randomHeight}px`

        const randomX = Math.random() * (window.innerWidth - randomWidth)
        const randomY = Math.random() * (window.innerHeight - randomHeight)
        shape.style.position = 'absolute'
        shape.style.left = `${randomX}px`
        shape.style.top = `${randomY}px`

        // Случайный выбор фигуры
        const shapeType = Math.floor(Math.random() * 6) // 6 типов фигур
        switch (shapeType) {
            case 0: // Круг
                shape.style.borderRadius = '50%'
                break
            case 1: // Треугольник
                shape.style.width = '0'
                shape.style.height = '0'
                shape.style.borderLeft = `${randomWidth / 2}px solid transparent`
                shape.style.borderRight = `${randomWidth / 2}px solid transparent`
                shape.style.borderBottom = `${randomHeight}px solid ${rColor}`
                shape.style.backgroundColor = 'transparent'
                break
            case 2: // Ромб
                shape.style.transform = 'rotate(45deg)'
                break
            case 3: // Прямоугольник
                break
            case 4: // Овальный прямоугольник
                shape.style.borderRadius = '50%'
                break
            case 5: // Звезда
                shape.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                break;
        }

        document.body.appendChild(shape)
    }
}