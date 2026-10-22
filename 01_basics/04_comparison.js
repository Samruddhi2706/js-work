// console.log(5 > 3); // true
// console.log(5 < 3); // false
// console.log(5 >= 3); // true
// console.log(5 <= 3); // false
// console.log(5 == 3);
// console.log(5 != 3); // true


console.log("2" > 1)
console.log("02" > 1)


console.log(null > 0)// false because null is converted to 0, so the comparison becomes 0 > 0, which is false
console.log(null == 0)// false because null is not equal to 0
console.log(null >= 0)// true because null is converted to 0, so the comparison becomes 0 >= 0, which is true


console.log(undefined == 0) // false because undefined is not equal to 0
console.log(undefined > 0) // false because undefined is converted to NaN, and any comparison with NaN is false
console.log(undefined < 0) // false because undefined is converted to NaN, and any comparison with NaN is false


//strict checking
console.log("2" === 2) // false because the types are different (string vs number)