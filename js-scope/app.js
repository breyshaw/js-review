// Scope - accesibility of variables within certain boundaries

// Types of scope
// Global Scope
// Function Scope (local scope) - lexical
// Block Scope - ES2015 -- let and const




//Global Scope
  //Function Scope

    //Block Scope

    //
  //
//

function printName() {
  return 'Bruce Wayne'
}

function findName() {
  return printName()
}

function sayName() {
  return findName()
}

// CALL STACK EXAMPLE
// console.log(sayName()) (comment out the sayName() function below to see this in action)

// var & let and const

//The Danger Zone (The problem with var)/Hoisting
var i; //undefined 

for (i = 0; i < 10; i++) { //i is being reassigned to 0 (let i = 0; will keep i from being assigned on the global scope here)
  console.log(i)
}
// console.log(i)

//If i is changed after this, it will change the variable in the for loop above. Makes i vunerable and can break code in multiple places. 

// Hoisting - a concept where the JS engine has two phases and whenever the engine sees var or function keywords, it immediatly allocates them, and declares them at the global scope. This is done as a favor from JS but it can cause big issues. 

//A more positive example is that you can invoke a function before it is even declared. The V8 using hoisting to accomplish this. 
//Biggest thing is variable hoisting is where it gets risky. 


function sayName() {
  let a = 'a'
  console.log(c) //this is outside of sayName's scope. c was declared in printName therefore it is not accessible from sayName()
  return function findName() {
    let b = 'b'
    return function printName() {
      let c = 'c'
      console.log(a) //Have access to a because of sayName's scope. (One way accessiblity)
      return 'Joe'
    }
  }
}

//You can look out, but you can't look in!

console.log(
  sayName()()()
)


//V8 Engine 
  // has 2 phases
    // phase 1 surveying - compiling
    // phase 2 interpretation
      //JIT - Just in Time