import {
  AddCommand,
  DivideCommand,
  MultiplyCommand,
  SubtractCommand,
} from './operatorsCommands.js';
import { state, setLeftOperand } from './operands.js';
import {
  clearNumbersDisplay,
  updateLeftOperandDisplay,
} from '../display/display.js';
import { extractPowerOfY } from '../specialFunctions/power.js';
import { extractYRoot } from '../specialFunctions/roots.js';
import { commandManager } from '../specialFunctions/undo.js';

export const makeCalculations = () => {
  let operator = state.operator;
  let leftOperand = state.leftOperand;
  let rightOperand = state.rightOperand;

  if (operator == '+') {
    let addition = new AddCommand(leftOperand, rightOperand);
    commandManager.remember(new AddCommand(leftOperand, rightOperand));

    setLeftOperand(addition.execute());
    updateLeftOperandDisplay();
    clearNumbersDisplay();
    return addition.execute();
  }
  if (operator == '-') {
    let subtraction = new SubtractCommand(leftOperand, rightOperand);
    commandManager.remember(new SubtractCommand(leftOperand, rightOperand));

    setLeftOperand(subtraction.execute());
    updateLeftOperandDisplay();
    clearNumbersDisplay();
    return subtraction.execute();
  }
  if (operator == '*') {
    let multiplication = new MultiplyCommand(leftOperand, rightOperand);
    commandManager.remember(new MultiplyCommand(leftOperand, rightOperand));

    setLeftOperand(multiplication.execute());
    updateLeftOperandDisplay();
    clearNumbersDisplay();
    return multiplication.execute();
  }
  if (operator == '/') {
    if (leftOperand == 0 || rightOperand == 0) {
      alert('division by zero');
      return 0;
    } else {
      let division = new DivideCommand(leftOperand, rightOperand);
      commandManager.remember(new DivideCommand(leftOperand, rightOperand));

      setLeftOperand(division.execute());
      updateLeftOperandDisplay();
      clearNumbersDisplay();
      return division.execute();
    }
  }
  if (operator == '^') {
    let powerY = extractPowerOfY(state.leftOperand);
    return powerY;
  }
  if (operator == '√') {
    let rootY = extractYRoot(state.leftOperand);
    return rootY;
  }

  state.saveHistory();
};
