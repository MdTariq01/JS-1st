// basic syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// break can be used to break the loop

// continue is used to just skip that iteration

for (let i = 1; i <= 10; i++) {
    console.log(`Table of ` + i); 
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " +  j + " = " +  i*j);
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}