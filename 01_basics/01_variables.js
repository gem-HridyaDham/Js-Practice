const accountId = 144553
let accountEmail = "hridya@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;


// accountId = 2; //not allowed 
accountEmail = "hdhd@gmail.com"
accountPassword = "22121"
accountCity = "Dehradun"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

