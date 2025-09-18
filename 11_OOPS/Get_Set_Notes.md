# 🔹 Getters and Setters in JavaScript

JavaScript provides **getters** (`get`) and **setters** (`set`) to define **object properties with controlled access**.  
They allow you to run custom code when getting or setting a property instead of just directly reading or writing it.  

---

## ✅ 1. Getter (`get`)
- A **getter** is a method that is executed when a property is accessed.  
- It lets you **compute or transform values dynamically**.  
- **Syntax**:  
  ```js
  get propertyName() {
    // return something
  }
# 🔹 Getters and Setters in JavaScript

JavaScript provides **getters** (`get`) and **setters** (`set`) to define **object properties with controlled access**.  
They allow you to run custom code when getting or setting a property instead of just directly reading or writing it.  

---

## ✅ 1. Getter (`get`)
A **getter** is a method that is executed when a property is accessed.  
It lets you **compute or transform values dynamically**.

**Syntax:**
```js
get propertyName() {
  // return something
}
```
```
const user = {
  firstName: "Mohammad",
  lastName: "Tariq",
  
  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user.fullName);  // "Mohammad Tariq"

🔹 Access it like a property → user.fullName, not user.fullName().

```

---

## 2. Setter (set)

A setter is a method that runs when a property is assigned a value.
It lets you control how data is updated, validate input, or trigger side effects.

Syntax:

```js
set propertyName(value) {
  // assign or validate value
}
```

```js
const user = {
  firstName: "Tariq",
  lastName: "Mohammad",

  // setter
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

user.fullName = "Md Tariq";  
console.log(user.firstName); // "Md"
console.log(user.lastName);  // "Tariq"

```
--- 
## ✅ 3. Using get and set with Object.defineProperty

You can also define them explicitly using Object.defineProperty():

```js
function User(email) {
  this._email = email;

  Object.defineProperty(this, "email", {
    get: function() {
      return this._email.toUpperCase();
    },
    set: function(value) {
      this._email = value.toLowerCase();
    }
  });
}

let u = new User("Example@Mail.com");
console.log(u.email);   // "EXAMPLE@MAIL.COM"
u.email = "NewMail@Site.com";
console.log(u.email);   // "NEWMAIL@SITE.COM"

```

---
### ✅ 4. Key Points

get → Runs when reading a property.

set → Runs when writing to a property.

Useful for:

- Data validation

- Data transformation (e.g., auto formatting emails to lowercase)

- Encapsulation (hiding internal _properties)

- Can be used in:

- Object literals

- Classes

- Object.defineProperty

---

### 📊 Quick Comparison

| Feature  | Normal Property       | Getter/Setter Property           |
|----------|----------------------|----------------------------------|
| Access   | Direct read/write    | Runs custom code on get/set      |
| Use case | Store values         | Compute, validate, transform     |
| Syntax   | `obj.key = value`    | `get key() {}` / `set key(v){}`  |
