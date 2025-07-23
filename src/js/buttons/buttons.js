
import { showcaseValueOnDisplay } from '../display/display.js';
import { defineOperand } from '../operators/operands.js';
import {pressEquals} from '../operators/equals.js'
import { pressPercentage } from '../specialFunctions/percentage.js';
import { pressChangeSign } from '../specialFunctions/changeSing.js';
import { pressRoots } from '../specialFunctions/roots.js';
import { pressPower } from '../specialFunctions/power.js';
import { pressFactorial } from '../specialFunctions/factorial.js';
import { pressMemory } from '../memory/memory.js';
import { pressUndo } from '../specialFunctions/undo.js';

export class CalculatorButton {
    constructor(buttonElement, calculatorDisplay) {
      this.button = buttonElement;
      this.calculator = calculatorDisplay;
      this.button.addEventListener('click', this.onClick.bind(this));
    }
  
    onClick(e) {
      
    }
}

export class NumberButton extends CalculatorButton {
    onClick(e) {
        showcaseValueOnDisplay(e);
        defineOperand(e);
    }
}

export class OperatorButton  extends CalculatorButton {
    onClick(e) {
        showcaseValueOnDisplay(e)
        defineOperand(e);
    }
}

export class SpecialFunctionButton  extends CalculatorButton {
    onClick(e) {
        const value = this.button.value;
    
        switch (value) {
            case '=':
                pressEquals(e);
                showcaseValueOnDisplay(e);
                break;
            case '%':
                pressPercentage(e);
                break;
            case '+/-':
                pressChangeSign(e);
                break;
            case 'squareRoot':
            case 'cubeRoot':
            case 'yRoot':
                pressRoots(e);
                break;
            case 'squared':
            case 'cubed':
            case 'powerOfY':
            case 'powerOfX':
                pressPower(e);
                break;
            case 'factorial':
                pressFactorial(e);
                break;
            case 'mc':
            case 'mr':
            case 'm+':
            case 'm-':
                pressMemory(e);
                break 
            case 'undo':
                pressUndo(e);  
        }
    }
}

export class MemoryButton  extends CalculatorButton {
    onClick(e) {
        const value = this.button.value;
        pressMemory(e);
    }
}
  