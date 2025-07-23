import { clearNumbersDisplay, updateDisplay } from '../display/display.js';
import {
  state,
  setLeftOperand,
  setRightOperand,
} from '../operators/operands.js';

export class CommandManager {
  constructor() {
    this.history = [];
  }

  remember(command) {
    const result = command;
    this.history.push(command);
    return result;
  }

  undo() {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      return lastCommand.undo();
    }
    return null;
  }

  clearHistory() {
    this.history = [];
  }
}

export const commandManager = new CommandManager();

export const pressUndo = e => {
  e.preventDefault();
  let numbersDisplay = document.querySelector('#numbersDisplay');

  if (e.target.value == 'undo') {
    clearNumbersDisplay();
    let num = commandManager.undo();
    updateDisplay(num, numbersDisplay);
    console.log('undo');
    console.log(commandManager.history);

    if (state.leftOperand == null || !state.rightOperand) {
      setLeftOperand(num);
      console.log('state.leftOperand cube: ' + state.leftOperand);
    } else {
      setRightOperand(num);
      console.log('state.rightOperand cube: ' + state.rightOperand);
    }
  }
};
