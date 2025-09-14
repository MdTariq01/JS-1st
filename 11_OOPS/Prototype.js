// let myName = "tariq     "

// console.log(myName.length);
// console.log(myName.truelLength);


myHeroes = ["Hulk" , "Thor"]

let heroPower = {
  Thor : "Hammer" ,
  Hulk : "Smash" ,

  getHulkPower: function() {
    console.log(`Hulk power is ${this.Hulk}`);
    
  }
}

Object.prototype.hitesh = function () {
  console.log(`Hitesh is present all object`);
  
}

// heroPower.hitesh()
myHeroes.hitesh()

Array.prototype.HeyHitesh = function () {
  console.log(`Hitesh is present`);
}

myHeroes.HeyHitesh()

// heroPower.HeyHitesh()

// Inheritance

const user = {
  username : "CHAI"
}
const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TAsupport = {
  makeAssignment: "JS ASSIGNMENT" ,
  fullTime : true,
  __proto__ : TeachingSupport
}

Teacher.__proto__ = user

// MODERN SYNTAX
Object.setPrototypeOf(TeachingSupport , Teacher) // TeachingSupport will inherite Teacher things

let AnotherUsername = "Tariq     "
String.prototype.trueLength = function () {
  console.log(`${this}`); // will give everything
  // console.log(`${this.name}`); // will give undefined
  console.log(`True length is: ${this.trim().length}`);
}

AnotherUsername.trueLength()

"Tea".trueLength()