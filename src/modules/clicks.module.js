import { Module } from '../core/module';

export class ClickCounter extends Module {
    constructor() {
        super('click-counter', 'Подсчет кликов');
        this.leftClickCount = 0;
        this.middleClickCount = 0;
        this.rightClickCount = 0;
        this.timerRunning = false;
        this.mousedownHandler = this.mousedownHandler.bind(this);
        this.closeModal = null;
    }

    setCloseModal(closeModal) {
        this.closeModal = closeModal;
    }

    trigger() {
        this.showTimerSelection();
    }

    showTimerSelection() {
        if (this.closeModal) this.closeModal();

        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.backgroundColor = '#fff';
        modal.style.border = '1px solid #000';
        modal.style.padding = '20px';
        modal.style.zIndex = '1000'; 
        modal.style.textAlign = 'center';

        const timerOptions = [3, 5, 10];

        const title = document.createElement('p');
        title.textContent = 'Выберите длительность таймера (сек):';
        modal.appendChild(title);

        timerOptions.forEach(duration => {
            const button = document.createElement('button');
            button.textContent = `${duration} сек`;
            button.style.margin = '5px';
            button.addEventListener('click', () => {
                this.startClickCounter(duration * 1000); 
                modal.remove(); 
            });
            modal.appendChild(button);
        });

        const buttonModal = this.createButton('Отмена',() => {
                modal.remove();
        })

        modal.append(buttonModal)
        document.body.appendChild(modal);
    }

    startClickCounter(duration) {
        this.resetCounts();
        this.timerRunning = true;

        document.addEventListener("mousedown", this.mousedownHandler);

        setTimeout(() => {
            this.timerRunning = false;

            const panelInfo = document.createElement('div')
            panelInfo.style.background = 'linear-gradient(90deg,rgb(115, 198, 231),rgb(219, 113, 113))'
            panelInfo.style.display = 'flex';
            panelInfo.style.flexDirection = 'column';
            panelInfo.style.alignItems = 'center';
            panelInfo.style.border = '1px solid black';
            panelInfo.style.padding = '10px';
            panelInfo.style.margin = 'auto'

            const panelInfoText = document.createElement('span')
            panelInfoText.innerHTML = `Статистика кликов за ${duration / 1000} секунд: <br> Левая кнопка: ${this.leftClickCount}
            <br> Средняя кнопка: ${this.middleClickCount}
            <br> Правая кнопка: ${this.rightClickCount}`
            panelInfoText.style.textAlign = 'center'
            panelInfoText.style.display = 'block'

            const buttonClose = this.createButton('Закрыть', () => {
                panelInfo.remove();
            })

            panelInfo.appendChild(panelInfoText)
            document.body.append(panelInfo)
            panelInfo.append(buttonClose)

            document.removeEventListener("mousedown", this.mousedownHandler);
        }, duration);
    }

    mousedownHandler(event) {
        if (!this.timerRunning) {
            return;
        }
        switch (event.button) {
            case 0:
                this.leftClickCount++;
                break;
            case 1:
                this.middleClickCount++;
                break;
            case 2:
                this.rightClickCount++;
                break;
            default:
                console.log("Неизвестная кнопка мыши:", event.button);
        }
    }
    
    createButton(text, onClick) {
        const buttonClose = document.createElement('button')
        buttonClose.textContent = text
        buttonClose.style.display = 'inline-block';
        buttonClose.style.backgroundColor = '#ff5555';
        buttonClose.style.color = '#fff';
        buttonClose.style.padding = '5px 10px';
        buttonClose.style.border = 'none';
        buttonClose.style.marginTop = '15px'

        buttonClose.addEventListener('mousedown', () => {
            buttonClose.style.transform = 'scale(0.9)';
        });
        buttonClose.addEventListener('mouseup', () => {
            buttonClose.style.transform = 'scale(1)';
        });
        buttonClose.addEventListener('click', onClick)

        return buttonClose
    }

    resetCounts() {
        this.leftClickCount = 0;
        this.middleClickCount = 0;
        this.rightClickCount = 0;
    }
}