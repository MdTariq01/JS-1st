function setUserName(userName) {
  // complex call
  this.userName = userName
} 

function createUser(userName , email , password) {
  setUserName.call(this , userName)
  this.email = email 
  this.password = password
}

const chai = new createUser("chai" , "chai@chai.com" , 124)
console.log(chai);

// basically if we call another function inside a function then in stack this keyword will do problem as it will
// not know which to give context then it will give {} empty object 

// for better use call() and pass this and other parameter with it

/*

1. The (this) keyword

this refers to the execution context of the function.

Inside a normal function call, this refers to the global object (window in browser, global in Node.js).

Inside a constructor (function called with new), this refers to the newly created object.

2. The call() method

functionName.call(thisArg, arg1, arg2, ...)

It explicitly sets the value of this when calling a function.

Useful when you want to reuse another function’s logic in a different context.

*/