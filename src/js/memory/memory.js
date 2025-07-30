import {
  clearNumbersDisplay,
  updateLeftOperandDisplay,
  updateRightOperandDisplay,
} from '../display/display.js';
import {
  state,
  setRightOperand,
  setLeftOperand,
} from '../operators/operands.js';

let numbersDisplay = document.querySelector('#numbersDisplay');

class Memory {
  constructor() {
    this.memory = 0;
  }

  memoryClear() {
    this.memory = 0;
  }

  memoryRecall() {
    return (numbersDisplay.innerHTML = this.memory.toString());
  }

  memoryAdd() {
    const current = parseFloat(numbersDisplay.innerHTML) || 0;
    this.memory += current;
  }

  memorySubtract() {
    const current = parseFloat(numbersDisplay.innerHTML) || 0;
    this.memory -= current;
  }
}

const memoryCard = new Memory();

export const pressMemory = e => {
  e.preventDefault();

  if (e.target.value == 'mc') {
    memoryCard.memoryClear();
  }
  if (e.target.value == 'mr') {
    clearNumbersDisplay();
    memoryCard.memoryRecall();

    if (state.leftOperand && state.operator) {
      setRightOperand(memoryCard.memory);
      updateRightOperandDisplay();
    } else {
      setLeftOperand(memoryCard.memory);
      updateLeftOperandDisplay();
    }
  }
  if (e.target.value == 'm-') {
    memoryCard.memorySubtract();
  }
  if (e.target.value == 'm+') {
    memoryCard.memoryAdd();
  }
};
