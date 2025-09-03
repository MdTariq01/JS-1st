// .reduce

// used to add values in a shopping cart it has 2 values accumulator and a current value ,
//  the initial value is given and it will be added to the accumulator and after that each iteration current value and accumulator 
// value is added and stored to accumulator 
// current value is the value of array of that element

// eg.
// const price = [1 , 2 , 3]

// const totalprice = price.reduce(function (acc , currVal) {
//     console.log(`accumulator value ${acc} and current value ${currVal}`);
//     return acc+currVal
// } , 0 )

// console.log(totalprice);

// now in arrow function

const course = [
    {
        Course_name: "Web dev" ,
        price : 599
    } ,
    {
        Course_name: "Python" ,
        price : 999
    },
    {
        Course_name: "Data Science" ,
        price : 5999
    },
    {
        Course_name: "Android dev" ,
        price : 7999
    }
]

// first one is accumulator 
// the second one is for current value from the array

// const totalcost = course.reduce( (accumulato , current value) => (accumulator + current value) , 0 ) // basic prototype
const totalcost = course.reduce( (acc , items) => (acc + items.price) , 0 )
console.log(totalcost);
