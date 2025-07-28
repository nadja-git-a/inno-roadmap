import {     clearLeftOperandDisplay,
  clearRightOperandDisplay,
  clearOperatorDisplay, clearNumbersDisplay, updateDisplay, updateLeftOperandDisplay, updateRightOperandDisplay  } from '../display/display.js';
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
    if(num == null){
      alert('nothing to undo');
      num = 0;
    }
    
    updateDisplay(num, numbersDisplay);
    updateLeftOperandDisplay();

    if (state.leftOperand == null || !state.rightOperand) {
      setLeftOperand(num);
      updateLeftOperandDisplay();
    } else {
      setRightOperand(num);
      updateRightOperandDisplay();
    }
    clearLeftOperandDisplay();
    clearRightOperandDisplay();
    clearOperatorDisplay();
  }
};
