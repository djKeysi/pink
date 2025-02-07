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

  startClickCounter() {
    if (this.closeModal) this.closeModal();
    this.resetCounts();
    this.timerRunning = true;

    document.addEventListener("mousedown", this.mousedownHandler);

    setTimeout(() => {
        this.timerRunning = false;
        
        const panelInfo = document.createElement('div')
        panelInfo.style.background = 'linear-gradient(90deg, #b9deed, #efefef)'
        panelInfo.style.display = 'flex';
        panelInfo.style.flexDirection = 'column'; 
        panelInfo.style.alignItems = 'center'; 
        panelInfo.style.border = '1px solid black';  
        panelInfo.style.padding = '10px';
        panelInfo.style.margin = 'auto'

        const panelInfoText = document.createElement('span')
        panelInfoText.innerHTML = `Статистика кликов за 3 секунды: <br> Левая кнопка: ${this.leftClickCount}
        <br> Средняя кнопка: ${this.middleClickCount}
        <br> Правая кнопка: ${this.rightClickCount}`
        panelInfoText.style.textAlign = 'center'
        panelInfoText.style.display = 'block'

        const buttonClose = document.createElement('button')
        buttonClose.textContent = 'Закрыть';
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
        buttonClose.addEventListener('click', function() {
            panelInfo.remove()
        })
        
        panelInfo.appendChild(panelInfoText)
        document.body.append(panelInfo)
        panelInfo.append(buttonClose)

        document.removeEventListener("mousedown", this.mousedownHandler);
    }, 3000);
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

  resetCounts() {
    this.leftClickCount = 0;
    this.middleClickCount = 0;
    this.rightClickCount = 0;
  }

  trigger() { 
      this.startClickCounter();
  }
}