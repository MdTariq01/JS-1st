let body = document.querySelector('body');

const randomColor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());
let intervalId;

document.querySelector('#start').addEventListener('click', function () {
  if (!intervalId) {
    intervalId = setInterval(changeBackground, 1000);
  }

  function changeBackground() {
    document.body.style.backgroundColor = randomColor();
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(intervalId);
  intervalId = null;
});
