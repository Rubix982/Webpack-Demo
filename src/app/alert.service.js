"use strict";

import { inputsAreValid } from './utils/inputs-are-valid';

export class AlertService {

    constructor() {
        this.errorBox = document.getElementById("error");
    }

    handleAdditionErorrs(inputs, numbers) {

        const fullMessage =  inputs.reduce((message, str, index) => {
            if (inputsAreValid[index])
            {
                return message + "";
            } else {
                return message + `${str} is not a number.`;
            }
        }, "Please enter two valid numbers!");

        this.errorBox.classList.remove("invisible");

        // innerText is supported by ie8 and earlier, while
        // textContent is not
        this.errorBox.innerText = fullMessage;
    };

    hideErrors() {
        this.errorBox.classList.add("invisible");
    };

};