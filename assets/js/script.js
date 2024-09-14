const guessNumber = document.getElementById("guess");
const check = document.getElementById("check");
const message = document.getElementById("message");
const randomNumber = document.getElementById("random-number");
const body = document.querySelector("body");
const again = document.getElementById("again");
const highscore = document.getElementById("highscore");
const scoreNumber = document.getElementById("score-number");

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
body.style.background = '#222'
randomNumber.style.width = "15rem"
//  guessNumber.disabled = "false"

check.addEventListener("click", function () {

    let guess = Number(guessNumber.value);


  if (!guess) {
    message.textContent = "No number!";
  } else if (guess === secretNumber) {
    message.textContent = "Correct Number! You Win!";
    randomNumber.textContent = secretNumber;
    body.style.background = "#60b347"
    randomNumber.style.width = "30rem"
    guessNumber.disabled = true
  } else if (guess > secretNumber) {
    if (score > 0) {
      message.textContent = "Too high number";
      score--;
      scoreNumber.textContent = score;
    } else {
        message.textContent = "You lose, try again"
        scoreNumber.textContent = 0
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
        message.textContent = "Too low number"
        score--
        scoreNumber.textContent = score
    } else {
        message.textContent = "You lose, try again"
        scoreNumber.textContent = 0
    }
  }
});


again.addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1)
    score = 20
    guessNumber.value = ''
    scoreNumber.textContent =  score
    body.style.background = "text-black"
    randomNumber.textContent = '?'
    message.textContent = 'Start Gueessing...'
    body.style.background = '#222'
    randomNumber.style.width = "15rem"
    guess.disabled = false
})



















// let secretNumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// let highscoreValue = 0

// check.addEventListener("click", function () {
//   const guess = Number(guessNumber.value);

//   if (!guess) {
//     message.textContent = "No Number!";
//   } else if (guess === secretNumber) {
//     message.textContent = "Correct Number!";
//     randomNumber.textContent = secretNumber
//     body.style.background = '#60b347'
//     randomNumber.style.width = "30rem"

//     if(score > highscoreValue) {
//         highscoreValue = score
//         highscore.textContent = highscoreValue
//       }

//   } else if (guess > secretNumber) {

//     if (score > 0) {
//       message.textContent = "Too high number!";
//       score--;
//       scoreNumber.textContent = score;

//     } else {
//       message.textContent = "You lost the game!";
//       scoreNumber.textContent = 0;
//     }

//   } else if (guess < secretNumber) {

//     if (score > 0) {
//       message.textContent = "Too low number";
//       score--
//       scoreNumber.textContent = score

//     } else {
//         message.textContent = "You lost the game!";
//         scoreNumber.textContent = 0;
//     }
//   }
// });

// again.addEventListener('click', function () {
//     secretNumber = Math.trunc(Math.random() * 20 + 1)
//     score = 20
//     guess.value = ''
//     scoreNumber.textContent = score
//     message.textContent = 'Start Gueessing...'
//     randomNumber.textContent = '?'
//     body.style.background = '#222'
//     randomNumber.style.width = '15rem'
// });
