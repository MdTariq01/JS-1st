const myArray = [0 , 1 , 2 , 3 , 4 , true , "tariq"]; // array can have any element

// arrays in java are resizable 

const array = [0 , 1 , 2 , 3 , 4 , 5 , 6]

console.log(array[5]);

const myheroes = new Array("Ironman" , "spiderman")

console.log(myheroes);

// array methods

myheroes.push("Captain america") // .push adds an element in the last place

myheroes.pop(); // this will remove the last element of the array

console.log(myheroes.unshift("Hulk")); // puts the first element in array as the paramete is given 

console.log(myheroes.shift());// will remove the first index


console.log(myheroes.includes("Ironman")); // will check and return value in bool

console.log(myheroes.indexOf("Ironman")); // will return index

console.log(myheroes.join()); // change array elements to string separated with comma

const numbers = [0,1,2,3,4,5,6,7,8];


console.log("A " , numbers);

console.log(numbers.slice(1,3)); // just makes a copy and include the index first given and one less than the last index given 
//MORE IMPORTANTLY IT WILL NOT AFFECT THE ORIGINAL ARRAY IT WILL REMAIN SAME 


console.log("B " , numbers);

const mynumber1 = numbers.splice(1,3) // make a cut and include both the index given and in between
//MORE IMPORTANTLY THE PART SPLICED IT WILL BE REMOVED FROM THE ORIGINAL ARRAY IT'S LIKE DELETING THAT PART FROM ARRAY ANF JUST MAKE A NEW ONE OF THE DELETED PART

console.log("C " , numbers);

console.log(mynumber1);

// pop shift unshift includes indexof .join slice splice
