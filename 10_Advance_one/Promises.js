// Promise is an object representing the eventual completion
const promiseOne = new Promise(function (resolve , reject) {
  // Do an async calls like database or cryptgraphy related , network call
  setTimeout( function () {
    console.log('Asunc Task is complete');
    resolve()
  }, 1000)
});

promiseOne.then(function () {
  console.log("Promise consumed");
})

new Promise(function(resolve , reject) {
  setTimeout( () => {
    console.log('Async task 2');
    resolve();
  }, 1000)
}).then(function() {
  console.log('Async 2 resolved');
  
})

const PromiseThree = new Promise(function(resolve , reject) {
  setTimeout( function () {
    resolve({username : "chai" , email : "eg@gmail.co"m })
  },1000)
})

PromiseThree.then(function (user) {
  console.log(user);
  
})