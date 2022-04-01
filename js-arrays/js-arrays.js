//Technically arrays are objects
console.log(typeof [])

//Arrays - an array is a sequence of elements

let games = ['zelda', 'mario', 'sonic', 'pokemon', 'metroid', 'okami']
console.log(games)

//Statically retrieve an element from an array
console.log(games[5])

//The following grabs the m from the mario string (not a super common practice)
console.log(games[1][0])

//to find the length of an array
// .length
console.log(games.length)

// add to the end of the array
// .push() - this is a function
games.push('donkey-kong')
console.log(games)

// .pop() - removes the last element of an array
let gameRemoved = games.pop()
console.log(gameRemoved)

// .shift() - removes the first element from the array
games.shift()
console.log(games)

// .unshift() - adds to the front of the array
games.unshift('zelda')
console.log(games)

//More common methods -------------------

// SPLICE: .splice() - Remove more than one element
// 1st argument: where do you wanna start? (what index)
// 2nd: how many do you want to delete

// games.splice(1,2)
// console.log(games)

//can also add more than one element with splice
//1st argument - Where to start? (which index)
//2nd - how many things do you want to delete
//3rd - item to add

games.splice(2, 0, 'pikmin')
console.log(games)

//JOIN: .join() - takes all the elements of the array and joins them with your argument
//Converts the whole array into a string
let joinedGames = games.join(' and ') //additional spacing can make it more of a sentence
console.log(joinedGames) //going through the array and pushing everything together into one big string

//SPLIT: .split() - splits a string into an array seperated by a comma according to your argument

let backToArray = joinedGames.split(' and ')
console.log('Back to Array', backToArray)

//MUTATION
//The concept of changing the array above is called object mutation
//Not always best practice as it changes the original array

//This below is a way to keep the original array and avoid mutation
let movies = ['avengers', 'sonic', 'lotr', 'star-wars']
let moviesCopy = [...movies]
moviesCopy.pop()
console.log('original movies array: ', movies, 'copy of movies array: ', moviesCopy)

//Creating a new array using the previous arrays
let collection = [...games, ...movies, 'pokemon-cards']
console.log(collection)

//ARRAY ITERATION
let cars = ['Mercedes Benz', 'BMW', 'Tesla', 'Lexus', 'Mustang', 'Bugatti']
console.log(cars)

//iterate through and console log all elements in the array

//FOR LOOP
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]) //putting only i will only give you the index
}

//FOR EACH - takes a callback function
cars.forEach(function(car , idx){
  console.log(car, idx)
})

//FOR OF LOOP - captures the value of an element
for(let car of cars){
  console.log(car)
}

//FOR IN LOOP - captures the ID
for(let i in cars){
  console.log(i)
}