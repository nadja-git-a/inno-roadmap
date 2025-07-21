import { clearNumbersDisplay, updateDisplay } from "../display/display";
import { operationState } from "./operands";

export const pressPower = (e) => {
    e.preventDefault();

    let num = document.querySelector('#numbersDisplay').innerHTML;
    let y = 5;

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
        num = extractYRoot(num, y);
        clearNumbersDisplay();
        updateDisplay(num, numbersDisplay)
        if(operationState.leftOperand == null || !operationState.rightOperand){
            operationState.leftOperand = num;
            console.log('operationState.leftOperand y: '+ operationState.leftOperand);
        } else {
            operationState.rightOperand = num;
            console.log('operationState.rightOperand y: '+ operationState.rightOperand);
        }
    }

}

const extractSquare = (num) => {
    return num * num;
}

const extractCube = (num) => {
    return num * num * num;
}

const extractYRoot = (num, y) => {
    for (let index = 0; index < y; index++) {
        num *= num
    }
}