// 4) Write a function that generates a random number between 1 and 100 using Math.random(). Ensure the number is an integer.
function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
  }
  

// 5) Write a function that calculates the area of a circle given the radius using the formula πr², and use Math.PI for π.


function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  