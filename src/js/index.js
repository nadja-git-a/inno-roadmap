import '../styles/style.scss';
import {
  MemoryButton,
  NumberButton,
  OperatorButton,
  SpecialFunctionButton,
  ThemeButton,
} from './buttons/buttons.js';

document.addEventListener('DOMContentLoaded', e => {
  const buttons = document.querySelectorAll('[data-type]');

  buttons.forEach(btn => {
    const type = btn.dataset.type;

    switch (type) {
      case 'number':
        new NumberButton(btn);
        break;
      case 'operator':
        new OperatorButton(btn);
        break;
      case 'special':
        new SpecialFunctionButton(btn);
        break;
      case 'memory':
        new MemoryButton(btn);
        break;
      case 'themes':
        new ThemeButton(btn);
        break;
    }
  });
});
