let score = true 
/*
for 33 here the output will give as string. after running statements 10 and 11 we will chaange this to 33abcdef. output=>NaN
 now we change the value to  null and see what happens typeof null is object. output=> 0
 Now we set value to undefined=>NaN if we make it true=> 1 
*/
let score1=true
/*
const {score}= req.body // here we have requested value from the frontend and we dont know what value we have recieved.
So we write a console statement 
*/
console.log(typeof score);
console.log(typeof (score)); 
console.log(typeof score1);

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // with 33abcdef it gives NaN as output which means not a number.
//Be careful while checking the value of NaN. It means that value was not converted as ut was not a complete number.
//NOTES:- 
/*
35=>35
35abcde=>NaN and it`s type is number
true=>1; false=>0 vice-versa also true
""=> false 
"jasneet"=>true
*/

// let isLoggedIn = 1 gives output true 
let isLoggedIn="Jasneet" // when empty gives output as false and when string contains something output is true.

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let somenumber=54

let stringNumber= String(somenumber)
console.log(somenumber);
console.log(typeof somenumber); // this will give 54 as answer bcoz somenumber has value stored 54 that is number
console.log(typeof stringNumber); // we see that number is converted in string.