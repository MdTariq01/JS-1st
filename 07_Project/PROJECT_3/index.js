let clock = document.querySelector('#clock');

setInterval(function () {
  const date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000 for 1 sec , 2000 for 2 sec and so on
