import { captureNumber } from '../numbers/numbers';

// const displayState = {
//     shouldCleanDisplay: true,
// };

// const manageDisplay = (value) => {
//     let display = document.querySelector('#numbersDisplay');

//     if(displayState.shouldCleanDisplay || display.innerHTML == '0') {
//         display.innerHTML = '';
//         display.innerHTML = value;
//         displayState.shouldCleanDisplay = false;
//     } else {
//         display.innerHTML += value;
//         let num = captureNumber();
//         console.log(num);

//     }
// };

export const clearDisplay = () => {
  let display = document.querySelector('#numbersDisplay');
  display.innerHTML = '';
};

export const updateDisplay = value => {
  let display = document.querySelector('#numbersDisplay');

  if (display.innerHTML == '0') {
    display.innerHTML = '';
    display.innerHTML += value;
  } else {
    display.innerHTML += value;
  }
};

export const showcaseValueOnDisplay = e => {
  e.preventDefault();

  let value = e.target.value;
  if (!isNaN(value)) {
    updateDisplay(value);
  }

  if (value == 'AC') {
    clearDisplay();
    value = 0;
    updateDisplay(value);
  }
};
