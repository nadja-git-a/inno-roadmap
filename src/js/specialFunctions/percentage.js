import { clearNumbersDisplay, updateDisplay, updateLeftOperandDisplay } from '../display/display.js';
import { state, setRightOperand, setLeftOperand } from '../operators/operands.js';
import { PercentageCommand } from '../operators/operatorsCommands.js';
import { commandManager } from './undo.js';

const countPercentage = () => {
  let operator = state.operator;
  let leftOperand = state.leftOperand;
  let rightOperand = state.rightOperand;

  state.saveHistory();

  if(!operator){
    let percent = new PercentageCommand(1, leftOperand);
    commandManager.remember(new PercentageCommand(1, leftOperand));
    setLeftOperand(percent.execute());
    updateLeftOperandDisplay();
    updateDisplay(percent.execute(), numbersDisplay);
    return percent.execute();
  }

  if (operator == '+' || operator == '-') {
    let percent = new PercentageCommand(leftOperand, rightOperand);
    commandManager.remember(new PercentageCommand(leftOperand, rightOperand));
    setRightOperand(percent.execute());
    updateDisplay(rightOperand, numbersDisplay);
    return percent.execute();
  }

  if (operator == '*' || operator == '/') {
    let percent = new PercentageCommand(1, rightOperand);
    commandManager.remember(new PercentageCommand(1, rightOperand));
    setRightOperand(percent.execute());
    updateDisplay(rightOperand, numbersDisplay);
    return percent.execute();
  }
};

export const pressPercentage = e => {
  e.preventDefault();
  if (e.target.value == '%') {
    clearNumbersDisplay();
    setRightOperand(countPercentage());
  }
};
