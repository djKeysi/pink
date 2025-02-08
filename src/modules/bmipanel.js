import { Module } from '../core/module';

export class BmiPanel extends Module {
    constructor() {
        super('bmi-panel', 'Рассчет BMI');
        this.state = {
            weight: '',
            height: '',
            BMItotal: 0,
            BMIInterpretation: ''
        };

        this.$formPanel = document.createElement('form');
        this.$inputWeight = null;
        this.$inputHeight = null;
        this.$button = null;
        this.$rootElement = null;
        this.$total = null;
        this.$interpretation = null;
        this.$modal = null;

        this.initializeForm();
    }

    trigger() {
        this.showModal();
    }

    showModal() {
        if (this.$modal && document.body.contains(this.$modal)) {
            this.$modal.remove();
        }

        this.$modal = document.createElement('div');
        this.$modal.style.position = 'fixed';
        this.$modal.style.top = '50%';
        this.$modal.style.left = '50%';
        this.$modal.style.transform = 'translate(-50%, -50%)';
        this.$modal.style.backgroundColor = '#fff';
        this.$modal.style.border = '1px solid #000';
        this.$modal.style.padding = '20px';
        this.$modal.style.zIndex = '1000';
        this.$modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        this.$modal.style.borderRadius = '5px';
        this.$modal.style.fontFamily = 'Arial, sans-serif';

        this.$modal.appendChild(this.$rootElement);
        this.$modal.appendChild(this.$formPanel);
        document.body.appendChild(this.$modal);
    }

    updateTotal() {
        this.$total.textContent = this.state.BMItotal;
        this.$interpretation.textContent = this.state.BMIInterpretation;
        this.$interpretation.style.fontSize = '24px'
    }

    interpretBMI(bmi) {
        if (bmi <= 16) {
            return "У вас выраженный дефицит массы";
        } else if (bmi >= 16 && bmi <= 17.9) {
            return "У вас недостаточная масса тела";
        } else if (bmi >= 18 && bmi <= 24.9) {
            return "У вас нормальный вес";
        } else if (bmi >= 25 && bmi <= 29.9) {
            return "У вас избыточная масса тела (предожирение)";
        } else if (bmi >= 30 && bmi <= 34.9) {
            return "У вас ожирение 1 степени";
        } else if (bmi >= 35 && bmi <= 39.9) {
            return "У вас ожирение 2 степени";
        } else {
            return "У вас ожирение 3 степени (морбидное)";
        }
    }

    initializeForm() {
        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'app';
        this.$rootElement.style.textAlign = 'center';

        const headerWeight = document.createElement('h1');
        headerWeight.textContent = "Ваш ИМТ : ";
        headerWeight.style.fontSize = '24px';
        headerWeight.style.marginBottom = '10px';

        const imtValue = document.createElement('span');
        imtValue.textContent = this.state.BMItotal;
        imtValue.style.fontWeight = 'bold';

        headerWeight.appendChild(imtValue);
        this.$rootElement.appendChild(headerWeight);
        this.$total = imtValue;

        const interpretationText = document.createElement('span');
        interpretationText.textContent = this.state.BMIInterpretation
        this.$interpretation = interpretationText
        this.$rootElement.appendChild(interpretationText)
        interpretationText.style.marginBottom = '15px'

        const weightInputLabel = document.createElement('label');
        weightInputLabel.textContent = 'Введите ваш вес в кг';
        weightInputLabel.style.display = 'block';
        weightInputLabel.style.marginBottom = '5px';
        weightInputLabel.style.marginTop = '10px'

        const weightInput = document.createElement('input');
        weightInput.setAttribute('name', 'weight');
        weightInput.setAttribute('type', 'number');
        weightInput.setAttribute('max', '999');
        weightInput.setAttribute('min', '1');
        weightInput.setAttribute('required', '');
        weightInput.style.padding = '5px';
        weightInput.style.borderRadius = '3px';
        weightInput.style.border = '1px solid #ccc';
        this.$inputWeight = weightInput;

        const heightInputLabel = document.createElement('label');
        heightInputLabel.textContent = 'Введите ваш рос в см';
        heightInputLabel.style.display = 'block';
        heightInputLabel.style.marginBottom = '5px';

        const heightInput = document.createElement('input');
        heightInput.setAttribute('name', 'height');
        heightInput.setAttribute('type', 'number');
        heightInput.setAttribute('max', '300');
        heightInput.setAttribute('min', '1');
        heightInput.setAttribute('required', '');
        heightInput.style.padding = '5px';
        heightInput.style.borderRadius = '3px';
        heightInput.style.border = '1px solid #ccc';
        this.$inputHeight = heightInput;
        
        const submitButton = document.createElement('button');
        
        const buttonModalDelete = this.createButton('Закрыть',() => {
            this.$modal.remove();
        })

        this.$button = submitButton
        weightInputLabel.appendChild(weightInput);
        heightInputLabel.appendChild(heightInput);
        this.$formPanel.append(weightInputLabel, heightInputLabel, submitButton, buttonModalDelete);
        this.$inputHeight.addEventListener('input', this.handleInputHeight.bind(this));
        this.$inputWeight.addEventListener('input', this.handleInputWeight.bind(this));
        this.$formPanel.addEventListener('submit', this.handleSubmit.bind(this));

        submitButton.type = 'submit';
        submitButton.textContent = 'Ввод';
        submitButton.style.backgroundColor = '#4CAF50';
        submitButton.style.color = 'white';
        submitButton.style.padding = '10px 15px';
        submitButton.style.border = 'none';
        submitButton.style.borderRadius = '3px';
        submitButton.style.cursor = 'pointer';
    }
    
    get isValidWeight() {
        return typeof this.state.weight === 'number' && this.state.weight >= 1 && this.state.weight <= 999;
    }

    get isValidHeight() {
        return typeof this.state.height === 'number' && this.state.height >= 1 && this.state.height <= 300;
    }

    handleInputWeight(event) {
        this.state.weight = Number(event.target.value);
        this.$button.disabled = !this.isValidWeight;
    }

    handleInputHeight(event) {
        this.state.height = Number(event.target.value);
        this.$button.disabled = !this.isValidHeight;
    }

    calculateBMI() {
        const heightInMeters = this.state.height / 100;
        const bmi = this.state.weight / (heightInMeters * heightInMeters);
        this.state.BMItotal = bmi.toFixed(2);
        return this.state.BMItotal;
    }

    onSubmit(data) {
        this.state.height = data.height;
        this.state.weight = data.weight;

        let bmi = this.calculateBMI()

        this.state.BMIInterpretation =  this.interpretBMI(Number(bmi))
        this.updateTotal();
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.isValidHeight && this.isValidWeight) {
            this.onSubmit({
                weight: Number(this.state.weight),
                height: Number(this.state.height)
            });

            this.$inputHeight.value = '';
            this.$inputWeight.value = '';
        }
    }

    createButton(text, onClick) {
        const buttonClose = document.createElement('button')
        buttonClose.style.backgroundColor = '#4CAF50';
        buttonClose.style.color = 'white';
        buttonClose.style.padding = '10px 15px';
        buttonClose.style.border = 'none';
        buttonClose.style.borderRadius = '3px';
        buttonClose.style.cursor = 'pointer';

        buttonClose.textContent = text
        buttonClose.style.display = 'inline-block';

        buttonClose.addEventListener('mousedown', () => {
            buttonClose.style.transform = 'scale(0.9)';
        });
        buttonClose.addEventListener('mouseup', () => {
            buttonClose.style.transform = 'scale(1)';
        });
        buttonClose.addEventListener('click', onClick)

        return buttonClose
    }
}