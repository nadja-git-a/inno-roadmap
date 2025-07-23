import { updateDisplay } from "../display/display";
import{clearNumbersDisplay} from '../display/display'
import { state, setLeftOperand, setRightOperand } from "./operands";
import { ChangeSignCommand } from "./operators-commands";

export const pressChangeSign = (e) => {
    e.preventDefault();
    let numbersDisplay = document.querySelector('#numbersDisplay'); 
    if(e.target.id == 'changeSign'){
        console.log(numbersDisplay.textContent);
        let num = new ChangeSignCommand(numbersDisplay.textContent).execute();
        clearNumbersDisplay()
        updateDisplay(num, numbersDisplay);
        if(state.leftOperand == null || !state.rightOperand){
            setLeftOperand(num);
            console.log('state.leftOperand change sign: '+ state.leftOperand);
        } else {
            setRightOperand(num);
            console.log('state.rightOperand change sign: '+ state.rightOperand);
        }
    } 
};
