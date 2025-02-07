import { Module } from '../core/module';

export class BackgroundModule extends Module {
    constructor() {
        super('background-module', 'Случайный фон');
        this.clickHandler = this.clickHandler.bind(this);
    }

    trigger() {
        this.clickHandler(); 
    }

    clickHandler() {
        const newGradient = this.getRandomGradient();
        document.body.style.background = newGradient;
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    getRandomGradient() {
        const color1 = this.getRandomColor();
        const color2 = this.getRandomColor();
        const color3 = this.getRandomColor();
        const direction = Math.floor(Math.random() * 360); 
        return `linear-gradient(${direction}deg, ${color1}, ${color2}, ${color3})`;
    }

    destroy() {
        document.body.style.background = ''; 
        document.body.style.backgroundSize = ''; 
        document.body.style.height = ''; 
    }
}