// singleton is created when we declare an object like this-
// Object.create

//BUT we use this one we make literals of the object- 

// const obj = {}

const mysymbol = Symbol("Key") // don't use new

const myobj = {
    name: "Tariq" ,
    "Full name" : "MD TARIQ" , // will not be accessed by . operator we'll have to use myobj["Full name"]
    [mysymbol] : "mykey" ,
    age: 19 ,
    email: "tariq@mail.com" ,
    location: "Delhi" ,
    isloggedIn : false,
    lastLongin : ["Monday"]
}

// by default the keywords are declared as string like name , age , etc.

// to access we use . <-- operator or [""] <-- this one 

console.log(myobj.name);
console.log(myobj["name"]);

// to declare symbol in object we first create it normally then we use brackets and inside them we put the identifier then we give it's value

// and to access it we use --> []
// eg.

console.log(myobj[mysymbol]);

// to change value of the key we use 

myobj.location = "Mumbai";
myobj["isloggedIn"] = true;

console.log(typeof(myobj));

// Object.freeze(myobj) // this will now prevent to change of any value 

// myobj.name = "MD TARIQ"
// console.log(myobj.name); // name didn't changed

myobj.greeting = function() {
    console.log("Hello World! ");
}

myobj.greeting2 = function() {
    console.log(`Hello user, ${this.name}`); // to access any object from same object we can use "myobj." keyword although we use "this." keyword which is better
}


// console.log(myobj);

console.log(myobj.greeting); // [Function (anonymous)]
console.log(myobj.greeting()); // Hello World!

console.log(myobj.greeting2());

console.log(myobj);  // it stores as .greeting not as .greeting()