// Each data type has some built in methods. Examples:
// string - toUpperCase(), toLowerCase()
// number - parseInt()
// arrays - push, pop, forEach, unshift, splice
// functions - 3 ways to define, rest parameters
// objects
// Almost everything in JS is an object
// JS is a huge object

// Global Object (Node environment)
// Window object (chrome browser)

// OOP - Object Oriented Programming
// Objects have state and behavior
// Object | State | Behavior
// jsObject | Property | Methods

const s = 'Hey, what up?'
console.log(s.length) // accessing the current length property of the string

console.log(s.toLowerCase()) // changing the state of the string by using the toLowerCase method/behavior

//Objects - a collection of zero or more properties (key & value)

// const sonic = ['Hedgehog','Super Fast','Hero'] instead of creating an array, create a key value pair

const sonic = {
  typeOfAnimal: 'Hedgehog',
  isRed: false,
  isFast: true,
  favFood: 'Chili Dogs',
  numberOfLives: 99,
  emeralds: ['Blue', 'Green', 'Yellow']
}

//Key value pairs organize data in a dictionary format

//There are several ways to create objects
//Literal Notation, invoking a Class, object.create method

// Guess the number game!
// take a range of numbers 1 - 100
// smallest number to biggest number
// given that range, a random number is generated
// The user has to guess that random number
// The game needs to track how many guesses have happened
// also tells us if the number is correct
// can also give us clues if the guess it too high or low

const game = {
  title: 'Guess the number',
  biggestNum: 100,
  smallestNum: 0,
}

// Adding to object from outside of object {} using dot notation
// game.party = 'At Shahzad house' 
//this is kind of risky though in big code

console.log(game.title)
console.log(game.biggestNum)

// Square bracket notation
// game['smallestNum'] = 0

// Best practice is to avoid mutating the object with these methods as much as you can.

// Delete (not encouraged at all)
// delete game.biggestNum

console.log(game)

const adventurer = {
  name: 'Link',
  age: 'young',
  items: ['sword', 'bow', 'shield', 'potion'],
  companion: {
    name: 'Navi',
    type: 'Fairy',
    companion: {
      name: 'Tim',
      type: 'parasite',
      items: ['scuba tank', 'ipod', 'health insurance']
    }
  }
}

//Link needs to defend himself!!
console.log(adventurer.items[2])

//Link needs to make Navi shutup! Access Navi
console.log(adventurer.companion)

//Link needs to kill the parasite on Navi
delete adventurer.companion.companion

console.log(adventurer.companion)

//Access all of Link's items
for(let i = 0; i < adventurer.items.length; i++) {
  console.log(adventurer.items[i])
}