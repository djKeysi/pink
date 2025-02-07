import { Module } from "../core/module";
import { random } from "../utils";
import alert from "../../assets/icons/alert.svg";
import error from "../../assets/icons/error.svg"
import info from "../../assets/icons/info.svg"
import success from "../../assets/icons/success.svg"

export class MessageModule extends Module {
    trigger() {

        this.typeOfMessage = {
            success: [ 'Отправлено', 'Ваше действие успешно выполнено', success, '#388e3c', 'rgba(56, 142, 60, 0.5)' ],
            info: [ 'Информация', 'Предоставлена дополнительная информация', info, '#0288d1', 'rgba(2, 136, 209, 0.5)' ],
            warning: [ 'Предупреждение', 'Ваше действие в ожидании', alert, '#f57c00', 'rgba(245, 124, 0, 0.5)' ],
            error: [ 'Ошибка', 'Ваше действие не выполнено', error, '#d32f2f', 'rgba(211, 47, 47, 0.5)' ],
        }

        const randomNumberOfMessage = random(0,3)
        const messageKeys = Object.keys(this.typeOfMessage)
        const currentTypeOfMessage = messageKeys[randomNumberOfMessage]

        const message = this.typeOfMessage[currentTypeOfMessage]       

        this.$container = document.createElement('div');
        this.$container.className = 'message-module';
        this.$container.style.border = `2px solid ${message[3]}`
        this.$container.style.backgroundColor = message[4]

        this.$titleContainer = document.createElement('div');
        this.$titleContainer.className = 'message-module__title-container';
        this.$titleContainer.style.borderBottom = `2px solid ${message[3]}`

        this.$img = document.createElement('img');
        this.$img.className = 'message-module__img';
        this.$img.src = message[2];

        this.$title = document.createElement('h1');
        this.$title.className = 'message-module__title';
        this.$title.textContent = message[0];
        this.$title.style.paddingLeft = '10px';
        
        this.$textContainer = document.createElement('div');
        this.$textContainer.className = 'message-module__text-container';
        this.$textContainer.style.textAlign = 'center';

        this.$text = document.createElement('p');
        this.$text.className = 'message-module__text';
        this.$text.textContent = message[1]

        this.$textContainer.append(this.$text);
        this.$titleContainer.append(this.$img, this.$title);
        this.$container.append(this.$titleContainer, this.$textContainer);

        document.body.append(this.$container);

        setTimeout(() => {
            this.$container.remove();
        }, 2000)
    }
}