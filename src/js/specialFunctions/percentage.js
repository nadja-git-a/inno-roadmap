import {
  clearNumbersDisplay,
  clearLeftOperandDisplay,
  clearRightOperandDisplay,
  clearOperatorDisplay,
  updateDisplay,
  updateLeftOperandDisplay,
} from '../display/display.js';
import {
  state,
  setRightOperand,
  setLeftOperand,
} from '../operators/operands.js';
import { PercentageCommand } from '../operators/operatorsCommands.js';
import { commandManager } from './undo.js';

const countPercentage = () => {
  let operator = state.operator;
  let leftOperand = state.leftOperand;
  let rightOperand = state.rightOperand;

  state.saveHistory();

  if (!operator) {
    const command = new PercentageCommand(1, leftOperand);
    let percent = command.execute();
    const MIN_PERCENT = 0.000001;
    commandManager.remember(command);
    if (percent < MIN_PERCENT) {
      alert('number is too long');
      clearNumbersDisplay();
      clearRightOperandDisplay();
      clearLeftOperandDisplay();
      clearOperatorDisplay();
    } else {
      setLeftOperand(percent);
      updateLeftOperandDisplay();
      updateDisplay(percent);
      return percent;
    }
  }

  if (operator == '+' || operator == '-') {
    const command = new PercentageCommand(leftOperand, rightOperand);
    let percent = command;
    commandManager.remember(command);
    setRightOperand(percent.execute());
    updateDisplay(rightOperand);
    return percent.execute();
  }

  if (operator == '*' || operator == '/') {
    const command = new PercentageCommand(1, rightOperand);
    let percent = command;
    commandManager.remember(command);
    setRightOperand(percent.execute());
    updateDisplay(rightOperand);
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
