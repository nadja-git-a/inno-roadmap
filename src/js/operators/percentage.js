import { clearNumbersDisplay, updateDisplay } from "../display/display";
import { operationState } from "./operands";
import { PercentageCommand } from "./operators-commands";

const countPercentage = () => {
    let operator = operationState.operator;
    let leftOperand = operationState.leftOperand;
    let rightOperand = operationState.rightOperand;
    
    if(operator == '+' || operator == '-') {
      let percent = new PercentageCommand (leftOperand, rightOperand);
      operationState.rightOperand = percent.execute();
      return percent.execute();
    }
  
    if(operator == '*' || operator == '/'){
      let percent = new PercentageCommand (1, rightOperand);
      operationState.rightOperand = percent.execute();
      return percent.execute();
    }
}

export const pressPercentage = (e) => {
    e.preventDefault();
    if (e.target.value == '%'){
        clearNumbersDisplay();
        operationState.rightOperand = countPercentage();
        updateDisplay(operationState.rightOperand, numbersDisplay);
    }
};