import { updateDisplay, clearCalculationsDisplay } from "../display/display.js";
import { state, setRightOperand, setOperator } from "./operands.js";
import { extractPowerOfY } from "../specialFunctions/power.js";
import { makeCalculations } from "./operators.js";
import { extractYRoot } from "../specialFunctions/roots.js";

export const pressEquals = (e) => {
    e.preventDefault
    if(e.target.id == 'equals' && state.operator == '^'){
        extractPowerOfY(state.leftOperand)
        state.saveHistory();
    } else if(e.target.id == 'equals' && state.operator == '√') {
        extractYRoot(state.leftOperand);
        state.saveHistory();
    } else if(e.target.id == 'equals'){
        clearCalculationsDisplay();
        state.saveHistory();
        let value = makeCalculations();
        updateDisplay(value, numbersDisplay);
        updateDisplay(value, calculationsDisplay);
        setRightOperand(null);
        console.log(state.rightOperand);
        setOperator(null);
    }
    console.log(state);
}

