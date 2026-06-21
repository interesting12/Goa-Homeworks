// Easy
// დავალება NUM 1: კენტი ან ლუწი რიცხვის შემოწმება

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "ეს არის ლუწი რიცხვი.";
    } else {
        return "ეს არის კენტი რიცხვი.";
    }
}

console.log(checkEvenOdd(4)); 
console.log(checkEvenOdd(5)); 


// დავალება NUM 2: სიის ცარიელობა და ჯამის გამოთვლა

function sumOfList(numbers) {
    if (numbers.length === 0) {
        return "სია ცარიელია.";
    } else {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return `რიცხვების ჯამი არის: ${sum}.`;
    }
}
console.log(sumOfList([]));
console.log(sumOfList([1, 2, 3])); 

// დავალება NUM 3: რიცხვების 3-ზე გამრავლება
function multiplyAndFilter(numbers) {
    const result = numbers.map(num => num * 3).filter(num => num > 20);
    return result;
}


console.log(multiplyAndFilter([5, 7, 8])); 

// Medium
// დავალება NUM 4: უდიდესი რიცხვის პოვნა
function findMax(numbers) {
    if (numbers.length === 0) {
        return "სია ცარიელია.";
    }
    return Math.max(...numbers);
}
console.log(findMax([1, 2, 3, 4, 5])); 
console.log(findMax([])); 


// დავალება NUM 5: ნამრავლი 100-ზე მეტია თუ არა

function isProductGreaterThan100(num1, num2) {
    const product = num1 * num2;
    if (product > 100) {
        return "ნამრავლი 100-ზე მეტია.";
    } else {
        return "ნამრავლი 100-ზე ნაკლებია.";
    }
}

console.log(isProductGreaterThan100(10, 11)); 
console.log(isProductGreaterThan100(5, 10)); 

// დავალება NUM 6: ტექსტის პირველ და ბოლო ასოები

function checkFirstAndLastChar(text) {
    if (text.length === 0) {
        return "ტექსტი ცარიელია.";
    }
    return text[0] === text[text.length - 1]
        ? "პირველი და ბოლო ასოები ერთნაირია."
        : "პირველი და ბოლო ასოები არ არის ერთნაირი.";
}

console.log(checkFirstAndLastChar("level"));
console.log(checkFirstAndLastChar("hello"));


// დავალება NUM 7: ასოების სიხშირის გამოთვლა
function charFrequency(text) {
    const frequency = {};
    for (let char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}


console.log(charFrequency("hello")); 


// Giga Chad
// დავალება NUM 8: პალინდრომის შემოწმება
function isPalindrome(text) {
    const normalizedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedText = normalizedText.split('').reverse().join('');
    return normalizedText === reversedText;
}


console.log(isPalindrome("level")); 
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, Panama")); 