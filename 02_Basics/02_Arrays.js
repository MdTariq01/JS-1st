// push() , concat() , spread , .flat() , isArray() , from() , .of()

const Marvel_Hero = [ "Ironman" , "Hulk" , "Captain America" , "Thor"]

const dc_Hero = [ "Batman" , "Superman" , "Flash" ]

// Marvel_Hero.push(dc_Hero) // this will append the array as array in the existing array and will not make new array

// console.log(Marvel_Hero);

const new_Hero = Marvel_Hero.concat(dc_Hero) // .concat will make new array and concat both arrays normal element without any problem in 1D

// console.log(new_Hero)

// but there is a better way to CONCAT ARRAYS.

const other_hero = [...Marvel_Hero , ...dc_Hero] // BETTER AND WE CAN ADD AS MANY AS ARRAY IN ONE

console.log(other_hero);

const numbers = [ 1 , 4 , [ 5 , 6 ] , 7 , [ 8 , 9 , [ 10 , 11]]] 
// it's a 3d array to make it 1d we use .flat

console.log(numbers.flat(1)); // parametr is the dimentions from it will be flated

console.log(Array.isArray(numbers)); // will tell this parameter given is array or not in boolean 
console.log(Array.isArray("Tariq"));

console.log(Array.from("Tariq")) // this will make array of the given parameter
console.log(Array.from(numbers))


// INTERESTING ONE FOR INTERVIEW

console.log(Array.from({name: "Tariq"})); // it's an object as it don't know what to make a array from it will just return the empty array
console.log(Array.from(name =  "Tariq")); // will work

const score1 = 100;
const score2 = 200;
const score3 = 400;

console.log(Array.of(score1 , score2 , score3)); // this of() method will make of the arguments that are given

// from() and of() and isArray()
