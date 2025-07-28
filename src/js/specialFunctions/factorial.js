import { clearNumbersDisplay, updateDisplay, updateLeftOperandDisplay, updateRightOperandDisplay } from '../display/display.js';
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
  let num = document.querySelector('#numbersDisplay').innerHTML;

  const command = new FactorialCommand(num);
  let result = command.execute();

  commandManager.remember(command); 

  clearNumbersDisplay();
  updateDisplay(result, numbersDisplay);
  // updateDisplay('!', calculationsDisplay)

  if (state.leftOperand == null || !state.rightOperand) {
    setLeftOperand(result);
    updateLeftOperandDisplay();
  } else {
    setRightOperand(result);
    updateRightOperandDisplay();
  }
  }
};
