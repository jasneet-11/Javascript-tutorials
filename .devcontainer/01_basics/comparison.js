/*
console.log(5>1); //returns answer in the form of true/false
console.log(5>=1);
console.log(5<1);
console.log(5==1);
console.log(5!=1);
*/
console.log("5">1);
console.log("05">1);
//both give true output bcoz in both scenarios two is greater than one,While comparing two values always ensure that their data type remains same.
console.log(null >  0); //false
console.log(null == 0); //false
console.log(null >= 0); //true why but? Here the problem of value conversion occurs 
//REASON: The operators equality check (==) and (>,<,>=,<=) work diffrently.Comparisons convert null to a number, treating it as zero
//Thats why null >= 0 is true and null>0 is false.
console.log(undefined == 0);// false 
console.log(undefined > 0);//false
console.log(undefined < 0);//false
// We try to avoid such comparisons because they increase the chances of happening of errors and while implementing on large databases such things need to be avoided. 

// === checks values strictly also checks data type

console.log("2"===2)//again gives false as it has different data type.