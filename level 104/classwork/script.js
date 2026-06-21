let userName = '';
let score = 0;
let randomNumber = 0;
let difficultyLevel = 2;

if(localStorage.getItem('userName')) {
    userName = localStorage.getItem('userName');
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    startGame();
}

function startGame() {
    if (!userName) {
        userName = document.getElementById('userName').value;
        localStorage.setItem(userName, userName);
        doc
        ument.getElementById('welcomeMessage').textContent = `Welcome ${userName}!`;
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';
        startNewRound();
    }
}

function startNewRound() {
    randomNumber = generateRandomNumber();
    document.getElementById('randomNumber').textContent = randomNumber;
    document.getElementById('guessInput').value = '';
    document.getElementById('wrong').textContent = '';
}

function generateRandomNumber() {
    return Math.floor(Math.random() * difficultyLevel);
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    if (userGuess === randomNumber) {
        score++;
        document.getElementById('score').textContent = score;
        difficultyLevel *= 2;
        startNewRound();
    } else {
        document.getElementById('wrong').textContent = 'Wrong answer try again!';
    }
}

function changeBackgroundColor() {
    const selectedColor = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = selectedColor;
}