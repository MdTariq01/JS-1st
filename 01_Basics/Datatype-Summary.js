// primitive

// 7 types : string , number , boolean ,null , undefined , symbol , bigInt

// for checking the datatype just simply use typeof() method in console.log

// as js is dynamically typed language we don't have to tell the datatype js will automatically detect the datatype during runtype
//eg.
let score = 100 // datatype auto detected

let bigNumber = 345678909876567890n // bigInt

// Reference(not primitive)

// array , object , function
let hero = ["ben10" , "spider man" , "ironman"]

let obj = {
    // object 
    name: "tariq",
    age: 12
}

const myfunction = function() {
    console.log("Hello World!!!");
    
}

console.log(typeof obj);

// type of null is object

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them...

//primitive typeof values : 
// Number => number
// String => string
// Boolean => boolean
// null => object
// Undefined => undefined
// Symbol => symbol
// BigInt => bigint

//for non prem 
// array => object.
// object => object.
// function => function. // said as : (function object)
