import {
  AddCommand,
  DivideCommand,
  MultiplyCommand,
  SubtractCommand,
} from './operators-commands.js';
import { state, setLeftOperand } from './operands.js';
import { clearNumbersDisplay, showcaseResultOnDisplay, updateDisplay } from '../display/display.js';
import {extractPowerOfY} from '../specialFunctions/power.js'
import { extractYRoot } from '../specialFunctions/roots.js';
import { commandManager } from '../specialFunctions/undo.js';

export const makeCalculations = () => {
  let operator = state.operator;
  let leftOperand = state.leftOperand;
  let rightOperand = state.rightOperand;
  console.log('make calculations is here');
  console.log(state);

  if (operator == '+') {
    let addition = new AddCommand(leftOperand, rightOperand);
    commandManager.remember(new AddCommand(leftOperand, rightOperand));
    console.log('addition works: ' + addition.execute());
    setLeftOperand(addition.execute());
    clearNumbersDisplay();
    return addition.execute();
  }
  if (operator == '-') {
    let subtraction = new SubtractCommand(leftOperand, rightOperand);
    commandManager.remember(new SubtractCommand(leftOperand, rightOperand));
    console.log('subtraction works: ' + subtraction.execute());
    setLeftOperand(subtraction.execute()); 
    clearNumbersDisplay();
    return subtraction.execute();
  }
  if (operator == '*') {
    let multiplication = new MultiplyCommand(leftOperand, rightOperand);
    commandManager.remember(new MultiplyCommand(leftOperand, rightOperand));
    console.log('multiplication works: ' + multiplication.execute());
    setLeftOperand(multiplication.execute());  
    clearNumbersDisplay();
    return multiplication.execute();
  }
  if (operator == '/') {
    let division = new DivideCommand(leftOperand, rightOperand);
    commandManager.remember(new DivideCommand(leftOperand, rightOperand));
    console.log('division works: ' + division.execute());
    setLeftOperand(division.execute()); 
    clearNumbersDisplay();
    return division.execute();
  }
  if(operator == '^'){
    let powerY = extractPowerOfY(state.leftOperand);
    return powerY;
  }
  if(operator == '√'){
    let rootY = extractYRoot(state.leftOperand);
    return  rootY
  }

  state.saveHistory();
};

