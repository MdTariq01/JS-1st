let a = 200;

if (true) {
    let a = 10
    const b = 3
    var c = 1
    console.log("Inner" , a);
    
}

// console.log("Outer" , a); // value of a is still 200 not 10 that was inside the block


// console.log(a) 
// console.log(b) 
// console.log(c) // var is coming out of the if so it has scoping problem


function one() {
    const username = "tariq"

    function two() {
        const website = "youtube"
        console.log(username)
    
    }
    // console.log(website);

    two()
}

one()

if(true){
    const name = "Tariq"
    if(name === "Tariq") {
        console.log(name)
        const website = "youtube"
    }

    // console.log(website);
}

// ++++++++++++++ Interesting +++++++++++++++++++++
addone(6) // will work
function addone(num){
    return num+=1
}

addtwo(6) // will not work as the function is initialized in the next line 
const addtwo = function(num) {
    return num+=2
}

