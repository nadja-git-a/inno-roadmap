import { clearNumbersDisplay, updateDisplay } from "../display/display";
import { state, setLeftOperand, setRightOperand, setOperator } from "./operands";
import { RootCommand } from "./operators-commands";

export const pressRoots = (e) => {
    e.preventDefault();

    let num = document.querySelector('#numbersDisplay').innerHTML;

    if(e.target.value == 'squareRoot'){
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
    }

    if(e.target.value == 'cubeRoot'){
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

    if(e.target.value == 'yRoot'){
        state.leftOperand = num;
        num = '';      
        updateDisplay(num, numbersDisplay)
        setOperator('√');
        clearNumbersDisplay();
    }

}

const extractSquare = (num) => {
    let root = new RootCommand(num, 2).execute();
    return root;

}

const extractCube = (num) => {
    let root = new RootCommand(num, 3).execute();
    return root;
}

export const extractYRoot = (num) => {
    let root = new RootCommand(num, state.rightOperand).execute();
    clearNumbersDisplay();
    updateDisplay(root, numbersDisplay)
    return root;
}