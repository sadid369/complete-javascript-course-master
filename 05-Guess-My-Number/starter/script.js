'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number 🤣';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 5;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess);
  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number 🚫';
    displayMessage('No Number 🚫');
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number 🎉 ';
    displayMessage('Correct Number 🎉 ');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      --score;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? ' 📈 Too High ' : ' 📉 Too Low ';
      displayMessage(guess > secretNumber ? ' 📈 Too High ' : ' 📉 Too Low ');
    } else {
      // document.querySelector('.message').textContent = '🧨 You Lost The Game ';
      displayMessage('🧨 You Lost The Game ');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     --score;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = ' 📈 Too High ';
  //   } else {
  //     document.querySelector('.message').textContent = '🧨 You Lost The Game ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     --score;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = ' 📉 Too Low ';
  //   } else {
  //     document.querySelector('.message').textContent = '🧨 You Lost The Game ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing... ';
  displayMessage('Start guessing... ');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
