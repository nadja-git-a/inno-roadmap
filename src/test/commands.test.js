import {
  AddCommand,
  DivideCommand,
  MultiplyCommand,
  PercentageCommand,
  SubtractCommand,
  PowerCommand,
  RootCommand,
  FactorialCommand,
} from '../js/operators/operators-commands.js';

describe('AddCommand test', () => {
  test('add two numbers', () => {
    const command = new AddCommand(1, 2);
    expect(command.execute()).toBe(3);
    expect(command.undo()).toBe(1);
  });
});

describe('SubtractCommand test', () => {
  test('subtract two numbers', () => {
    const command = new SubtractCommand(2, 1);
    expect(command.execute()).toBe(1);
    expect(command.undo()).toBe(2);
  });
});

describe('MultiplyCommand test', () => {
  test('multiply two numbers', () => {
    const command = new MultiplyCommand(2, 3);
    expect(command.execute()).toBe(6);
    expect(command.undo()).toBe(2);
  });
});

describe('DivideCommand test', () => {
  test('divide two numbers', () => {
    const command = new DivideCommand(6, 3);
    expect(command.execute()).toBe(2);
    expect(command.undo()).toBe(6);
  });
});

describe('PercentageCommand test', () => {
  test('percentage num ', () => {
    const command = new PercentageCommand(200, 10);
    expect(command.execute()).toBe(20);
    expect(command.undo()).toBe(10);
  });
});

describe('PowerCommand test', () => {
  test('power num ', () => {
    const command = new PowerCommand(5, 3);
    expect(command.execute()).toBe(125);
    expect(command.undo()).toBe(5);
  });
});

describe('RootCommand test', () => {
  test('root num ', () => {
    const command = new RootCommand(125, 3);
    expect(command.execute()).toBe(5);
    expect(command.undo()).toBe(125);
  });
});

describe('FactorialCommand test', () => {
  test('factorial num ', () => {
    const command = new FactorialCommand(3);
    expect(command.execute()).toBe(6);
    expect(command.undo()).toBe(3);
  });
});
