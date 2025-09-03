const myNumber = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// const data = myNumber.map( (items) => items*2  )

// console.log(data);

// map is a method just like for each but a better way as it can return and do any operation

// but filter only returns true or false conditions

// so best is 

// const data = myNumber.filter( (items) => items > 5 )

// console.log(data);
/*

📊 Difference: .map() vs .filter()

Feature	     |                  .map()  	                                             |                     .filter()
Purpose	     |           Transforms each element of an array	                         |       Selects elements that satisfy a condition
Return type	 |    Always returns a new array of the same length (unless empty input)	 |   Returns a new array that may be shorter (or empty)
Callback     |    return	The callback should return a value (new transformed item)    |	The callback should return a boolean (true to keep the item, false to remove it)
Mutation	 |           Does not modify the original array	                             |            Does not modify the original array
Use case	 |             When you want to modify every item	                         |         When you want to filter out items

*/

//chaining 
// we can chain map and filter in any way we want and it will be really helpful

//map is used for all elements and filter is used to select a particular number
// filter is used to basically apply some conditions
const data = myNumber.filter( (items) => items > 5 ).map( (items) => items*2 ).filter( (items) => items < 18)
console.log(data);