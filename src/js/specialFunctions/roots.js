import { clearNumbersDisplay, updateDisplay, updateLeftOperandDisplay, updateRightOperandDisplay, updateOperatorDisplay, clearOperatorDisplay, clearRightOperandDisplay } from '../display/display.js';
import {
  state,
  setLeftOperand,
  setRightOperand,
  setOperator,
} from '../operators/operands.js';
import { RootCommand } from '../operators/operatorsCommands.js';
import { makeCalculations } from '../operators/operators.js';
import { commandManager } from './undo.js';


export const pressRoots = e => {
  e.preventDefault();

  let num = document.querySelector('#numbersDisplay').innerHTML;

  if (e.target.value == 'squareRoot') {
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

  if (e.target.value == 'cubeRoot') {
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

  if (e.target.value == 'yRoot') {
    if(state.operator){
      setLeftOperand(makeCalculations());
      updateLeftOperandDisplay();
      clearRightOperandDisplay();
      clearOperatorDisplay();
      state.saveHistory();
    } else {
      state.leftOperand = num;
    }
   
    num = '';
    updateDisplay(num, numbersDisplay); 
    // updateDisplay(' √ in power of ', calculationsDisplay);
    setOperator('√');
    updateOperatorDisplay();
    clearNumbersDisplay();
  }
};

const extractSquare = num => {
  let root = new RootCommand(num, 2).execute();
  commandManager.remember(new RootCommand(num, 2));
  return root;
};

const extractCube = num => {
  let root = new RootCommand(num, 3).execute();
  commandManager.remember(new RootCommand(num, 3));
  return root;
};

export const extractYRoot = num => {
  let root = new RootCommand(num, state.rightOperand).execute();
  commandManager.remember(new RootCommand(num, state.rightOperand));
  clearNumbersDisplay();
  updateDisplay(root, numbersDisplay);
  return root;
};
