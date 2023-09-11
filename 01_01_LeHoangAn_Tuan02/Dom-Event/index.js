// JavaScript code for the number guessing game

// Initialize variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Select elements
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const numberDisplay = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

// Function to display a message
function displayMessage(msg) {
    message.textContent = msg;
}

// Function to reset the game
function resetGame() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    scoreDisplay.textContent = score;
    numberDisplay.textContent = '?';
    guessInput.value = '';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    numberDisplay.style.width = '15rem';
}

// Event listener for the "Check" button
checkButton.addEventListener('click', function () {
    const guess = Number(guessInput.value);

    // Check if a valid number is entered
    if (!guess || guess < 1 || guess > 20) {
        displayMessage('Enter a valid number between 1 and 20!');
    } else if (guess === secretNumber) {
        // Correct guess
        displayMessage('🎉 Correct Number!');
        numberDisplay.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        numberDisplay.style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        // Incorrect guess
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            scoreDisplay.textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            scoreDisplay.textContent = 0;
        }
    }
});

// Event listener for the "Play Again" button
againButton.addEventListener('click', resetGame);

// Initial game reset
resetGame();
