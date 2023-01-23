let randomNum = Math.floor(Math.random()*100)+1;
const container=document.querySelector('.inner-container');
const guesses=document.querySelector('.guesses');
const lastResult=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHigh');
const guessSubmit=document.querySelector('.guessSubmit');
const guessField=document.querySelector('.guessField');


let guessCount=1;
let resetButton;

guessSubmit.addEventListener("click",checkGuess)

function checkGuess(){
  let guessedNum=Number(guessField.value);
  if(guessCount==1){
    guesses.textContent="previous guesses:";
  }
  guesses.textContent += `${guessedNum} `;

  if(guessedNum===randomNum){
    lastResult.textContent="Congratulations! you got it right!";
    lastResult.style.backgroundColor="green";
    lowOrHigh.textContent='';
    setGameOver();
  }else if(guessCount===10){
    lastResult.textContent="Game Over!";
    lastResult.style.backgroundColor="red";
    lowOrHigh.textContent='';
    setGameOver();
  }else{
    lastResult.textContent="Wrong";
    lastResult.style.backgroundColor="red";
    if(guessedNum>randomNum){
      lowOrHigh.textContent='Last guessed was too high!';
    }else if(guessedNum<randomNum){
      lowOrHigh.textContent='Last guessed was too low!';
    }
  }

  guessCount++;
  guessField.value='';
  guessField.focus();
}

function setGameOver(){
  guessField.disabled='true';
  guessSubmit.disabled='true';
  resetButton=document.createElement('button');
  resetButton.textContent='Start new game';
  container.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame);
}

function resetGame(){
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = '';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}