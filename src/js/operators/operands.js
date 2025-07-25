import { clearNumbersDisplay, updateDisplay } from '../display/display.js';
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

  let value = document.querySelector('#numbersDisplay').innerHTML;

  if (e.target.value == '-' && state.leftOperand == null) {
    value += '-';
    state.leftOperand = value;
  } else {
    if (e.target.classList.contains('number-button-color')) {
      if (state.operator == null) {
        setLeftOperand(value);
        console.log('state.leftOperand:' + state.leftOperand);
      } else if (state.leftOperand && state.operator) {
        setRightOperand(value);
        console.log('state.rightOperand: ' + state.rightOperand);
        clearNumbersDisplay();
        updateDisplay(value, numbersDisplay);
      }
    }

    //placement

    if (
      e.target.classList.contains('operator-button-color') &&
      e.target.value !== '='
    ) {
      if (state.rightOperand) {
        state.saveHistory();
        setLeftOperand(makeCalculations());
        console.log('new left operand: ' + state.leftOperand);
        console.log(state);
      }
      setOperator(e.target.value);
      console.log('operator' + state.operator);
      clearNumbersDisplay();
    }

    
  }
};
