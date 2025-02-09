import { Module } from '../core/module'

export class TimerModule extends Module {
    constructor() {
        super('timer', 'Таймер')
        this.state = {
            $modal: null,
            currentInterval: null,
            currentTimeout: null
        }
    }

    trigger() {
        if (this.state.$modal) {
            this.state.$modal.remove()
            clearInterval(this.state.currentInterval)
            clearTimeout(this.state.currentTimeout)
        }

        this.state.$modal = this.createModal()
        document.body.appendChild(this.state.$modal)
    }

    createModal() {
        const $modal = document.createElement('div')
        $modal.classList.add('modal')

        const $title = document.createElement('h3')
        $title.textContent = "Таймер"

        const $input = this.createInput()
        const $errorMessage = this.createErrorMessage()

        const $buttonContainer = document.createElement('div')
        $buttonContainer.classList.add('button-container')

        const $startBtn = this.createButton('Запустить таймер', () => this.startTimer($input))
        $startBtn.classList.add('disabled')

        const $closeBtn = this.createButton('Закрыть', () => $modal.remove())

        $buttonContainer.append($startBtn, $closeBtn)
        $modal.append($title, $input, $errorMessage, $buttonContainer)

        $input.addEventListener('input', () => {
            this.validateInput($input, $errorMessage, $startBtn)
        })

        return $modal
    }

    createInput() {
        const $input = document.createElement('input')
        $input.type = 'text'
        $input.placeholder = 'Введите секунды'
        $input.classList.add('input-timer')

        return $input
    }

    createErrorMessage() {
        const $errorMessage = document.createElement('div')
        $errorMessage.classList.add('error-message')
        $errorMessage.style.visibility = 'hidden'
        return $errorMessage
    }

    createButton(text, onClick) {
        const $button = document.createElement('button')
        $button.textContent = text
        $button.classList.add('button')

        $button.addEventListener('click', (event) => {
            if ($button.classList.contains('disabled')) {
                event.preventDefault()
            } else {
                onClick()
            }
        })

        return $button
    }

    validateInput($input, $errorMessage, $startBtn) {
        $input.value = $input.value.replace(/[^0-9]/g, '')
        const isNumber = /^[0-9]+$/.test($input.value)

        if (!isNumber || ($input.value === '' || $input.value[0] === '0')) {
            $errorMessage.textContent = 'Введите корректное число секунд!'
            $errorMessage.style.visibility = 'visible'
            $startBtn.classList.add('disabled')
        } else {
            $errorMessage.style.visibility = 'hidden'
            $startBtn.classList.remove('disabled')
        }
    }

    startTimer($input) {
        let seconds = parseInt($input.value)
        this.state.$modal.innerHTML = `<div class="timer-count">${seconds}</div>`

        this.state.currentInterval = setInterval(() => {
            seconds--
            this.state.$modal.innerHTML = `<div class="timer-count">${seconds}</div>`

            if (seconds <= 0) {
                clearInterval(this.state.currentInterval)
                this.state.$modal.innerHTML = `<div class="timer-finished">Таймер завершен!</div>`
                this.state.currentTimeout = setTimeout(() => {
                    this.state.$modal.remove()
                }, 2000)
            }
        }, 1000)
    }
}