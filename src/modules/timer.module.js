import { Module } from '../core/module'

export class TimerModule extends Module {
    constructor() {
        super('timer', 'Запустить таймер')
    }
    trigger() {
        console.log('timer')
    }

    // startTimer(seconds) {
    //     let remainingTime = Number(seconds)

    //     console.log(remainingTime)
    //     const timer = setInterval(() => {
    //         remainingTime--
    //         console.log(remainingTime)

    //         if (remainingTime <= 0) {
    //             clearInterval(timer)
    //             console.log('Таймер завершен!')
    //         }
    //     }, 1000);
    // }
}