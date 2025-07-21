import { clearCalculationsDisplay, clearNumbersDisplay, updateDisplay } from '../display/display.js';
import { makeCalculations } from './operators.js';

export const operationState = {
  leftOperand: null,
  rightOperand: null,
  operator:null,
};

export const defineOperand = (e) => {
    e.preventDefault();

    let value = document.querySelector('#numbersDisplay').innerHTML;
    
    

    if(e.target.classList.contains('number-button-color')){
        
        if (operationState.operator == null) {
        operationState.leftOperand = value; 
        console.log('operationState.leftOperand  '+ operationState.leftOperand);
    } else if (operationState.leftOperand && operationState.operator) {
        operationState.rightOperand = value; 
        console.log('operationState.rightOperand  '+ operationState.rightOperand);
        clearNumbersDisplay();
        updateDisplay(value, numbersDisplay);
    }}

    //placement 

    if(e.target.classList.contains('operator-button-color') && e.target.value !== '='){
        if(operationState.rightOperand !== null) {
            operationState.leftOperand = makeCalculations();
            console.log('new left operand: ' + operationState.leftOperand)
            console.log(operationState);
        }
        operationState.operator = e.target.value;
        clearNumbersDisplay();
    }

};

export const pressEquals = (e) => {
    e.preventDefault

    if(e.target.id == 'equals'){
        clearCalculationsDisplay();
        let value = makeCalculations();
        updateDisplay(value, numbersDisplay);
        updateDisplay(value, calculationsDisplay);
        operationState.rightOperand = null;
        operationState.operator = null;
    }
}
