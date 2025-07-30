import {
  clearLeftOperandDisplay,
  clearNumbersDisplay,
  clearOperatorDisplay,
  clearRightOperandDisplay,
  updateDisplay,
  updateLeftOperandDisplay,
  updateOperatorDisplay,
  updateRightOperandDisplay,
} from '../display/display.js';
import {
  state,
  setLeftOperand,
  setRightOperand,
  setOperator,
} from '../operators/operands.js';
import { PowerCommand } from '../operators/operatorsCommands.js';
import { makeCalculations } from '../operators/operators.js';
import { commandManager } from './undo.js';
import { captureNumber } from '../numbers/numbers.js';

export const pressPower = e => {
  e.preventDefault();
  let num = captureNumber();
  const MAX_POWER_OF_X = 17;
  const MAX_POWER_OF_Y = 999999999999;

  if (e.target.value == 'squared') {
    num = extractSquare(num);
    if (num >= MAX_POWER_OF_Y) {
      alert('number is too large power');
      clearNumbersDisplay();
      clearRightOperandDisplay();
      clearLeftOperandDisplay();
      clearOperatorDisplay();
    } else {
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
  }

  if (e.target.value == 'cubed') {
    num = extractCube(num);
    if (num >= MAX_POWER_OF_Y) {
      alert('number is too large power');
      clearNumbersDisplay();
      clearRightOperandDisplay();
      clearLeftOperandDisplay();
      clearOperatorDisplay();
    } else {
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
  }

  if (e.target.value == 'powerOfY') {
    if (state.operator) {
      setLeftOperand(makeCalculations());
      updateLeftOperandDisplay();
      clearRightOperandDisplay();
      clearOperatorDisplay();
      state.saveHistory();
    } else {
      state.leftOperand = num;
    }
    updateDisplay(num);
    setOperator('^');
    updateOperatorDisplay();
    clearNumbersDisplay();
  }

  if (e.target.value == 'powerOfX') {
    if (state.operator && state.leftOperand && state.rightOperand) {
      setLeftOperand(makeCalculations());
      updateLeftOperandDisplay();
      clearRightOperandDisplay();
      clearOperatorDisplay();
      state.saveHistory();
    }
    num = state.leftOperand;

    if (num >= MAX_POWER_OF_X) {
      alert('number is too large power');
      clearNumbersDisplay();
      clearRightOperandDisplay();
      clearLeftOperandDisplay();
      clearOperatorDisplay();
    } else {
      num = extractPowerOfX(num);
      clearNumbersDisplay();
      updateDisplay(num);

      setLeftOperand(num);
      updateLeftOperandDisplay();
    }
  }
};

const extractSquare = num => {
  const command = new PowerCommand(num, 2);
  let power = command.execute();
  commandManager.remember(command);
  return power;
};

const extractCube = num => {
  const command = new PowerCommand(num, 3);
  let power = command.execute();
  commandManager.remember(command);
  return power;
};

export const extractPowerOfY = num => {
  const command = new PowerCommand(num, state.rightOperand);
  let power = command.execute();
  commandManager.remember(command);
  clearNumbersDisplay();
  updateDisplay(power);
  return power;
};

export const extractPowerOfX = num => {
  const command = new PowerCommand(10, num, 'powerOfX');
  let power = command.execute();
  commandManager.remember(command);
  clearNumbersDisplay();
  updateDisplay(power);
  return power;
};
