// const user = new Object() // singlton objects
const user = {} // literal objects

user.id = "123acb";
user.name = "alex";
user.isloggedIN = false;

// console.log(user);

const regularUser = {
    email : "my@gmail.com" ,
    fullname : {
        userfullname : {
            firstname : "MD" ,
            lastname : "TARIQ"
        }
    } 
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

// +++++++++++++++++++++++++++++ COMBINING 2 OBJECTS ++++++++++++++++++++++++++++++++++++

const obj1 = {
    1 : "a" ,
    2 : "b" ,
    3 : "c"
}

const obj2 = {
    4 : "d" ,
    5 : "e" ,
    6 : "f"
}

// const obj3 = { obj1 , obj2 } // will do nesting

// BETTER VERSION-
// const obj3 = Object.assign( {} , obj1 , obj2); // {} is not compalsari but it's good to put it there
// as if we don't put this {} then everything will go to obj1 but if we put this {} then it will create a new object

// more better version
const obj3 = {...obj1 , ...obj2}; // just like array
// console.log(obj3); 

// ++++++++++++++++++++++++++++++ A BIT LIKE DATABASE ++++++++++++++++++++++++

// so when we get date from database it usually come in form of array of object

const data = [
    data1 = {
        id : "abc123" ,
        name : "xyz" ,
        email : "xyz@gmail.com"
    } ,
    data2 = {
        id : "abc123" ,
        name : "xyz" ,
        email : "xyz@gmail.com"
    } ,
    data3 = {
        id : "abc123" ,
        name : "xyz" ,
        email : "xyz@gmail.com"
    }
]

console.log(data[2]) // as it's like a array we call it like we do it in array

console.log(user);

// ++++++++ IMPORTANT +++++++++++

console.log(Object.keys(user)); // this will take keys from that object and make an array of those so we will be able to use loops ans makes it easier
console.log(Object.values(user)) // just like above but for values not for keys

console.log(Object.entries(user)); // just like above for for a whole key and value 
// like this = [ [ 'id', '123acb' ], [ 'name', 'alex' ], [ 'isloggedIN', false ] ]

// very useful
console.log(user.hasOwnProperty("isloggedIN")); // will check if this key exist in the object or not returns boolean 
console.log(user.hasOwnProperty("islogged"));

