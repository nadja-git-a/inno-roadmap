import { updateDisplay } from "../display/display";
import{clearNumbersDisplay} from '../display/display'
import { operationState } from "./operands";

export const pressChangeSign = (e) => {
    e.preventDefault();
    let numbersDisplay = document.querySelector('#numbersDisplay'); 
    if(e.target.id == 'changeSign'){
        let num = changeSign(numbersDisplay.textContent);
        clearNumbersDisplay()
        updateDisplay(num, numbersDisplay);
        if(operationState.leftOperand == null || !operationState.rightOperand){
            operationState.leftOperand = num;
            console.log('operationState.leftOperand change sign: '+ operationState.leftOperand);
        } else {
            operationState.rightOperand = num;
            console.log('operationState.rightOperand change sign: '+ operationState.rightOperand);
        }
    } 
};

const changeSign = (num) => {
    console.log('negative: ' + num);
    return -num;
}