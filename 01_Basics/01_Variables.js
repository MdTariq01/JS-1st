const myNumber = 12445
let myName = "Tariq"
var myAge = "19"

myCity = "Delhi"

// console.log(myNumber)
console.table([myNumber , myName , myAge , myCity])

// myNumber = 12 const will not change
myName = "MD TARIQ"
myAge = "20"
myCity = "Kolkata"
console.table([myNumber , myName , myAge , myCity])

let newCity = myCity 
console.log(newCity)

// Prefer not to use var because it has scoping problem Only use let it's better

let myStudies;
console.table([myNumber , myName , myAge , myCity , myStudies])