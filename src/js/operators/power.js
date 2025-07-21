import { clearNumbersDisplay, updateDisplay } from "../display/display";
import { operationState } from "./operands";

export const pressPower = (e) => {
    e.preventDefault();

    let num = document.querySelector('#numbersDisplay').innerHTML;

    console.log(num)

    if(e.target.value == 'squared'){
        num = extractSquare(num);
        clearNumbersDisplay();
        updateDisplay(num, numbersDisplay)
        if(operationState.leftOperand == null || !operationState.rightOperand){
            operationState.leftOperand = num;
            console.log('operationState.leftOperand square: '+ operationState.leftOperand);
        } else {
            operationState.rightOperand = num;
            console.log('operationState.rightOperand square: '+ operationState.rightOperand);
        }

        console.log(num)
    }

    if(e.target.value == 'cubed'){
        num = extractCube(num);
        clearNumbersDisplay();
        updateDisplay(num, numbersDisplay)
        if(operationState.leftOperand == null || !operationState.rightOperand){
            operationState.leftOperand = num;
            console.log('operationState.leftOperand cube: '+ operationState.leftOperand);
        } else {
            operationState.rightOperand = num;
            console.log('operationState.rightOperand cube: '+ operationState.rightOperand);
        }
    }

    if(e.target.value == 'powerOfY'){
        operationState.leftOperand = num;
        num = '';      
        updateDisplay(num, numbersDisplay)
        operationState.operator ='^';
        clearNumbersDisplay();
    }

}

const extractSquare = (num) => {
    return num * num;
}

const extractCube = (num) => {
    return num * num * num;
}

export const extractYRoot = (num) => {
    let y = operationState.rightOperand;
    let result = 1;
    console.log('extract root' + num, y);
    for (let i = 0; i < y; i++) {
        result *= num;
        console.log('inside the loop' + num)
    }
    clearNumbersDisplay();
    updateDisplay(result, numbersDisplay)
    return result;
}