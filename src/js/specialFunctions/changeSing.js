import {
  updateDisplay,
  updateLeftOperandDisplay,
  updateRightOperandDisplay,
} from '../display/display.js';
import { clearNumbersDisplay } from '../display/display.js';
import { captureNumber } from '../numbers/numbers.js';
import {
  state,
  setLeftOperand,
  setRightOperand,
} from '../operators/operands.js';
import { ChangeSignCommand } from '../operators/operatorsCommands.js';
import { commandManager } from './undo.js';

export const pressChangeSign = e => {
  e.preventDefault();

  if (e.target.id == 'changeSign') {
    const command = new ChangeSignCommand(captureNumber());
    let num = command.execute();
    commandManager.remember(command);
    clearNumbersDisplay();
    updateDisplay(num);
    if (state.leftOperand == null || !state.rightOperand) {
      setLeftOperand(num);
      updateLeftOperandDisplay();
    } else {
      setRightOperand(num);
      updateRightOperandDisplay();
    }
  }
};
