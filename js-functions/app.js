//Object Oriented Programming
// Imperative - you re telling the computer how to do things

// Functional Programming
// Declarative - you are telling the computer what to do

//often these are combined (JavaScript has both features as opposed to Java or C that are more OOP heavy)

//Functions in JS
//  First Class citizenship
//  Data Type: Object
//  WRITE SMALL FUNCTIONS THAT DO ONE TASK AT A TIME
//  Reusability

// 3 Ways to define and write functions

// 1. Function Declaration
function greeting(name) {
  console.log('Hey,', name + '!')
}

greeting('Brey')

function greeting2(name) {
  return 'Hello, ' + name + '!'
}

console.log(greeting2('Katie'))

// 2. Function Expressions - the function is assigned to a variable
const sayHi = function(name) {
  console.log('Hello', name + '!')
}

sayHi('Dan')

// Difference between function declaration and function expression
//Syntax
//Function Declaration - you can invoke the function anywhere in the file - even before the function is defined. 
//Function Expression - you can only invoke after a function is defined.

// 3. Arrow Functions - ES5/ES6

function add(a,b) {
  return a + b
}

let addedNums = add(3, 4)
console.log(addedNums)

//Add can be rewritten as
let addArrow = (a , b) => a + b
console.log(addArrow(4, 5))
