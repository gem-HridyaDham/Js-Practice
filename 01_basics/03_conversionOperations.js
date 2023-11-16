let score = "33"
console.log(typeof score); // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log("----------------------");
//but what if


let updatedScore = "33abc"
console.log(typeof score);

let updatedValueInNumber = Number(updatedScore)
console.log(typeof updatedValueInNumber) //number
console.log(updatedValueInNumber); //NaN

console.log("----------------------");

let value = null
console.log(typeof value); //object

let updatedValue = Number(value)
console.log(typeof updatedValue); //number
console.log(updatedValue); // 0

console.log("----------------------");

let undefinedValue = undefined
console.log(typeof undefinedValue); //undefined

let updatedUndefinedValue = Number(undefinedValue)
console.log(typeof updatedUndefinedValue); //number
console.log(updatedUndefinedValue); // NaN

console.log("----------------------");

let stringValue = "hridya"
console.log(typeof stringValue); //string

let updatedStringValue = Number(stringValue)
console.log(typeof updatedStringValue); //number
console.log(updatedStringValue); //NaN

//Notes
// "33" => 33
// "33abc" => NaN
// true => 1, false => 0
// 1 => true, 0 => false
// "" => false, "hridya" => true
// 56 => true
// 33 => "33" 

console.log("--------------------");

let isLoggedIn = 1;
console.log(typeof isLoggedIn); //number

let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof boolIsLoggedIn); //boolean
console.log(boolIsLoggedIn); // true

