import { Module } from "../core/module";
import { random } from "../utils";

export class MessageModule extends Module {
    trigger() {

        this.$container = document.createElement('div');
        this.$container.className = 'message-module';

        this.$titleContainer = document.createElement('div');
        this.$titleContainer.className = 'message-module__title-container';

        this.$img = document.createElement('img');
        this.$img.className = 'message-module__img';

        this.$title = document.createElement('h1');
        this.$title.className = 'message-module__title';
        
        this.$textContainer = document.createElement('div');
        this.$textContainer.className = 'message-module__text-container';

        this.$text = document.createElement('p');
        this.$text.className = 'message-module__text';

        this.$textContainer.append(this.$text);
        this.$titleContainer.append(this.$img, this.$title);
        this.$container.append(this.$titleContainer, this.$textContainer);

        document.body.append(this.$container);

        const timeOfMessageInSec = random(1,5)

        // console.log(timeOfMessageInSec)
    }
}