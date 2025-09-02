// IMMEDIATELY INVOKED FUNCTION EXPRESSION

// iife isused becaues it instantly executs and it don't get polluted by global scope

// to write iife just cover funtion with () and after that put another () just next to it
// eg.

(function chai () {
    console.log(`db connected`);   
})(); // to give parameter you can give in last paranthesis
// it is also called named iife

// no named iife- also called arrow function iife
( (name) => {
    console.log(`${name} just connected the db`);
})("Tariq");

// to run two iife side by side put ; after the first one

