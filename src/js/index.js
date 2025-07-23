import '../styles/style.scss';
import {
  MemoryButton,
  NumberButton,
  OperatorButton,
  SpecialFunctionButton,
} from './buttons/buttons.js';

document.addEventListener('DOMContentLoaded', e => {
  const display = document.querySelector('#numbersDisplay');
  const buttons = document.querySelectorAll('.buttons button');

  buttons.forEach(btn => {
    const type = btn.dataset.type;

    switch (type) {
      case 'number':
        new NumberButton(btn, display);
        break;
      case 'operator':
        new OperatorButton(btn, display);
        break;
      case 'special':
        new SpecialFunctionButton(btn, display);
        break;
      case 'memory':
        new MemoryButton(btn, display);
    }
  });
});
