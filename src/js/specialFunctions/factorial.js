import { clearNumbersDisplay, updateDisplay } from "../display/display.js";
import { state, setLeftOperand, setRightOperand } from "../operators/operands.js";
import { FactorialCommand } from "../operators/operators-commands.js";
import { commandManager } from "./undo.js";

export const pressFactorial = (e) => {
    e.preventDefault();

    if(e.target.value == 'factorial'){
        let num = document.querySelector('#numbersDisplay').innerHTML;

        num = new FactorialCommand(num).execute();
        commandManager.remember(new FactorialCommand(num));
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