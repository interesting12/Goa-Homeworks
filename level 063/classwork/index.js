function filter(numberArr) {
    const evenNumbers = [];
        for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] % 2 === 0) { 
            evenNumbers.push(numberArr[i]);
        }
    }
    
    return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filter(numbers);
console.log(result); 

