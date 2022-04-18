console.log('sanity check')

//Object Oriented Programming
// Imperative - you re telling the computer how to do things

// Functional Programming
// Declarative - you are telling the computer what to do

//often these are combined (JavaScript has both features as opposed to Java or C that are more OOP heavy)

//Functions in JS
//  First Class citizenship
//  Data Type: Object

// WRITE SMALL FUNCTIONS THAT DO ONE TASK AT A TIME
//Reusability

//3 Ways to define and write functions

//1 Function Declaration

function greeting(name) {
  console.log('Hey,', name + '!')
}

greeting('Brey')

function greeting2(name) {
  return 'Hello, ' + name + '!'
}

console.log(greeting2('Katie'))