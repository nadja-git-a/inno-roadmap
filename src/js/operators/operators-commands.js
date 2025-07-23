export class Command {
  execute() {
    throw new Error('');
  }

  undo() {
    throw new Error('');
  }
}

export class AddCommand extends Command {
  constructor(leftOperand, rightOperand) {
    super();
    this.leftOperand = Number(leftOperand);
    this.rightOperand = Number(rightOperand);
  }

  execute() {
    return this.leftOperand + this.rightOperand;
  }

  undo() {
    return this.leftOperand;
  }
}

export class SubtractCommand extends Command {
  constructor(leftOperand, rightOperand) {
    super();
    this.leftOperand = Number(leftOperand);
    this.rightOperand = Number(rightOperand);
  }

  execute() {
    return this.leftOperand - this.rightOperand;
  }

  undo() {
    return this.leftOperand;
  }
}

export class MultiplyCommand extends Command {
  constructor(leftOperand, rightOperand) {
    super();
    this.leftOperand = Number(leftOperand);
    this.rightOperand = Number(rightOperand);
  }

  execute() {
    return this.leftOperand * this.rightOperand;
  }

  undo() {
    return this.leftOperand;
  }
}

export class DivideCommand extends Command {
  constructor(leftOperand, rightOperand) {
    super();
    this.leftOperand = Number(leftOperand);
    this.rightOperand = Number(rightOperand);
  }

  execute() {
    if (this.leftOperand === 0 || this.rightOperand === 0) {
      throw new Error('Division by zero');
    }
    return this.leftOperand / this.rightOperand;
  }

  undo() {
    return this.leftOperand;
  }
}

export class PercentageCommand extends Command {
  constructor (leftOperand, rightOperand) {
    super();
    this.leftOperand = Number(leftOperand);
    this.rightOperand = Number(rightOperand);
  }

  execute() {
    let percent = this.rightOperand / 100;
    return this.leftOperand * percent;
  }

  undo() {
    return this.rightOperand;
  }
}

export class PowerCommand extends Command {
  constructor (leftOperand, rightOperand){
    super();
    this.leftOperand = Number(leftOperand);
    this.rightOperand = Number(rightOperand);
  }

  execute(){
    let result = 1;
    for (let i = 0; i < this.rightOperand; i++) {
      result *= this.leftOperand;
      console.log('inside the loop' + this.leftOperand)
    }
    return result;
  }

  undo(){
    return this.leftOperand;
  }
}

export class ChangeSignCommand extends Command {
  constructor (num){
    super();
    this.num = Number(num);
    this.previousNum = num;
  }

  execute(){
    return -this.num
  }

  undo(){
    return this.previousNum;
  }
}

export class FactorialCommand extends Command {
  constructor (num){
    super();
    this.num = Number(num);
  }

  execute() {
    if (this.num < 0) return NaN;
  
    let result = 1;
    for (let i = 2; i <= this.num; i++) {
      result *= i;
    }
    return result;
  }

  undo(){
    return this.num;
  }
}

export class RootCommand extends Command {
  constructor (leftOperand, rightOperand){
    super();
    this.leftOperand = Number(leftOperand);
    this.rightOperand = Number(rightOperand);
  }

  execute() {
    const a = this.leftOperand;
    const k = this.rightOperand;
    const tolerance = 1e-10;
    const maxIterations = 100;

    if (a < 0 && k % 2 === 0) return NaN; 
    if (a === 0) return 0;

    let x = a / k; 
    let step = 0;

    while (step < maxIterations) {
      let prev = x;
      x = ((k - 1) * x + a / prev ** (k - 1)) / k;

      if (Math.abs(prev - x) < tolerance) break;

      step++;
    }

    return x;
  }

  undo(){
    return this.leftOperand
  }

}