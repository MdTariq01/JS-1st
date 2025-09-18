class user {
  constructor(username , email , password) {
    this.username = username
    this.email = email
    this.password = password
  }
  get email() {
    return `${this._email.toUpperCase()}`
  }

  set email(value) {
    this._email = value
  }

  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value
  }
}

const Alex = new user("alex dunphy" , "alex@tariq.com" , "abc")
console.log(Alex["password"])
console.log(Alex["email"])