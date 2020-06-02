"use strict";

import { inputsAreValid } from "./utils/inputs-are-valid";
import { parseInputs } from "./utils/parse-inputs";
import { AlertService } from "./alert.service";
import { ComponentService } from "./component.service";

export const run  = (alertService, componentService) => {
  alertService.hideErrors();
  const inputs = componentService.getInputs();
  const parsedInputs = parseInputs(...inputs);

  if (inputsAreValid(parsedInputs)) {
    const [numA, numB] = parsedInputs;
    componentService.setResult(numA + numB);
  } else {
    componentService.setResult("");
    alertService.handleAdditionErrors(inputs, parsedInputs);
  }
};