const coding = [ "js" , "cpp" , "swift" , "rust"]

//basic syntax
coding.forEach( function () {} )// basic syntax

function items(vals) {
    console.log(vals);
}

// coding.forEach(items); // you can also pass the function like this

coding.forEach( (items , arr , index) => {
    // console.log(items , arr , index);
} )

// in forEach loop we pass parameter a functions and in that function if we pass one parameter we will get the item values if 2 then 2nd will have index anf if 3rd then 3rd will have the whole array

const myCoding = [
    {
        langName : "JavaScript" , 
        symbol : "js"
    },

    {
        langName : "Java" , 
        symbol : "java"
    },

    {
        langName : "Python" , 
        symbol : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
    
})