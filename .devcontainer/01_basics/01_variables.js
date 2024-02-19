const accountId =144553
let accountEmail="jasneetarora@gmail.com"
var accountPassword="1234567"
/* prefer not to use var 
because of issue in functional and block scope
*/ 
accountCity="Jodhpur" // this is also possible but it is not a good way to do the things.
let accountState;  // javascript will give undefined value because it has no value assocoiated with it.
accountEmail="jasprretbagga@gmail.com"
accountPassword="110695"
accountCity="Paris"

 // accountId=2 // not allowed changing a const value
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]) // gives the output in form of table
//console.log(accountId);