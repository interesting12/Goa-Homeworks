const PI = 3.14;
console.log(PI);  


PI = 3.14159;  


let age = 25;
console.log(age);


age = 30;
console.log(age);  

let x = 5;
let y = 10;

[x, y] = [y, x];  
console.log(x);  
console.log(y);  


const favoriteColor = "blue";
console.log(favoriteColor);  

favoriteColor = "green";  
let a = 10;
let b = 3;

console.log(a + b);  
console.log(a - b);  
console.log(a * b);  
console.log(a / b);  
console.log(a % b);  


let powerResult = 2 ** 5;
console.log(powerResult);  


let width = 5;
let height = 10;
let area = width * height;
console.log(area);  

let p = 7;
let q = 12;

p++;  
q--; 

console.log(p);  
console.log(q); 


let num1 = 5;
let num2 = 10;

console.log(num1 > num2);   
console.log(num1 < num2);   
console.log(num1 >= num2);  
console.log(num1 <= num2);  
console.log(num1 == num2);  
console.log(num1 === num2); 
console.log(num1 != num2);  
console.log(num1 !== num2); 



console.log('10' == 10);   
console.log('10' === 10);  


let temp = 30;

if (temp >= 25) {
  console.log("The temperature is warm.");  
} else {
  console.log("The temperature is cold.");
}


let score = 50;

if (score !== 100) {
  console.log("The score is not perfect.");  
}


const myNumber = 45;
console.log(typeof myNumber);  

let isRaining = false;

if (isRaining) {
  console.log("Take an umbrella!");
}



let str = "Hello, world!";
console.log(str.length);  


let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);  

function arithmeticOperations(x, y) {
    return {
      addition: x + y,
      subtraction: x - y,
      multiplication: x * y,
      division: x / y,
      modulus: x % y
    };
  }
  
  console.log(arithmeticOperations(10, 5));

  



  let num = 12;
let isEven = num % 2 === 0;
let isGreaterThanTen = num > 10;

console.log(isEven);          
console.log(isGreaterThanTen);



let password = "strongPass";

if (password.length >= 8) {
  console.log("Password is strong");
}



let name = "John";

if (name === "John") {
  console.log("Hello, John!");
} else {
  console.log("Hello, stranger!");
}













