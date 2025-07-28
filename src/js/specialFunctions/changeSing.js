import { updateDisplay, updateLeftOperandDisplay, updateRightOperandDisplay } from '../display/display.js';
import { clearNumbersDisplay } from '../display/display.js';
import {
  state,
  setLeftOperand,
  setRightOperand,
} from '../operators/operands.js';
import { ChangeSignCommand } from '../operators/operatorsCommands.js';
import { commandManager } from './undo.js';

export const pressChangeSign = e => {
  e.preventDefault();
  let numbersDisplay = document.querySelector('#numbersDisplay');
  if (e.target.id == 'changeSign') {
    let num = new ChangeSignCommand(numbersDisplay.textContent).execute();
    commandManager.remember(new ChangeSignCommand(numbersDisplay.textContent));
    clearNumbersDisplay();
    updateDisplay(num, numbersDisplay);
    if (state.leftOperand == null || !state.rightOperand) {
      setLeftOperand(num);
      updateLeftOperandDisplay();
    } else {
      setRightOperand(num);
      updateRightOperandDisplay();
    }
  }
};
