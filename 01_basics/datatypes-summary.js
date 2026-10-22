//Primitive data types
// 7 types : String, NUmber , Boolean, null,undefined , Symbol ,BigInt

//Dynamic typing : we can change the type of variable at runtime

// const score = 100
// const scoreValue = 100.4
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId) // false because each Symbol is unique

// const bigNumber = 34567834567890n



//Reference type : Non primitive data types

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]

//Objects: in curly braces
let myObj = {
    name: "samruddhi",
    age: 20,
}

//function
const myFunction = function(){
    console.log("Hello samruddhi!");
}

console.log(typeof heros) //object
console.log(typeof myObj) //object
console.log(typeof myFunction) //function







// *************MEMORY *****************

//Stack (primitive), Heap(Non-primitive)


let MyYoutubechannel = "Samruddhi's channel" // stored in stack

let anothername = MyYoutubechannel // stored in stack
anothername = "NewChannelName"

console.log(MyYoutubechannel)
console.log(anothername)

let userOne = {
    email: "sam@gmail.com",
    upi: "sam@upi"
}

let userTwo = userOne // stored in heap

userTwo.email = "Sai@gmail.com"

console.log(userTwo.email)
console.log(userOne.email)