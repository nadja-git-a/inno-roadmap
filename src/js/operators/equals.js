import { updateDisplay, clearCalculationsDisplay } from "../display/display";
import { operationState } from "./operands";
import { extractYRoot } from "./power";
import { makeCalculations } from "./operators";

export const pressEquals = (e) => {
    e.preventDefault
    if(e.target.id == 'equals' && operationState.operator == '^'){
        extractYRoot(operationState.leftOperand)
    } else if(e.target.id == 'equals'){
        clearCalculationsDisplay();
        let value = makeCalculations();
        updateDisplay(value, numbersDisplay);
        updateDisplay(value, calculationsDisplay);
        operationState.rightOperand = null;
        operationState.operator = null;
    }
}
