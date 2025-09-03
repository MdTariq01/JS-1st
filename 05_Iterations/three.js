// for of (used for arrays)

let array = [2,4,5,6,7]

// for of directly returns the value not the key
for (const nums of array) {
    console.log(nums); // output: 2 , 4 , 5 , 6 , 7
}

let greeting = "Hello World!"
for(const greet of greeting){
    if(greet === " "){
        continue;
    }
    // console.log(greet);   
}

//MAPS 
// In map we can't have duplicate key but we can have duplicate values and they will be stored the way they get set
const map = new Map()
map.set("IN" , "India")
map.set("USA" , "United State of India")
map.set("JP" , "Japan")
map.set("IN" , "France")

for (const items of map) {
    console.log(items);   // this will give in array 
}

for (const [country_code , country_name] of map) {
    console.log(country_code , ":-" , country_name) // this will write the individual values    
}

// now for of in object

const myobject = {
    name : "Java" ,
    othername : "Cpp"
}

for (const key of myobject) {
    console.log(key)
}

// Objects are not iterable i mean we can but not by for of