const myobj = {
    username : "Tariq" , 
    id : "123abc" , 
    mygreeting() {
        console.log(`${this.username} , just loggedIN`);   // we use this here 
        console.log(this); // basically this here gives all the info about the object is it's printed inside it
    }
}
//  console.log(this);
// console.log(myobj.mygreeting());
// myobj.mygreeting();
// myobj.id = "098mnb";
// myobj.mygreeting();

// console.log(this); // outside it returns an empty object {}

function myfun() {
    console.log(this); // here it will return some differnt value like global and other things
}

// myfun()

function myfun1() {
    let username = "tariq"
    console.log(this.username); // will return undefined 
}

// myfun1()

// ++++++++++++++++++++ Arrow Function +++++++++++++++++

// const addtwo = (num1 , num2) => { // just normally diclare array like this and remove function name and add arrow => after the paraentheses
//     return num1 + num2 // this is a bit long so 
// }

// const addtwo = (num1 , num2) => { return num1 + num2 } // can do this (did nothing just moved the bracket up)

// after that
// const addtwo = (num1 , num2) =>  num1 + num2 // remove return and brackets just do this this will work

// better way add paranthesis  too will not required return

const addtwo = (num1 , num2) =>  (num1 + num2) // best way it's a arrow function in just one line

console.log(addtwo(1,4));

// You can return object too

const myobjectFunction = (name) => ({username : name}); // paranthesis will act as return in one liner arrow function

console.log(myobjectFunction("tariq"));

// Arrow function basic syntax
// () => {} or () => () both will work but {} will require return 

// and in arrow function (this) do not work

const arrowcheck = () => {
    console.log(this);
}

arrowcheck() // see not working just printing empty object {}