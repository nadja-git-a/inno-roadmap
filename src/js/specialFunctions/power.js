import { clearNumbersDisplay, updateDisplay } from "../display/display.js";
import { state, setLeftOperand, setRightOperand, setOperator } from "../operators/operands.js";
import { PowerCommand } from "../operators/operators-commands.js";
import {commandManager} from './undo.js'

export const pressPower = (e) => {
    e.preventDefault();

    let num = document.querySelector('#numbersDisplay').innerHTML;

    if(e.target.value == 'squared'){
        num = extractSquare(num);
        clearNumbersDisplay();
        updateDisplay(num, numbersDisplay)
        if(state.leftOperand == null || !state.rightOperand){
            setLeftOperand(num);
            console.log('state.leftOperand square: '+ state.leftOperand);
        } else {
            setRightOperand(num);
            console.log('state.rightOperand square: '+ state.rightOperand);
        }

        console.log(num)
    }

    if(e.target.value == 'cubed'){
        num = extractCube(num);
        clearNumbersDisplay();
        updateDisplay(num, numbersDisplay)
        if(state.leftOperand == null || !state.rightOperand){
            setLeftOperand(num);
            console.log('state.leftOperand cube: '+ state.leftOperand);
        } else {
            setRightOperand(num);
            console.log('state.rightOperand cube: '+ state.rightOperand);
        }
    }

    if(e.target.value == 'powerOfY'){
        state.leftOperand = num;
        num = '';      
        updateDisplay(num, numbersDisplay)
        setOperator('^');
        clearNumbersDisplay();
    }

    if(e.target.value == 'powerOfX'){
        num = extractPowerOfX(num);
        clearNumbersDisplay();
        updateDisplay(num, numbersDisplay)
        if(state.leftOperand == null || !state.rightOperand){
            setLeftOperand(num);
            console.log('state.leftOperand cube: '+ state.leftOperand);
        } else {
            setRightOperand(num);
            console.log('state.rightOperand cube: '+ state.rightOperand);
        }
    }


}

const extractSquare = (num) => {
    let power = new PowerCommand(num, 2).execute();
    commandManager.remember(new PowerCommand(num, 2));
    return power;
}

const extractCube = (num) => {
    let power = new PowerCommand(num, 3).execute();
    commandManager.remember(new PowerCommand(num, 3));
    return power;
}

export const extractPowerOfY = (num) => {
    let power = new PowerCommand(num, state.rightOperand).execute();
    commandManager.remember(new PowerCommand(num, state.rightOperand));
    clearNumbersDisplay();
    updateDisplay(power, numbersDisplay)
    return power;
}

export const extractPowerOfX = (num) => {
    let power = new PowerCommand(10, num).execute();
    commandManager.remember(new PowerCommand(10, num));
    clearNumbersDisplay();
    updateDisplay(power, numbersDisplay)
    return power;
}