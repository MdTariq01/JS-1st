class user {
  constructor(username , email , password) {
    this.username = username
    this.email = email
    this.password = password
  }
  encryptPassword() {
    return `${this.password}abc`
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`
  }
}

const newUser = new user("Tariq" , "tariq@tariq.com" , "123")

console.log(newUser.encryptPassword());
console.log(newUser.changeUsername());

// Behind the scene

function User (username , email , password) {
  this.username = username
  this.email = email
  this.password = password
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`
}

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`
}

const Alex = new User("Alex" , "Alex@gmail.com" , "124")

console.log(Alex.encryptPassword());
console.log(Alex.changeUsername());
