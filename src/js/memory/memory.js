import { clearNumbersDisplay, updateDisplay } from '../display/display.js';
import { state } from '../operators/operands.js';

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
    console.log('memory clear' + memoryCard.memory);
  }
  if (e.target.value == 'mr') {
    clearNumbersDisplay();
    memoryCard.memoryRecall();
    console.log('memory recall' + memoryCard.memory);
    if (state.leftOperand && state.operator) {
      state.setRightOperand(memoryCard.memory);
    } else {
      state.setLeftOperand(memoryCard.memory);
    }
  }
  if (e.target.value == 'm-') {
    memoryCard.memorySubtract();
    console.log('memory-' + memoryCard.memory);
  }
  if (e.target.value == 'm+') {
    memoryCard.memoryAdd();
    console.log('memory+' + memoryCard.memory);
  }
};
