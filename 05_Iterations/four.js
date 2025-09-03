// for in loop

const myobject = {
    js : "javascript" ,
    cpp : "c++" ,
    rb : "ruby" ,
    swift : "swift by apple"
}

for (const key in myobject) {
    // console.log(key); // will return the keys not the object 
    // console.log(myobject[key]); // just like array 
}

let arr = [1 , 3 ,5 , 6 , 7];

for (const key in arr) {
    // console.log(key); // will return index
    // console.log(arr[key]);
}

const map = new Map()
map.set("IN" , "India")
map.set("USA" , "United State of India")
map.set("JP" , "Japan")
map.set("IN" , "France")

for (const key in map) {
    // console.log(key); // will not give anything as maps are iteratable
}

// Maps are not iteratable

const name = "Tariq"
for (const key in name) {
    console.log(name[key]);
}