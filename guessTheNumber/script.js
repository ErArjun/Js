'use strict';
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const userNumber = document.querySelector('.generator');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const hScore = document.querySelector('.hScore');
const msg = document.querySelector('.message');
const title = document.querySelector('.title');
const reveal = document.querySelector('.reveal');
const again = document.querySelector('.nav-btn');
let number;
let counter = 20;
check.addEventListener('click', function () {
  number = Number(userNumber.value);
  if (number == 0) return;
  if (counter >= 1) {
    score.textContent = counter - 1;
    counter = counter - 1;
  }
  userNumber.value = '';
  if (number > randomNumber) msg.textContent = 'Number too high';
  else if (number < randomNumber) msg.textContent = 'number too low';
  else if (number == randomNumber) {
    msg.textContent = 'correct';
    title.textContent = 'winner!';
    reveal.textContent = randomNumber;
    hScore.textContent = counter;
    score.textContent = 0;
    userNumber.disabled = 'true';
    document.querySelector('body').style.background = 'green';
  }

  if (counter == 0) {
    title.textContent = 'tryAgain';
    msg.textContent = 'try again';
    userNumber.disabled = 'true';
    score.textContent = 20;
  }
});

again.addEventListener('click', function () {
  userNumber.disabled = false;
  score.textContent = 20;
  hScore.textContent = 0;
  title.textContent = 'Guess My Number';
  reveal.textContent = '?';
  msg.textContent = 'start guessing.....';
  document.querySelector('body').style.background = '#20262e';
  randomNumber = Math.trunc(Math.random() * 20) + 1;
});
