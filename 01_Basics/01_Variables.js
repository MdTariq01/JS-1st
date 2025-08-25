const account_name = "Ajay"
let account_num = "123"
var account_code = "acb123"
account_branch = "Delhi"

console.table([account_name , account_num , account_code , account_branch])

// don't use var because it has scoping problem 

// const is used as it never changes after declaring 

// you can only change let variable

// we can also use a identifier without giving it the variables

// if we don't defined the variable like if we only declare it then it's value will be undefined 
// eg.

let name;
console.log(name); // output : undefined
