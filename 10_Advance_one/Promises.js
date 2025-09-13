// maximum time we consume the promise although we create too but we consume more

// const promiseOne = new Promise() // creation of promise

const promiseOne = new Promise(function (resolve , reject) {
  // do an async task
  // work like network related , DB work , cryptography

  setTimeout(() => {
    console.log('Async task completed');
    resolve();  // this will connect the promise to .then 
  } , 0)
  
}) 

// first we create promise and then we consume it 

promiseOne.then( function () { // .then automatically the parameter from the promise that the work is done
  console.log("Promise consumed ")
}); // .then() has direct connection with resolve

new Promise(function(resolve , reject) { // we don't have to put this in a variable this also work in promise
  setTimeout( () => {
    console.log('Async task 2')
    resolve();
  }, 1000)
}).then(()=> {
  console.log('Async 2 resolved')
})

const promiseThree = new Promise(function(resolve , reject) {
  setTimeout( () => {
    resolve({
      userName : "Tariq",
      id : "124abc" ,
      password : "010101"
    }); // we can also pass data in resolve 
  } , 1000)
})

promiseThree.then(function(user) { // this is how we pass data in promise resolve
  console.log(user)
})

const promiseFour = new Promise(function(resolve , reject) {
  setTimeout(()=> {
    let error = true
    if(!error) {
      resolve({username : "Tariq" , password : "124sc"})
    } else {
      reject('ERROR : Something went wrong')
    }
  } , 1000)
})

// .catch() gets the error reject i mean

promiseFour
.then(function(user) { // we can't store then in a variable it will give error
   console.log(user);
   return user.username;
}).then(function(username) {
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(function() { // .finally() will work like default it tells if resolved or rejected
  console.log('Finally the promise is either resolved or rejected');
})

const promiseFive = new Promise(function(resolve , reject) {
  setTimeout(()=> {
    let error = true
    if(!error) {
      resolve({username : "java" , password : "124sc"})
    } else {
      reject('ERROR : went wrong')
    }
  } , 1000)
})

// we can add asyns await too insted is using .then() , .catch() etc.
//but there is one problem it don't handle error well
async function consumePromiseFive () {
  try{
    const response = await promiseFive // await will do the step first then do the next
  console.log(response);
  }  catch (error) {
    console.log(error);
  }
}

consumePromiseFive()

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://api.github.com/users/MdTariq01') 
//   const data = await response.json()
//   console.log(data);
//   } catch (error) {
//     console.log("E: " + error);
//   }
// }
// getAllUsers()

//fetch() gives promise so we are just using resolve things like .then() and .catch()

fetch('https://api.github.com/users/MdTariq01').then((response)=> {
  return response.json()
}).then(function(reseivedResponse){
  console.log(reseivedResponse);
}).catch(function(error) {
  console.log("ERROR HERE");
})