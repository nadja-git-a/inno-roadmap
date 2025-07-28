import { clearNumbersDisplay, clearOperatorDisplay, clearRightOperandDisplay, updateDisplay, updateLeftOperandDisplay, updateOperatorDisplay, updateRightOperandDisplay } from '../display/display.js';
import {
  state,
  setLeftOperand,
  setRightOperand,
  setOperator,
} from '../operators/operands.js';
import { PowerCommand } from '../operators/operatorsCommands.js';
import { makeCalculations } from '../operators/operators.js';
import { commandManager } from './undo.js';

export const pressPower = e => {
  e.preventDefault();

  let num = document.querySelector('#numbersDisplay').innerHTML;

  if (e.target.value == 'squared') {
    // updateDisplay(' power of 2', calculationsDisplay);
    num = extractSquare(num);
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

  if (e.target.value == 'cubed') {
    // updateDisplay(' power of 3', calculationsDisplay);
    num = extractCube(num);
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

  if (e.target.value == 'powerOfY') {
    if(state.operator){
      setLeftOperand(makeCalculations());
      updateLeftOperandDisplay();
      clearRightOperandDisplay();
      clearOperatorDisplay();
      state.saveHistory();
    } else {
      state.leftOperand = num;
    }
    // updateDisplay(' power of ', calculationsDisplay);
    updateDisplay(num, numbersDisplay);
    setOperator('^');
    updateOperatorDisplay();
    clearNumbersDisplay();
  }

  if (e.target.value == 'powerOfX') {
    if(state.operator && state.leftOperand && state.rightOperand){
      setLeftOperand(makeCalculations());
      updateLeftOperandDisplay();
      clearRightOperandDisplay();
      clearOperatorDisplay();
      state.saveHistory();
    }
    num = state.leftOperand;
    num = extractPowerOfX(num);
    
    // clearCalculationsDisplay();
    // updateDisplay(` 10 in power of ${num}`, calculationsDisplay);
   
    clearNumbersDisplay();
    updateDisplay(num, numbersDisplay);

    setLeftOperand(num);
    updateLeftOperandDisplay();
    setRightOperand(0);
    updateRightOperandDisplay();
  }
};

const extractSquare = num => {
  let power = new PowerCommand(num, 2).execute();
  commandManager.remember(new PowerCommand(num, 2));
  return power;
};

const extractCube = num => {
  let power = new PowerCommand(num, 3).execute();
  commandManager.remember(new PowerCommand(num, 3));
  return power;
};

export const extractPowerOfY = num => {
  let power = new PowerCommand(num, state.rightOperand).execute();
  commandManager.remember(new PowerCommand(num, state.rightOperand));
  clearNumbersDisplay();
  updateDisplay(power, numbersDisplay);
  return power;
};

export const extractPowerOfX = num => {
  if (num > 308) {
    alert('number is too large');
    return Infinity;
  } else {
    let power = new PowerCommand(10, num).execute();
    commandManager.remember(new PowerCommand(10, num, 'powerOfX'));
    clearNumbersDisplay();
    updateDisplay(power, numbersDisplay);
    return power;
  }

};
