const accountId =144553
let accountEmail="jasneetarora@google.com"
var accountPassword="1234567"
/* prefer not to use var, stick to let and const. Var was used in old codes

because of issue in functional and block scope
*/ 
accountCountry="France" // this is also possible but it is not a good way to do the things.
let accountState;  // javascript will give undefined value because it has no value assocoiated with it.
accountEmail="jasprretbagga@gmail.com"
accountPassword="110695"
accountCity="Paris"

 // accountId=2 // not allowed changing a const value
console.table([accountEmail,accountId,accountPassword,accountCountry,accountState]) // gives the output in form of table
//console.log(accountId);