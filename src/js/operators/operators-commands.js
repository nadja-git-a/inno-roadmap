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
    return this.leftOperand - this.rightOperand;
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
    return this.leftOperand + this.rightOperand;
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
    return this.leftOperand / this.rightOperand;
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
    return this.leftOperand * this.rightOperand;
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
    
  }
}
