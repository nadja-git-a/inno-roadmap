import {
  clearNumbersDisplay,
  updateDisplay,
  clearLeftOperandDisplay,
  clearRightOperandDisplay,
  updateLeftOperandDisplay,
  updateRightOperandDisplay,
  clearOperatorDisplay,
} from '../display/display.js';
import { captureNumber } from '../numbers/numbers.js';
import {
  state,
  setLeftOperand,
  setRightOperand,
} from '../operators/operands.js';
import { FactorialCommand } from '../operators/operatorsCommands.js';
import { commandManager } from './undo.js';

export const pressFactorial = e => {
  e.preventDefault();

  if (e.target.value == 'factorial') {
    let num = captureNumber();
    const MAX_FACTORIAL = 999999999999;

    const command = new FactorialCommand(num);
    let result = command.execute();

    commandManager.remember(command);

    clearNumbersDisplay();
    updateDisplay(result);
    if (result > MAX_FACTORIAL) {
      clearNumbersDisplay();
      clearRightOperandDisplay();
      clearLeftOperandDisplay();
      clearOperatorDisplay();
    } else {
      if (state.leftOperand == null || !state.rightOperand) {
        setLeftOperand(result);
        updateLeftOperandDisplay();
      } else {
        setRightOperand(result);
        updateRightOperandDisplay();
      }
    }
  }
};
