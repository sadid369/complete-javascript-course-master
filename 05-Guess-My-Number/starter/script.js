'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number 🤣';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 5;
// console.log(document.querySelector('.guess').value);
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number 🚫';
  } else if (guess === secretNumber) {
    highScore = score;
    document.querySelector('.message').textContent = 'Correct Number 🎉 ';
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      --score;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = ' 📈 Too High ';
    } else {
      document.querySelector('.message').textContent = '🧨 You Lost The Game ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      --score;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = ' 📉 Too Low ';
    } else {
      document.querySelector('.message').textContent = '🧨 You Lost The Game ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
