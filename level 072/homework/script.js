// 1) Function that prints a message after three seconds
function showMessage() {
    setTimeout(() => {
        console.log("This is a message displayed after three seconds");
    }, 3000);
}
showMessage();

// 2) Program that prints the current time every second in "hours:minutes:seconds" format
setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);

// 3) Program that changes the background color of the website every 3 seconds
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0FF33", "#FF33D7"];
let colorIndex = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 3000);

// 4) Program that changes the textContent of a paragraph on the website every 5 seconds
const paragraph = document.getElementById('myParagraph'); 
const messages = ["Hello, world!", "Welcome to the site!", "Enjoy your stay!", "JavaScript is fun!", "Stay tuned for more!"];
let messageIndex = 0;
setInterval(() => {
    paragraph.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}, 5000);

// 5) Timer Project with Start, Pause, and Reset buttons
let timerInterval;
let secondsElapsed = 0;

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            secondsElapsed++;
            document.getElementById('timerDisplay').textContent = formatTime(secondsElapsed);
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    secondsElapsed = 0;
    document.getElementById('timerDisplay').textContent = formatTime(secondsElapsed);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Ensure your HTML contains elements with IDs "startButton", "pauseButton", "resetButton", and "timerDisplay"
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
