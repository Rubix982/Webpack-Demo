"use strict";

import { parse } from "querystring";

const alertService = new AlertService();
const componentService = new ComponentService();

const run  = (alertService, componentService) => {
  alertService.hideErrors();
  const inputs = componentService.getInputs();
  const parsedInputs = parsedInputs(...inputs);

  if (inputsAreValid(parsedInputs)) {
    const [numA, numB] = parsedInputs;
    componentService.setResult(numA + numB);
  } else {
    componentService.setResult("");
    alertService.handleAdditionErrors(inputs, parsedInputs);
  }
};

run(alertService, componentService);