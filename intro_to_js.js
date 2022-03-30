// The core of programming (according to Shazad)
//1. how to allocate memory
//2. organizing data
//3. iterate over that data

// JavaScript: multi-paradigm, high level, interpreted language, Dynamic language

// Variables
// Used to reference data
// var, let, and const
// the difference between var & let/const(ES6) is SCOPE
// var has some vulnerabilites
// avoid using var

// var party = 'tonight'
// console.log(party)

let party = 'tonight is the night!'
console.log(party)

// let allows you to reassign values
// const protects you from reassigning

let a = 25
console.log(a)

a = 55
console.log(a)

const b = 100
console.log(b)

b = 121
console.log(b)

// let a = 25
// let b = a
// a = 11

// b stays 25

// VARIABLES ARE NOT EQUAL TO VALUES
// VARIABLES POINT TOWARDS VALUES

//Value System in JS---------------------------------------------------------------

//Primitives
  //Number - math calc
  //String - used for all words
  //Boolean - true or false (logic)
  //Null - when you intentionally make a variable POINT to nothing
  //Undefined - when you want to unintentionally make a variable point to nothing
  //Symbol

let magicPotion = null //starting a game for example
magicPotion = 2

let partyDate; //undefined 

//Object
  //Array - sequence of elements
  //object - key and value pair
  //function - bread and butter of js
  //RegEx - regular expressions
  //Date 