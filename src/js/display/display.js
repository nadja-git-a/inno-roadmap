import { setOperator, state } from '../operators/operands.js';
import { commandManager } from '../specialFunctions/undo.js';

let numbersDisplay = document.querySelector('#numbersDisplay');
let calculationsDisplay = document.querySelector('#calculationsDisplay');
let leftOperandDisplay = document.querySelector('#leftOperand');
let rightOperandDisplay = document.querySelector('#rightOperand');
let operatorDisplay = document.querySelector('#operator');

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


export const updateDisplay = (value, targetDisplay) => {
  if(targetDisplay.innerHTML > 999999999999999){
    alert('number is too large');
    clearLeftOperandDisplay();
    clearRightOperandDisplay();
    clearOperatorDisplay();
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

  if (!isNaN(value) || value == '.' || value == '-') {
    updateDisplay(value, numbersDisplay);
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
    updateDisplay(value, numbersDisplay);
    updateLeftOperandDisplay();
    updateRightOperandDisplay();
    updateOperatorDisplay();
  }
};
