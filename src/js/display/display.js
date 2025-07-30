import { state } from '../operators/operands.js';
import { commandManager } from '../specialFunctions/undo.js';

const numbersDisplay = document.querySelector('#numbersDisplay');
const leftOperandDisplay = document.querySelector('#leftOperand');
const rightOperandDisplay = document.querySelector('#rightOperand');
const operatorDisplay = document.querySelector('#operator');

export const clearNumbersDisplay = () => {
  numbersDisplay.innerHTML = '';
};

export const clearLeftOperandDisplay = () => {
  leftOperandDisplay.innerHTML = '';
};

export const clearRightOperandDisplay = () => {
  rightOperandDisplay.innerHTML = '';
};

export const clearOperatorDisplay = () => {
  operatorDisplay.innerHTML = '';
};

export const updateLeftOperandDisplay = () => {
  leftOperandDisplay.innerHTML = state.leftOperand;
};

export const updateRightOperandDisplay = () => {
  rightOperandDisplay.innerHTML = state.rightOperand;
};

export const updateOperatorDisplay = () => {
  operatorDisplay.innerHTML = state.operator;
};

const MAX_DISPLAY_VALUE = 999999999999;

export const updateDisplay = value => {
  if (
    numbersDisplay.innerHTML > MAX_DISPLAY_VALUE ||
    value > MAX_DISPLAY_VALUE
  ) {
    alert('number is too large');
    clearLeftOperandDisplay();
    clearRightOperandDisplay();
    clearOperatorDisplay();
    clearNumbersDisplay();
  } else {
    if (numbersDisplay.innerHTML == '0') {
      if (value == '.') {
        numbersDisplay.innerHTML += value;
      } else {
        numbersDisplay.innerHTML = '';
        numbersDisplay.innerHTML += value;
      }
    } else {
      numbersDisplay.innerHTML += value;
    }
  }
};

export const showcaseValueOnDisplay = e => {
  e.preventDefault();

  let value = e.target.value;

  if (!isNaN(value) || value == '.' || value == '-') {
    updateDisplay(value);
  }

  if (value == 'AC') {
    clearNumbersDisplay();
    clearLeftOperandDisplay();
    clearRightOperandDisplay();
    clearOperatorDisplay();
    value = 0;
    state.resetVariables();
    state.cleanHistory();
    commandManager.clearHistory();
    updateDisplay(value);
    updateLeftOperandDisplay();
    updateRightOperandDisplay();
    updateOperatorDisplay();
  }
};
