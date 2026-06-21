const rangeMultiplier = 2; 
        let userName = localStorage.getItem('userName');
        let score = parseInt(localStorage.getItem('score')) || 0;
        let minRange = 1;
        let maxRange = parseInt(localStorage.getItem('maxRange')) || 2;
        let randomNumber = generateRandomNumber(minRange, maxRange);

        document.addEventListener('DOMContentLoaded', () => {
            if (userName) {
                showGameScreen();
            } else {
                showNameEntry();
            }
        });

        function saveName() {
            userName = document.getElementById('user-name').value;
            if (userName) {
                localStorage.setItem('userName', userName);
                showGameScreen();
            } else {
                alert('Please enter a valid name!');
            }
        }

        function showNameEntry() {
            document.getElementById('name-entry').style.display = 'block';
            document.getElementById('game').style.display = 'none';
        }

        function showGameScreen() {
            document.getElementById('name-entry').style.display = 'none';
            document.getElementById('game').style.display = 'block';
            document.getElementById('display-name').textContent = userName;
            document.getElementById('score').textContent = score;
            document.getElementById('range-min').textContent = minRange;
            document.getElementById('range-max').textContent = maxRange;
        }

        function changeBackground() {
            const color = document.getElementById('color-picker').value;
            document.body.style.backgroundColor = color;
        }

        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function checkGuess() {
            const userGuess = parseInt(document.getElementById('guess-input').value);

            if (userGuess === randomNumber) {
                alert('Correct!');
                score++;
                maxRange *= rangeMultiplier;
                randomNumber = generateRandomNumber(minRange, maxRange);

                localStorage.setItem('score', score);
                localStorage.setItem('maxRange', maxRange);

                document.getElementById('score').textContent = score;
                document.getElementById('range-max').textContent = maxRange;
            } else {
                alert('Incorrect, try again!');
            }

            document.getElementById('guess-input').value = '';
        }