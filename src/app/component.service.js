class Component {

    constructor() {
        this.numberOneInput = document.getElementById("numberOne");
        this.numberTwoInput = document.getElementById("numerTwo");
        this.resultbox = document.getElementById("result");
        this.addValuesButton = document.getElementById("addValues");
    }

    onClick(cb) {
        this.addValuesButton.addEventListener("click", cb)
    }

    getInputs() {
        return [this.numberOneInput.value, this.numberTwoInput.value];
    }

    setResult(str) {
        this.resultbox.innerText = str;
    }

};