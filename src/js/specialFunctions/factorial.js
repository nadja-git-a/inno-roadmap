import { clearNumbersDisplay, updateDisplay } from '../display/display.js';
import {
  state,
  setLeftOperand,
  setRightOperand,
} from '../operators/operands.js';
import { FactorialCommand } from '../operators/operators-commands.js';
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
  updateDisplay('!', calculationsDisplay)

  if (state.leftOperand == null || !state.rightOperand) {
    setLeftOperand(result);
    console.log('state.leftOperand factorial: ' + state.leftOperand);
  } else {
    setRightOperand(result);
    console.log('state.rightOperand factorial: ' + state.rightOperand);
  }
  }
};
