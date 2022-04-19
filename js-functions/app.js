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

// 1. Function Declaration - can invoke the function anywhere in the file
function greeting(name) {
  console.log('Hey,', name + '!')
}

greeting('Brey')

function greeting2(name) {
  return 'Hello, ' + name + '!'
}

console.log(greeting2('Katie'))

// 2. Function Expressions - the function is assigned to a variable - must be invoked after the function
const sayHi = function (name) {
  console.log('Hello', name + '!')
}

sayHi('Dan')

// Difference between function declaration and function expression
//Syntax
//Function Declaration - you can invoke the function anywhere in the file - even before the function is defined. 
//Function Expression - you can only invoke after a function is defined.

// 3. Arrow Functions - ES5/ES6

function add(a, b) {
  return a + b
}

let addedNums = add(3, 4)
console.log(addedNums)

//Add can be rewritten as
let addArrow = (a, b) => a + b
console.log(addArrow(4, 5))

//PARAMETERS are the placeholders (defined with the function) where the arguments are passed
//ARGUMENTS are the specific values we pass through a function when it is actually called

//Function REPS

function computeArea(width, height) {
  return ('The area of a rectangle with a width of ' + width + ' and a height of ' + height + ' is ' + (width * height) + ' square units.')
}
console.log(computeArea(5, 25))

//Template literal
function computeAreaLiteral(width, height) {
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units.`
}
console.log(computeAreaLiteral(2, 5))

const planetHasWater = function (planet) {
  if (planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars') {
    return true
  } else {
    return false
  }
}
console.log(planetHasWater('EARTH'))
console.log(planetHasWater('mArS'))
console.log(planetHasWater('Venus'))

//When you have many arguements (and don't know the number), you can use the rest parameter
//function takeManyArguments(...array)

//Inherently when you pass multiple parameters, the function thinks of them as an array
function marry(person1, person2) {
  console.log(arguments[0])
  return `${person1} is now married to ${person2}`
}
console.log(marry('Helena', 'Hermes'))

//Rest Parameter using args
function marry2(...args) {
  console.log('these are my arguements', args)
  return `${args[0]} is now married to ${args[1]} and they are having a dope party with ${args[2]} and ${args[3]}`
}
console.log(
  marry2('Thot', 'Hagar', 'Nancy', 'Karen')
)

const pets = ['Bandit','Opie','Marley']
//Write a function that makes all the pet names uppercase

function upperCasePets(arr) {
arr.forEach(pet => {
  console.log(pet.toUpperCase())
});
}
upperCasePets(pets)
