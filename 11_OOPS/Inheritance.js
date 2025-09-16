class User {
  constructor(username) {
    this.username = username
  }
   logMe() {
    console.log(`${this.username} is your username`);
   }
}

class Teacher extends User {
  constructor(username , email , password) {
    super(username)
    this.email = email
    this.password = password
  }
  TeacherAddCourse() {
     console.log(`New course is added by ${this.username}`);
     
  }
}

const gloria = new Teacher("Gloria" , "gloria@gmail" , "124vn")
const jay = new User("Jay Prichet")


gloria.TeacherAddCourse()
jay.logMe()
gloria.logMe()

console.log(jay === gloria);

console.log(jay instanceof User);

console.log(gloria instanceof User);




