let score = "null"

console.log(typeof score)
console.log(typeof(score))

//converting string to number
let valueInNumber = Number(score) //converting string to number
console.log(typeof valueInNumber)
console.log(valueInNumber) 



/*if we take
score = "100abc" then type = NaN (Not a number)
score = null then type = 0
score = undefined then type = NaN
score = true then type = 1
score = false then type = 0
score = " " then type = 0
score = "samruddhi" then type = NaN
*/


let isLoggedIn = "samruddhi" //string

let booleanIsLoggedIn = Boolean(isLoggedIn) //converting number to boolean
console.log(booleanIsLoggedIn)


let NumberIs = 44
let IsString = String(NumberIs);
console.log(IsString)
console.log(typeof IsString)
