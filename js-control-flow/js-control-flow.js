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

//WHEN in doubt, ITERATE
//LOOPS

//FOR LOOP
//Start i at 0, it doesn't go higher than 10(condition), i++ increments by one
//The function runs once at 0, checks if it has met the condition, then increments by one if not met
for(let i = 0; i < 10; i++){
  console.log(i)
}

//PSEUDO CODE!!!
//if the number is even
//log out - number is totally even
//else
//number is totally odd
for(let i = 1; i < 21; i++){
  if(i % 2 === 0){ //if i is divided by two, remainder is 0 (it's even) MODULUS or remainder operator
    console.log(i, 'is totally even')
  } else {
    console.log(i, 'is totally odd')
  }
}

//Write a for loop that iterates from 0-50 and logs the numbers
for(let i = 0; i < 50; i++){
  console.log(i)
}

//Write a for loop that iterates from 1-200 and logs out whether each number in the range is even or odd
for(let i = 0; i < 20; i++){
  if(i % 2 === 0){
    console.log(i, 'is even')
  } else {
    console.log(i, 'is odd')
  }
}