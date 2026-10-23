// const name = "samruddhi"
// const repoCount = 10


// // console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('samruddhi')

// console.log(gameName[0])
// console.log(gameName.__proto__) //String.prototype


//Operations on string
// console.log(gameName.length);// 9
// console.log(gameName.toUpperCase());// SAMRUDDHI
// console.log(gameName.charAt(2));// m
// console.log(gameName.indexOf('a'));// 1





const myName = "samruddhi-patil"
const  newString = myName.substring(0,4); //dont give negative index
console.log(newString) 


const anotherString = myName.slice(-15,11) //give negavtive index also
console.log(anotherString)


const newStringOne = "   hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim()) //remove white spaces from start and end

const url = "https://samruddhi.com/samruddhi-patil2703"
console.log(url.replace('2703','100')) //replace 2703 with 2023
console.log(url.includes('samruddhi')) //true
console.log(url)


console.log(myName.split('/')) //split the string into array

