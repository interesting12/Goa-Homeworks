// 1. Greeting Function
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// 2. Addition with Default Parameters
function add_numbers(num1, num2 = 0) {
    return num1 + num2;
}

// 3. Rectangle Area Calculator
function calculate_area(length, width = 1) {
    return length * width;
}

// 4. Temperature Conversion
function convert_temperature(temperature, scale = "C") {
    if (scale === "C") {
        return (temperature * 9/5) + 32; 
    } else if (scale === "F") {
        return (temperature - 32) * 5/9; 
    } else {
        return "Invalid scale";
    }
}

// 5. Shopping List
function add_to_shopping_list(item, quantity = 1) {
    return `${quantity} x ${item}`;
}

// 6. Power Function
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

// 7. Personalized Message
function create_message(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// 8. Calculate Discount
function apply_discount(price, discount = 0.10) {
    return price - (price * discount);
}

// 9. Introduction Function
function introduce(name, age = "unknown", country = "unknown") {
    return `My name is ${name}, I am ${age} years old, and I am from ${country}.`;
}

// 10. Calculate Final Price
function calculate_price(price, salesTax = 0.05) {
    return price + (price * salesTax);
}

// 11. Find the Maximum
function find_max(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

// 12. Pass or Fail
function pass_or_fail(score) {
    return score >= 50 ? "Pass" : "Fail";
}

// 13. Sum of Numbers
function sum_of_numbers(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

// 14. Count Even Numbers
function count_evens(numbers) {
    let count = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}
