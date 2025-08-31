//FUNCTION PROTOTYPE

// function myfuc(parameter) {

// }

function hello() {
    console.log("Hello User");
    
}

hello // it's just a reference of function

// hello() // this will call the function

// function addNum ( num1 , num2 ) {
//     console.log(num1 + num2);
// }

function addNum ( num1 , num2 ) {
   return num1 + num2 // after return statement the execution of next line never happen
}

const ans =  addNum(2 , 4)

// console.log(ans);

function greeting (username) { // you can give the parameter a defalte value like username = "sam"
    if(!username) { // username === undefined and !username are same
        console.log("Enter name");
        return
    }
    return `${username} just loggedin`
}

const greet = greeting() // if argument not given then it's undefined

console.log(greet);


