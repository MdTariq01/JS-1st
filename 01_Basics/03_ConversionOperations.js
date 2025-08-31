let num = "33"
let otherNum = Number(num)

// console.log(otherNum);
// console.log(typeof otherNum);

let password = "124abc"

let newPassword = Number(password)

console.log(newPassword) // output is Nan
console.log(typeof newPassword); // type although is Number

let isset = true

let realset = String(isset)

// console.log(realset);
// console.log(typeof realset);

// ****************** OPERATIONS ************************

/* 

console.log(3+2); // addition
console.log(3-3); // substration
console.log(3*3); // multiply
console.log(3**3); // power as 3^3
console.log(3/3); // divition
console.log(3%3); // remainder

*/

// always try to write clean code as clean as possible

// console.log(1+ "2"); // output is 12
// console.log("1" + 2); // output is 12

// console.log("1" + 2 + 2); // output is 122
// console.log(1 + 2 + "2"); // output is 32

console.log(+true); // output is 1 as true is converted to number (Binary)

// console.log(+"a"); // adding + acts as type conversion to Number like [Number()]

// increment operator by mdn 

