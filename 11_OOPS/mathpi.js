console.log(Math.PI);
// even if we change this math.pi value it will not change as it property is descripted using .getOwnPropertyDescriptor
Math.PI = 2;
console.log(Math.PI); // see it's still not changed
 
const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")

// .getOwnPropertyDescriptor this property gives the info about the property
// it takes the object then other one is the property we want to know about

console.log(descriptor);

const user = {
  username : "Tariq" ,
  email : "Alex@gmail.com",
  password : "12vdn" ,

  greeting: function () {
    console.log(`Hello User`);
  }
}

console.log(Object.getOwnPropertyDescriptor(user , "username"))

Object.defineProperty( user , "username" , {
    writable: false,
    enumerable: false,
  configurable: false
})

console.log(Object.getOwnPropertyDescriptor(user , "username"))

for (let [key , value] of Object.entries(user)) {
  if(typeof value !== 'function') { // check for the function 
    console.log(`${key} : ${value}`); 
  }
}
