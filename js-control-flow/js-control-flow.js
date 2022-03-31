//Control Flow is the execution sequence of instructions in a program determined at run time using control structures

//if then
//If Boots eats tacos
//Then Boots is Happy

//Basic types of Control Flow

//Sequence - If x then y 
//Branching - if not x then y or else z
//Looping - if not x, then keep going until you hit x

//if statement essentially is checking for truth

if (undefined) {
  console.log('TRUTHY')
} else {
  console.log('FALSEY')
}

//Everything in JS is truthy except two data types: null & defined and four values: false, 0, NaN and an empty string ""

//The not operator or "bang" operator, "flips" a true or truthy expression to the boolean value of false, and vice-versa.
//A double! is a good way to force an expression into it's actual boolean value

// = is used to assign variables (assignment operator)
// === strict equality
console.log(3 === 4)
// == checks for abstract equality or type conversion
console.log(3 == '3')
// strict inequality !==
// inequality !=

//Logical Operators

// || or operator
// the OR operator always returns the FIRST operand if it is truthy; OTHERWISE the second operand is returned - REGARDLESS of whether it is truthy or falsy

console.log(
  'party' || 'goodbye'
)

console.log(
  0 || null
)

// && and operator - always returns the first operand if it is falsy, otherwise the second will be returned - regardless of truthyness or falsyness

console.log( 'party' && 'goodbye')
console.log( 0 && null)

//BRANCHING STATEMENTS

let val = 6
//if - open parenthesis - check for truthy
//single path
if(val === 1) {
  console.log('this code will only run if val is 1')
}

//dual path if....else
if(val === 1) {
  console.log('val is 1')
} else {
  console.log('val is not 1')
}

//three or more paths if..else if....else
if(val == 1) {
  console.log('val is 1')
} else if(val === 2) {
  console.log('val is 2')
} else if(val === 3) {
  console.log('val is 3')
} else {
  console.log('val is not 1,2, or 3')
}

//Write an if else if else statement that console.logs the following based upon the value of a variable named color

let color = 'blue'

if(color == 'green') {
  console.log('Boy without a fairy')
} else if(color === 'blue') {
  console.log('GOTTA GO FAST')
} else if(color === 'red') {
  console.log('& Knuckles')
} else {
  console.log('color is not green, blue or red')
}