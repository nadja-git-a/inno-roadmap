import { state } from '../operators/operands.js';
import { commandManager } from '../specialFunctions/undo.js';

let numbersDisplay = document.querySelector('#numbersDisplay');
let calculationsDisplay = document.querySelector('#calculationsDisplay');

export const clearNumbersDisplay = () => {
  numbersDisplay.innerHTML = '';
};

export const clearCalculationsDisplay = () => {
  calculationsDisplay.innerHTML = '';
};

export const updateDisplay = (value, targetDisplay) => {
  if(targetDisplay.innerHTML > 999999999999999){
    alert('number is too large');
    clearCalculationsDisplay();
    clearNumbersDisplay();
  } else {
    if (targetDisplay.innerHTML == '0') {
    if (value == '.') {
      targetDisplay.innerHTML += value;
    } else {
      targetDisplay.innerHTML = '';
      targetDisplay.innerHTML += value;
    }
  } else {
    targetDisplay.innerHTML += value;
  }
  }
};

export const showcaseValueOnDisplay = e => {
  e.preventDefault();

  let value = e.target.value;
  updateDisplay(value, calculationsDisplay);

  if (!isNaN(value) || value == '.' || value == '-') {
    updateDisplay(value, numbersDisplay);
  }

  if (value == 'AC') {
    clearNumbersDisplay();
    clearCalculationsDisplay();
    value = 0;
    state.resetVariables();
    state.cleanHistory();
    commandManager.clearHistory();
    updateDisplay(value, numbersDisplay);
    updateDisplay(value, calculationsDisplay);
    console.log('all clean');
    console.log(state);
  }
};
