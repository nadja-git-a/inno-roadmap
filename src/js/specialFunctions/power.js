import { clearCalculationsDisplay, clearNumbersDisplay, updateDisplay } from '../display/display.js';
import {
  state,
  setLeftOperand,
  setRightOperand,
  setOperator,
} from '../operators/operands.js';
import { PowerCommand } from '../operators/operators-commands.js';
import { makeCalculations } from '../operators/operators.js';
import { commandManager } from './undo.js';

export const pressPower = e => {
  e.preventDefault();

  let num = document.querySelector('#numbersDisplay').innerHTML;

  if (e.target.value == 'squared') {
    updateDisplay(' power of 2', calculationsDisplay);
    num = extractSquare(num);
    clearNumbersDisplay();
    updateDisplay(num, numbersDisplay);
    if (state.leftOperand == null || !state.rightOperand) {
      setLeftOperand(num);
      console.log('state.leftOperand square: ' + state.leftOperand);
    } else {
      setRightOperand(num);
      console.log('state.rightOperand square: ' + state.rightOperand);
    }

    console.log(num);
  }

  if (e.target.value == 'cubed') {
    updateDisplay(' power of 3', calculationsDisplay);
    num = extractCube(num);
    clearNumbersDisplay();
    updateDisplay(num, numbersDisplay);
    if (state.leftOperand == null || !state.rightOperand) {
      setLeftOperand(num);
      console.log('state.leftOperand cube: ' + state.leftOperand);
    } else {
      setRightOperand(num);
      console.log('state.rightOperand cube: ' + state.rightOperand);
    }
  }

  if (e.target.value == 'powerOfY') {
    if(state.operator){
      setLeftOperand(makeCalculations());
      state.saveHistory();
    } else {
      state.leftOperand = num;
    }
    updateDisplay(' power of ', calculationsDisplay);
    updateDisplay(num, numbersDisplay);
    setOperator('^');
    clearNumbersDisplay();
  }

  if (e.target.value == 'powerOfX') {
    if(state.operator){
      state.saveHistory();
      setLeftOperand(makeCalculations());
    } 
    num = state.leftOperand;
    console.log(num, state.leftOperand + " 10 power of x num");
    num = extractPowerOfX(num);
    console.log(num, state.leftOperand + " 10 power of x num"); 
    
    clearCalculationsDisplay();
    updateDisplay(` 10 in power of ${num}`, calculationsDisplay);
   
    clearNumbersDisplay();
    updateDisplay(num, numbersDisplay);

    setLeftOperand(num);
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
