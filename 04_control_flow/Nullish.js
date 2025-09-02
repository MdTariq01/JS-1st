// Nullish Coalescing Operator(??) : null and undefined

// a ?? b → returns a if a is not null/undefined, otherwise returns b. 

let val1 ;
val1 = 5 ?? 10; // 5 as it's not null or undefined
console.log(val1);

/* In summary:
 The nullish coalescing operator (??) is a safe and concise way to provide default values in JavaScript,
 ensuring that only null and undefined trigger the fallback, while other valid values (like 0, false, "") remain unchanged.
*/

// eg.

let val2 ;
val2 = null ?? "VALUE IS NOT VALID"

console.log(val2);

//Ternary Operator

// (condition) ? expression : expression

const value = 120;

(value>100) ? console.log("Higher than 100") : console.log("less than 100");

