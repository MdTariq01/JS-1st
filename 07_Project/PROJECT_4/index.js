let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  // to check you are able to play the game or not
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    // console.log(guess);
  });
}

function validateGuess(guess) {
  //(for validation)
  if (isNaN(guess)) {
    alert(`enter a valid Number`);
  } else if (guess <= 0) {
    alert(`enter a valid Number that is greater than zero`);
  } else if (guess > 100) {
    alert(`enter a valid Number that is less or equal to 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // for checking if its equal to random number then we can tell display message to display you win
  if (guess == randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`You guessed a smaller Number`);
  } else if (guess > randomNumber) {
    displayMessage(`You guessed a greater Number`);
  }
}

function displayGuess(guess) {
  // for value clean in box and update the guesslot and remaining guesses
  userInput.value = ''; // like cleaing the input box
  guesslot.innerHTML += ` ${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //for just displaying message
  LowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //for end game
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //for new game
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesslot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}