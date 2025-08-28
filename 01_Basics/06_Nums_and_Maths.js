const score = 100;

const total = new Number(200);

// console.log(score);
// console.log(total);

// console.log(total.toString()); // will turn it into string 
// now as this is turned into a string now we can use any string method in this

// console.log(total.toString().length);

// console.log(total.toFixed(2)); // to show precision after 2 digits of the number

const otherNumber = 124.879;
// console.log(otherNumber.toPrecision(4)); // this roundoff normally but till the digit that is given in the parameter and the digit starts from right 

// console.log(otherNumber.toPrecision(3));

const hunderds = 1000000;
// console.log(hunderds.toLocaleString()); // this is used to put comma that will make it easier to read and firstly it will do it in millions but to change it for indian style give a parameter as-

// console.log(hunderds.toLocaleString('en-In')); // this parameter


// ++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-20)); // this will give value not the sign
// console.log(Math.round(4.6)); // just round off
// console.log(Math.ceil(4.3));
// console.log(Math.floor(3.1));
// console.log(Math.max(4,3,2,5,7));
// console.log(Math.min(4,3,2,5,7));

console.log(Math.random()); // will give number between 0 and 1 randomly

console.log((Math.random()*10) + 1); // this will give between 1 to 10

console.log(Math.floor((Math.random()*10)) + 1); // this will remove decimals it will give just numbers

// formulae to select the random number between the two numbers

const min = 10;
const max = 20;

// console.log(Math.floor((Math.random() * (max - min + 1)) + min));

console.log(Math.floor((Math.random() * (max - min + 1)) + min));

console.log(Math.floor((Math.random() * (max - min + 1)) + min));















