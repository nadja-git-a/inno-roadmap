import { updateDisplay } from '../display/display.js';
import { clearNumbersDisplay } from '../display/display.js';
import {
  state,
  setLeftOperand,
  setRightOperand,
} from '../operators/operands.js';
import { ChangeSignCommand } from '../operators/operators-commands.js';
import { commandManager } from './undo.js';

export const pressChangeSign = e => {
  e.preventDefault();
  let numbersDisplay = document.querySelector('#numbersDisplay');
  if (e.target.id == 'changeSign') {
    console.log(numbersDisplay.textContent);
    let num = new ChangeSignCommand(numbersDisplay.textContent).execute();
    commandManager.remember(new ChangeSignCommand(numbersDisplay.textContent));
    clearNumbersDisplay();
    updateDisplay(num, numbersDisplay);
    if (state.leftOperand == null || !state.rightOperand) {
      setLeftOperand(num);
      console.log('state.leftOperand change sign: ' + state.leftOperand);
    } else {
      setRightOperand(num);
      console.log('state.rightOperand change sign: ' + state.rightOperand);
    }
  }
};
