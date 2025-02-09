import { Module } from "../core/module";
import { random } from "../utils";

export class GuessNumber extends Module {
  constructor() {
    super("guessnumber", "Угадай число");

    this.$labelElement = "";
  }

  setCreateForm() {
    this.$divElement = document.createElement("div");

    this.$divElement.style.borderRadius = "5px";
    this.$divElement.textContent = "Введите любое число от 0 до 10:";
    this.$divElement.style.fontFamily = "Times New Roman";
    this.$divElement.style.textAlign = "center";
    this.$divElement.style.fontWeight = "bold";
    this.$divElement.style.padding = "10px";
    this.$divElement.style.width = "300px";
    this.$divElement.style.height = "200px";
    this.$divElement.style.background = "rgb(213, 219, 238)";
    this.$divElement.id = "forms";

    this.$inputElement = document.createElement("input");
    this.$inputElement.style.margin = "18px";
    this.$inputElement.style.width = "250px";
    this.$inputElement.style.height = "30px";
    this.$inputElement.style.background = "white";

    this.$buttonElement = document.createElement("button");
    this.$buttonElement.textContent = "Угадать";
    this.$buttonElement.style.margin = "10px";
    this.$buttonElement.style.width = "100px";
    this.$buttonElement.style.height = "30px";
    this.$buttonElement.style.borderRadius = "5px";
    this.$buttonElement.style.fontWeight = "bold";
    this.$buttonElement.style.background = "rgb(17, 187, 213)";

    this.$buttonElementHome = document.createElement("button");
    this.$buttonElementHome.textContent = "Пойду ка я";
    this.$buttonElementHome.style.margin = "10px";
    this.$buttonElementHome.style.width = "100px";
    this.$buttonElementHome.style.height = "30px";
    this.$buttonElementHome.style.borderRadius = "5px";
    this.$buttonElementHome.style.fontWeight = "bold";
    this.$buttonElementHome.style.background = "rgb(213, 17, 33)";

    this.$divElementLabel = document.createElement("div");

    this.$labelElement = document.createElement("label");

    this.$divElementLabel.append(this.$labelElement);

    this.$divElement.append(
      this.$inputElement,
      this.$buttonElement,
      this.$buttonElementHome,
      this.$divElementLabel
    );
    document.body.append(this.$divElement);

    this.$buttonElement.addEventListener("click", this.handleButton.bind(this));
    this.$inputElement.addEventListener("input", this.handleInput.bind(this));
    this.$buttonElementHome.addEventListener(
      "click",
      this.handleButtonHome.bind(this)
    );
  }

  trigger() {
    this.setCreateForm();
  }

  handleButton() {
    const randomNumber = random(0, 10);
    console.log("randomNumber", randomNumber);
    if (randomNumber === this.handleInput()) {
      this.setChecklabel("ПОЗДРАВЛЯЮ тебе повезло !!!", "green");
    } else {
      this.setChecklabel("Ты какой то не счастливый, рискни еще раз :)", "red");
    }
  }
  handleInput() {
    const inputValue = Number(this.$inputElement.value.trim());

    if (isNaN(inputValue) || inputValue < 0 || inputValue > 10) {
      this.setChecklabel("Ты чо, Вводи только цифры от 0 до 10 !!!", "red");
    } else {
      this.setChecklabel(" ", "red");
    }
    return inputValue;
  }
  setChecklabel(text, color) {
    this.$labelElement.textContent = text;
    this.$labelElement.style.color = color;
  }
  handleButtonHome() {
    this.$divElement.remove();
  }
}
