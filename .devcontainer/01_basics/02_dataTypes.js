"use strict"; // this treats all Js code in new version but once this is implemented we can not go back to the older version

//alert("hello champ") 
 /*
 we are using nodejs (so we can not use alert) , not browser while alert works mainly in browser 
as studied earlier that js was earlier embedded inside browser and runs quite well there.
*/ 
// code readability should be high so dont intend to mismatch things which are simple. 
/*  console.log(5+6); console.log("Raman"); 
we get output but this practice is not allowed
*/ 


let name="Jasneet" // string
let age=21 //number
let isLoggedIn= false //boolean
let state; //undefined 
//DATA TYPES BELOW
/*
Primitive data types 
 number=> 2 to power 53 (range)
 bigInt: used very rarely in websites like reddit,facebook etc
 string=> " " prefer double quotes but can also be used in single quotes
 boolean=> true/false
 null=> stand-alone value (representation of empty value)
 undefined=> value not defined yet/ not assigned yet..
 symbol=> helps find uniqueness and mostly will be used when we study react 
 Object is other than primitive data type.
object (will study them in detail)
*/ 
 
console.log(typeof "jasneet"); 
console.log(typeof age);
console.log(typeof null); // gives output as object (This is sometimes considered as language error but things work this way.)
console.log(typeof undefined); // gives output as undefined 