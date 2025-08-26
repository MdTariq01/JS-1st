// Primitive and Reference(Non-Primitive)

// in primitive everything store in the stack memory and in this there we get a copy of things

let name = "noName"
let myname = name
myname = "otherName"

console.log(name);
console.log(myname);

// so in primitive datatype we also get a copy so if here we changed the variable but the original did't get changed

// in Non-Primitive value in heap and we get a refernce to it so if we change the value the other value will also change 

let person = {
    email: "Tariq@gmail.com",
    phone: 24224
}

newperson = person

newperson.phone = 12443

console.log(person.phone)
console.log(newperson.phone)

// as here in this eg. both's phone changed to 12443 as the value changed but the refernce was onto the same the same value 
