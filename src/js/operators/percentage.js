import { clearNumbersDisplay, updateDisplay } from "../display/display";
import { state, setRightOperand } from "./operands";
import { PercentageCommand } from "./operators-commands";

const countPercentage = () => {
    let operator = state.operator;
    let leftOperand = state.leftOperand;
    let rightOperand = state.rightOperand;
    
    state.saveHistory();
    
    if(operator == '+' || operator == '-') {
      let percent = new PercentageCommand (leftOperand, rightOperand);
      setRightOperand(percent.execute());
      return percent.execute();
    }
  
    if(operator == '*' || operator == '/'){
      let percent = new PercentageCommand (1, rightOperand);
      setRightOperand(percent.execute());
      return percent.execute();
    }
}

export const pressPercentage = (e) => {
    e.preventDefault();
    if (e.target.value == '%'){
        clearNumbersDisplay();
        setRightOperand(countPercentage());
        updateDisplay(state.rightOperand, numbersDisplay);
    }
};