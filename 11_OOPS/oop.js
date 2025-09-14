const user = {
    username : "Tariq" ,
    loginCount : 8 , 
    signedIn : true ,

    getUserDetails: function () {
      // console.log('Got user details from database');
      console.log(`Username: ${this.username}`);
      console.log(this);
      
    }
}

// console.log(user["username"]);
// console.log(user.getUserDetails());
// console.log(this); // will give {} as in global context here is empty

// but if we do this in browser console then we will get window and all

// Constructor function

// const promiseOne = new Promise()
// const date = new Date() // new here is constructor function we can make object literals from one object

function User (username , loginCount , isloggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    // return this; // will return everything and if don't this it work too

    //we can also give function here

    this.greeting = function(){
      console.log("Welcome" + this.username);
      
    }
}

// const userOne = User("Tariq" , 12 , false);
// const userTwo = User("Md Tariq" , 11 , true);

const userOne = new User("Tariq" , 12 , false);
const userTwo = new User("Md Tariq" , 11 , true);
// console.log(userOne);
console.log(userTwo.constructor);

// the moment we use new the empty object creates called instance 
// constructor function call happens by new keyword this will pack all arguments and give
// then the arguments injected in this keyword
// then we get it

// (instanceof) checks if the instance is same 