// normally if we use for each loop we can't store the value 

const arr = [1 , 2 , 3 , 4 , 5 , 6]

// const data = arr.forEach( (items) => {
//     return items // although it's not giving an error but it will not give anything in return see it's the problem
// } )

// that's why we use filter it's just like for each but to store value it requires a conditiom

const data = arr.filter( (items) => {return items > 3}  )

console.log(data); // see it's not storing and giving the values 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let book = books.filter( (bk) => {
    return bk.genre == 'Fiction' && bk.edition >= 2000
} )

console.log(book);
