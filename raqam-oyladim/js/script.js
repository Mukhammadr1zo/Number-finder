'use strict';

let elCheckBtn = document.querySelector('.check');
let elGuessInput = document.querySelector('.guess');
let elMassage = document.querySelector('.message');
let elSecretNumber = document.querySelector('.number');
let elScore = document.querySelector('.score');
let elHighScore = document.querySelector('.highscore');
let elReset = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 20) + 1;

let maxScore = 10;
let highScore = 0;

elCheckBtn.addEventListener('click', function () {
  let guessValue = elGuessInput.value * 1;

  if (!guessValue) {
    elMassage.textContent = 'Iltimos son kiriting!';
  } else if (guessValue === secretNumber) {
    elMassage.textContent = 'Topdingiz!!!';
    document.body.style.backgroundColor = ' #60b347';
    elCheckBtn.disabled = true;
    elSecretNumber.textContent = secretNumber;
    if (maxScore > highScore) {
      highScore = maxScore;
      elHighScore.textContent = highScore;
    }
  } else if (guessValue !== secretNumber) {
    elMassage.textContent =
      guessValue > secretNumber ? 'Bu raqam kattaroq' : 'Bu raqam kichikroq';
    maxScore--;
    elScore.textContent = maxScore;
    if (maxScore <= 0) {
      elMassage.textContent = 'Game Over';
      document.body.style.backgroundColor = ' #ff0000';
      elCheckBtn.disabled = true;
    }
  }
});

elReset.addEventListener('click', function () {
  maxScore = 10;
  elScore.textContent = maxScore;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  elSecretNumber.textContent = '?';
  document.body.style.backgroundColor = '#222';
  elGuessInput.value = '';
  elCheckBtn.disabled = false;
  elMassage.textContent = 'Loading...';
});
