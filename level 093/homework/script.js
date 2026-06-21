

let cookies = 0;
let gold = 0;
let clickPower = 1;
let goldPower = 1;
let doubleMultiplier = 1;

const cookieButton = document.getElementById('cookie');
const cookiesDisplay = document.getElementById('cookies');
const goldDisplay = document.getElementById('gold');
const biggerFingerButton = document.getElementById('bigger-finger');
const betterMinesButton = document.getElementById('better-mines');
const doubleCookiesButton = document.getElementById('double-cookies');

 cookieButton.addEventListener('click', () => {
  cookies += clickPower * doubleMultiplier;
  gold += goldPower;
  updateDisplay();
});

biggerFingerButton.addEventListener('click', () => {
  if (gold >= 50) {
    gold -= 50;
    clickPower++;
    biggerFingerButton.textContent = `Bigger Finger (${50 * Math.pow(2, clickPower - 1)} Gold)`;
    updateDisplay();
  }
});

betterMinesButton.addEventListener('click', () => {
  if (cookies >= 100) {
    cookies -= 100;
    goldPower++;
    betterMinesButton.textContent = `Better Mines (${100 * Math.pow(2, goldPower - 1)} Cookies)`;
    updateDisplay();
  }
});

doubleCookiesButton.addEventListener('click', () => {
  if (gold >= 200) {
    gold -= 200;
    doubleMultiplier *= 2;
    doubleCookiesButton.textContent = `Double Cookies (${200 * doubleMultiplier} Gold)`;
    updateDisplay();
  }
});

function updateDisplay() {
  cookiesDisplay.textContent = cookies;
  goldDisplay.textContent = gold;
  biggerFingerButton.disabled = gold < 50;
  betterMinesButton.disabled = cookies < 100;
  doubleCookiesButton.disabled = gold < 200;
}

updateDisplay();
