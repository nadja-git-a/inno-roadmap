import { updateDisplay, updateLeftOperandDisplay, updateRightOperandDisplay,     clearLeftOperandDisplay,
  clearRightOperandDisplay,
  clearOperatorDisplay, updateOperatorDisplay } from '../display/display.js';
import { state, setRightOperand, setOperator } from './operands.js';
import { extractPowerOfY } from '../specialFunctions/power.js';
import { makeCalculations } from './operators.js';
import { extractYRoot } from '../specialFunctions/roots.js';

export const pressEquals = e => {
  e.preventDefault;
  if(state.leftOperand !== null && state.rightOperand !== null && state.operator!== null ){
if (e.target.id == 'equals' && state.operator == '^') {
    extractPowerOfY(state.leftOperand);
    state.saveHistory();
  } else if (e.target.id == 'equals' && state.operator == '√') {
    extractYRoot(state.leftOperand);
    state.saveHistory();
  } else if (e.target.id == 'equals') {
    clearLeftOperandDisplay();
    clearRightOperandDisplay();
    clearOperatorDisplay();
    state.saveHistory();
    let value = makeCalculations();
    updateDisplay(value, numbersDisplay);
    clearLeftOperandDisplay();
    updateLeftOperandDisplay();
    updateRightOperandDisplay();
    updateOperatorDisplay();
    setRightOperand(null);
    setOperator(null);
  }

  clearRightOperandDisplay();
  clearOperatorDisplay();
  updateLeftOperandDisplay();
  } else {
    alert('enter numbers and operator')
     (state);
  } 
};
