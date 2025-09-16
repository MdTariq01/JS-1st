class User {
  constructor(username) {
    this.username = username
  }
  logMe() {
    console.log(`username: ${this.username}`);
  }
  static createID() { // static will not give access to others
    return  `123`
  }
}

const Tariq = new User("Tariq")
console.log(Tariq.createID())