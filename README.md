# Calculator

> basic calculator with bunch of special functions.

## Task

[click to see the task](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view)

## How to run the app

clone the repository, then install dependencies and run the project

`git clone https://github.com/nadja-git-a/inno-roadmap/tree/task-4`

`npm install`

`npm start`

## Usage

There are basic math operations and more advanced:

1. **Addition, Subtraction, Multiplication, Division**

   > Enter a **left operand**, then **operator** and **right operand**, finally, press either **equals** or another **operator** -> you will receive a result of calculations in left operand

2. **Special functions**
   - _Sign change_

     > To change the sign enter **a number**

   - _Percentage_

     > To count percentage enter **a number** (n% out of 100), or **two numbers** (addition - add a percentage, subtraction - subtract a percentage, multiplication - percentage of a number, division - what percent is one number of another)

   - _Factorial_

     > To count factorial enter **a number**

   - _Power_

     > To count power of a number, use features **squared** and **cubed**, enter **a number**

     > To count power with a custom value, use a feature **power of y**, enter **two numbers** (number, power)

     > To count 10 in nth power, use a feature **power of x**, enter **a number**

   - _Root_

     > To count a root of a number, use features **square root** and **cube root**, enter **a number**

     > To count root with a custom value, use a feature **root of y**, enter **two numbers** (number, root)

3. **Undo**
   > Undo feature returns a number before the calculations were performed

## Project structure

Src folder consists of js, styles, test folders and an **index.html file**. **Js folder** includes scripts divided by their functionality. There are **buttons** _(activates specific events depending on the button chosen)_, **display** _(showcases calculations on display)_, **memory** _(regulates memory functions)_, **numbers** _(captures numbers on display)_, **operators** (_processes left, right operands, operators and their work)_, **special functions** _(processes special functions work)_, **themes** _(changes styles depending on theme chosen)_ folders **and index.js file**. **Styles folder** has **style.scss** and **variables.scss** files. **Test folder** is dedicated to **commands.test.js file** _(runs tests on math calculations)_.

- src
  - js
    - buttons
      - buttons.js
    - display
      - display.js
    - memory
      - memory.js
    - numbers
      - numbers.js
    - operators
      - equals.js
      - operands.js
      - operatorsCommands.js
      - operators.js
    - specialFunctions
      - changeSign.js
      - factorial.js
      - percentage.js
      - power.js
      - roots.js
      - undo.js
    - themes
      - themes.js
    - index.js
  - styles
    - styles.scss
    - variables.scss
  - test
    - commands.test.js
  - index.html
