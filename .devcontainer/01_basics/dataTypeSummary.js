/*
1.) Primitive data types
7 types:- String,Number,Boolean,null,undefined,Symbol,BigInt 
The predefined data types provided by JavaScript language are known as primitive data types. 
Primitive data types are also known as in-built data types.

2.)Reference(Non-primitive)
array, object and functions are its part.
*/
/*
note:_ JavaScript is a dynamically typed language,
 which means that data types of variables are determined by the value they hold at runtime 
 and can change throughout the program as we assign different values to them.
 */ 
const score=100// number 
const scoreValue=0.3 //number

const isLoggedIn= false// boolean
const OutsideTemp= null// null
let uderEmail;// undefined

const userId = Symbol('1234')
const anotherId = Symbol('1234')
/*
Symbol(description?: string | number | undefined): symbol
Description of the new Symbol object.
Returns a new unique Symbol value
*/

console.log(userId==anotherId); // even we enter same values in the two variables output is false.
const bigNumber = 84378347893473488n // using n after the number makes it a part of BigInt

const heroes = ["Shaktiman", "Gohan", "Vegeta", "Broly"] // Array 

 let myObj={     //example of object
    name:"Jasneet",
    age:21,
}

const myFunction = function(){
        console.log("Hello World");
}
console.log(myFunction);

//To determine data type we can use typeof function...

console.log(typeof bigNumber);
console.log(typeof null);
console.log(typeof heroes);
console.log(typeof myFunction)
console.log( typeof myObj);
console.log(typeof anotherId); //symbol 