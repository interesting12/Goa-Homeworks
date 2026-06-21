import { plus } from './Plus.js';
import { minus } from './Minus.js';
import { multiply } from './Multiply.js';
import { divide } from './Divide.js';

document.getElementById('calculate').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case '+':
            result = plus(num1, num2);
            break;
        case '-':
            result = minus(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').innerText = `შედეგი: ${result}`;
});
