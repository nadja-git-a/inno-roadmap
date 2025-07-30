import {
  clearNumbersDisplay,
  updateDisplay,
  updateLeftOperandDisplay,
  updateRightOperandDisplay,
  updateOperatorDisplay,
  clearOperatorDisplay,
  clearRightOperandDisplay,
} from '../display/display.js';
import {
  state,
  setLeftOperand,
  setRightOperand,
  setOperator,
} from '../operators/operands.js';
import { RootCommand } from '../operators/operatorsCommands.js';
import { makeCalculations } from '../operators/operators.js';
import { commandManager } from './undo.js';
import { captureNumber } from '../numbers/numbers.js';

export const pressRoots = e => {
  e.preventDefault();

  let num = captureNumber();

  if (e.target.value == 'squareRoot') {
    num = extractSquare(num);
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

  if (e.target.value == 'cubeRoot') {
    num = extractCube(num);
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

  if (e.target.value == 'yRoot') {
    if (state.operator) {
      setLeftOperand(makeCalculations());
      updateLeftOperandDisplay();
      clearRightOperandDisplay();
      clearOperatorDisplay();
      state.saveHistory();
    } else {
      state.leftOperand = num;
    }

    num = '';
    updateDisplay(num);
    setOperator('√');
    updateOperatorDisplay();
    clearNumbersDisplay();
  }
};

const extractSquare = num => {
  const command = new RootCommand(num, 2);
  let root = command.execute();
  commandManager.remember(command);
  return root;
};

const extractCube = num => {
  const command = new RootCommand(num, 3);
  let root = command.execute();
  commandManager.remember(command);
  return root;
};

export const extractYRoot = num => {
  const command = new RootCommand(num, state.rightOperand);
  let root = command.execute();
  commandManager.remember(command);
  clearNumbersDisplay();
  updateDisplay(root);
  return root;
};
