import {
  AddCommand,
  DivideCommand,
  MultiplyCommand,
  SubtractCommand,
} from './operators-commands.js';
import { operationState } from './operands.js';
import { clearNumbersDisplay, showcaseResultOnDisplay, updateDisplay } from '../display/display.js';
import {extractYRoot} from '../operators/power.js'

// export const defineOperator = (e) => {
//   e.preventDefault();
//   if(e.target.value == '-' && operationState.leftOperand < 0){
//     operationState.operator = '-';
//   }
// };

export const makeCalculations = () => {
  let operator = operationState.operator;
  let leftOperand = operationState.leftOperand;
  let rightOperand = operationState.rightOperand;
  console.log('make calculations is here');
  console.log(operationState);

  if (operator == '+') {
    let addition = new AddCommand(leftOperand, rightOperand);
    console.log('addition works: ' + addition.execute());
    operationState.leftOperand = addition.execute();
    clearNumbersDisplay();
    return addition.execute();
  }
  if (operator == '-') {
    let subtraction = new SubtractCommand(leftOperand, rightOperand);
    console.log('subtraction works: ' + subtraction.execute());
    operationState.leftOperand = subtraction.execute();
    clearNumbersDisplay();
    return subtraction.execute();
  }
  if (operator == '*') {
    let multiplication = new MultiplyCommand(leftOperand, rightOperand);
    console.log('multiplication works: ' + multiplication.execute());
    operationState.leftOperand = multiplication.execute();
    clearNumbersDisplay();
    return multiplication.execute();
  }
  if (operator == '/') {
    let division = new DivideCommand(leftOperand, rightOperand);
    console.log('division works: ' + division.execute());
    operationState.leftOperand = division.execute();
    clearNumbersDisplay();
    return division.execute();
  }
  if(operator == '^'){
    let rootY = extractYRoot(operationState.leftOperand);
    return rootY;
  }
};

