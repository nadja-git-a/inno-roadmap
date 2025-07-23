import { clearNumbersDisplay, updateDisplay } from "../display/display";
import { state, setLeftOperand, setRightOperand } from "./operands";
import { FactorialCommand } from "./operators-commands";

export const pressFactorial = (e) => {
    e.preventDefault();

    if(e.target.value == 'factorial'){
        let num = document.querySelector('#numbersDisplay').innerHTML;

        num = new FactorialCommand(num).execute();
        clearNumbersDisplay();
        updateDisplay(num, numbersDisplay)
        if(state.leftOperand == null || !state.rightOperand){
            setLeftOperand(num);
            console.log('state.leftOperand factorial: '+ state.leftOperand);
        } else {
            setRightOperand(num);
            console.log('state.rightOperand factorial: '+ state.rightOperand);
        }
    }
}