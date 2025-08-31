let a = 200;

if (true) {
    let a = 10
    const b = 3
    var c = 1
    console.log("Inner" , a);
    
}

console.log("Outer" , a); // value of a is still 200 not 10 that was inside the block


// console.log(a) 
// console.log(b) 
console.log(c) // var is coming out of the if so it has scoping problem

