import {
  clearRightOperandDisplay,
  clearOperatorDisplay,
  updateLeftOperandDisplay,
  updateRightOperandDisplay,
  updateOperatorDisplay,
  clearNumbersDisplay,
  updateDisplay,
} from '../display/display.js';
import { captureNumber } from '../numbers/numbers.js';
import { makeCalculations } from './operators.js';

export class OperationState {
  static #instance = null;
  constructor() {
    if (OperationState.#instance) {
      return OperationState.#instance;
    }

    this.leftOperand = null;
    this.rightOperand = null;
    this.operator = null;
    this.history = [];

    OperationState.#instance = this;
  }

  setLeftOperand(value) {
    this.leftOperand = Number(value);
  }

  setRightOperand(value) {
    this.rightOperand = value;
  }

  setOperator(value) {
    this.operator = value;
  }

  saveHistory() {
    if (
      this.leftOperand !== null &&
      this.rightOperand !== null &&
      this.operator !== null
    ) {
      this.history.push({
        leftOperand: this.leftOperand,
        rightOperand: this.rightOperand,
        operator: this.operator,
      });
    }
  }

  cleanHistory() {
    this.history = [];
  }

  resetVariables() {
    this.leftOperand = null;
    this.rightOperand = null;
    this.operator = null;
  }
}

export const state = new OperationState();
export let setLeftOperand = state.setLeftOperand.bind(state);
export let setRightOperand = state.setRightOperand.bind(state);
export let setOperator = state.setOperator.bind(state);

export const defineOperand = e => {
  e.preventDefault();

  let value = captureNumber();

  if (e.target.value == '-' && state.leftOperand == null) {
    value += '-';
    state.leftOperand = value;
  } else {
    if (e.target.classList.contains('number-button-color')) {
      if (state.operator == null) {
        setLeftOperand(value);
        updateLeftOperandDisplay();
      } else if (state.leftOperand && state.operator) {
        setRightOperand(value);
        updateRightOperandDisplay();

        clearNumbersDisplay();
        updateDisplay(value);
      }
    }
    if (
      e.target.classList.contains('operator-button-color') &&
      e.target.value !== '='
    ) {
      if (state.rightOperand) {
        state.saveHistory();
        setLeftOperand(makeCalculations());
        updateLeftOperandDisplay();
        clearRightOperandDisplay();
        clearOperatorDisplay();
      }
      setOperator(e.target.value);
      updateOperatorDisplay();

      clearNumbersDisplay();
    }
  }
};
