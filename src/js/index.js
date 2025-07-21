import { showcaseValueOnDisplay } from './display/display.js';
import { pressEquals, defineOperand } from './operators/operands.js';

import '../styles/style.scss';
import { pressPercentage } from './operators/percentage.js';
import { pressChangeSign } from './operators/changeSing.js';
import { pressRoots } from './operators/roots.js';
import { pressPower } from './operators/power.js';

document.addEventListener('DOMContentLoaded', e => {
  let calculatorBtns = document.querySelector('.buttons');
  calculatorBtns.addEventListener('click', showcaseValueOnDisplay);
  calculatorBtns.addEventListener('click', defineOperand);
  calculatorBtns.addEventListener('click', pressEquals);
  calculatorBtns.addEventListener('click', pressPercentage);
  calculatorBtns.addEventListener('click', pressChangeSign);
  calculatorBtns.addEventListener('click', pressRoots);
  calculatorBtns.addEventListener('click', pressPower);
});
