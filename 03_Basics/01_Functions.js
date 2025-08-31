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

// const greet = greeting() // if argument not given then it's undefined

// console.log(greet);


// +++++++++++++++ shopping cart +++++++++++++++++++++(Number of arguments are not known) 

function cartprice (val1 , val2 , ...num1) { // (...) is rest operator used
    return num1
}

// console.log(cartprice(200,500,600,700)); // so the first is val1 , second is val2 and the remaining is in num1 which has rest operator

// ++++++++++ funtion in object ++++++++++++++

const user = {
    username: "Tariq" ,
    price: 133
}

function objectfunction(anyobject) {
    return `Name is ${anyobject.username} and price is ${anyobject.price}`
}

// console.log(objectfunction(user));

console.log(objectfunction({
    username: "MD TARIQ" ,
    price: 134
}));

const arr = [ 1 , 2 , 3 , 4 , 5 ]

function myArray(array) {
    return array[1]
}

console.log(myArray(arr));

console.log(myArray([3,5,6,6]));

