function multiplyby5 (num) {
  return num*5;
}

multiplyby5.power = 2

console.log(multiplyby5(5));
console.log(multiplyby5.power);

console.log(multiplyby5.prototype);

//Every thing is object in js even function 

function createUser(username , score) {
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printme = function () {
  console.log(`price is ${this.score}`)
}
const chai = new createUser("Chai" , 25)
const tea = new createUser("tea" , 309)

chai.printme()