const username = ""

if(username){
    console.log(`${username} just loggedin`);
} else {
    console.log(`enter name`);
}

// falsy value: false , "" , 0 , -0 , 0n , null , undefined , BigInt , NaN

//truthy values: [] , "  " , 'false' , {} , funtion() {}  

//how to check if object is empty

const myobj = {};

if (Object.keys(myobj).length === 0) { // object.keys() convert it to array and then .length gives it's lenght and if then we can check it's value
    console.log(`object is empty`);
    
}
