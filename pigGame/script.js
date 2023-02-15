'use strict';
const hold = document.querySelector('.hold');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const roll = document.querySelector('.roll');
const image = document.querySelector('.dice-image');
const newGame = document.querySelector('.new-game');

let counter = 1;
let player = 1;
let currentScore = 0;
function changeColor() {
  if (counter % 2 != 0) {
    if ((left.style.backgroundColor = '#913175')) {
      left.style.backgroundColor = '#cd5888';
    }
    if ((right.style.backgroundColor = '#cd5888')) {
      right.style.backgroundColor = '#913175';
    }
  } else {
    if ((right.style.backgroundColor = '#913175')) {
      right.style.backgroundColor = '#cd5888';
    }
    if ((left.style.backgroundColor = '#cd5888')) {
      left.style.backgroundColor = '#913175';
    }
  }
}
hold.addEventListener('click', () => {
  changeColor();
  image.classList.add('hidden');
  const current = document.querySelector(`.current-score-${player}`);
  const totalScore = document.querySelector(`.total-score-${player}`);
  totalScore.textContent = Number(totalScore.textContent) + currentScore;
  current.textContent = '0';
  currentScore = 0;
  counter++;
});

roll.addEventListener('click', () => {
  if (counter % 2 != 0) {
    player = 1;
  } else {
    player = 2;
  }
  const random = Math.trunc(Math.random() * 6) + 1;
  image.src = `images/dice-${random}.png`;
  image.classList.remove('hidden');
  const current = document.querySelector(`.current-score-${player}`);
  currentScore += random;
  current.textContent = currentScore;
  if (random === 1) {
    changeColor();
    current.textContent = '0';
    counter++;
    currentScore = 0;
  }
});

newGame.addEventListener('click', () => {
  image.classList.add('hidden');
  counter = 1;
  currentScore = 0;
  player = 1;
  left.style.backgroundColor = '#913175';
  right.style.backgroundColor = '#cd5888';
  for (let i = 1; i < 3; i++) {
    let current = document.querySelector(`.current-score-${i}`);
    current.textContent = '0';
    let total = document.querySelector(`.total-score-${i}`);
    total.textContent = '0';
  }
});
