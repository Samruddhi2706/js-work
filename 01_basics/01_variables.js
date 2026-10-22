const accountID = 4616
let accountEmail = "samru@gmail.com"
var accountPass = "123456"
accountCity = "kolhapur"
let accountState;

//accountID = 2 //not allowed because accountID is a constant

accountEmail = "abs.com"
console.log(accountID)
console.log(accountEmail)

console.table({accountID, accountEmail, accountPass, accountCity,accountState}) 

/*
only use let and const becoz the var is function scoped and can be redeclared and updated which can lead to bugs in the code.
but dont forget var
*/
