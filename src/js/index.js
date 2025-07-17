import { showcaseValueOnDisplay } from './display/display.js';
import { defineLeftOperand, defineRightOperand, doOperations } from './operators/operators.js';


import '../styles/style.scss';

document.addEventListener('DOMContentLoaded', e => {
  let calculatorBtns = document.querySelector('.buttons');
  calculatorBtns.addEventListener('click', showcaseValueOnDisplay);
});
