"use strict";

export class ComponentService {

    constructor() {
        this.numberOneInput = document.getElementById("numberOne");
        this.numberTwoInput = document.getElementById("numberTwo");
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