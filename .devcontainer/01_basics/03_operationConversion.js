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


//***********************************************   OPERATIONS       ************************************************* 
/*
let value = 7
let negValue = -value
console.log(negValue);

console.log(3+3);//6
console.log(3*3);//9
console.log(3-3);//0
console.log(3**3); //** indicates raised to power output will be 27
console.log(2/3);
console.log(2%3);
*/ 

let str1 = "Jasneet"
let str2 = "Singh"

let str3 = str1+ str2
console.log(str3); 
/*
console.log("1"+2); //12
console.log(1+"2"); //12
Here both the operations are giving output as 12 so we need 
to check whats happening here actually. Both of these are complex situations
console.log("1"+2+2); //122
console.log(1+2+"2"); //32
*/
/*
now we have to check why such answers are occuring like 122 and 32 why 1+2 happened in the fourth code? 
ANS:-String first=>all treated as string
if operations first and string last then first operations will happen and then string will get attached 
more detailed answer is in this link:- https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
read about abstract operations to get more details
Use parenthesis to get more clarity on which operation to perform first and thats preferred in the industry
*/ 
console.log(+true);// it gives output as 1 and,
//console.log(true+); this is not possible
console.log(+"");// we know empty parenthesis give value=0

//let num1,num2,num3

//num1 = num2 = num3 = 2+2       such code dont improve the readability of the code and are not preferred.

let gameCounter = 100
gameCounter++; //here ++gameCounter also showing up 101 as value but it is prefix increment
console.log(gameCounter);// value increased by 101 output of postfix increment.

//Study about postfix and prefix operations from mdn.0

//The link to the document is: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
/*
POSTFIX INCREMENT : If used postfix, with operator after operand (for example, x++), 
the increment operator increments and returns the value before incrementing.
*/
let x = 3;
const y = x++;   // x is 4; y is 3
console.log([x,y]);
let x2 = 9n;
const y2 = x2++; // x2 is 10n; y2 is 9n
console.log([x2,y2]);
/*
PREFIX INCREMENT : If used prefix, with operator before operand (for example, ++x), 
the increment operator increments and returns the value after incrementing.
*/
let x = 10;
const y = ++x; // x is 11; y is 11
console.log([x,y]);
let x2 = 3n;
const y2 = ++x2; // x2 is 4n; y2 is 4n
console.log([x2,y2]);

//NOTE:- ++(++x); SyntaxError: Invalid left-hand side expression in prefix operation.
