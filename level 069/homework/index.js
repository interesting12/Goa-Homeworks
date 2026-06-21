// Exercise Set 1: Basic Array Methods
console.log("Exercise Set 1");

// Get Length
const array1 = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Array length:", array1.length); 

// Convert to String
console.log("Array as string:", array1.toString()); 

// Access Element
console.log("Second element:", array1.at(1));

// Join Elements
console.log("Joined with '-':", array1.join('-')); 

// Push & Pop
array1.push("fig", "grape");
console.log("After push:", array1); 
array1.pop();
console.log("After pop:", array1); 

// Exercise Set 2: Modify Array (shift, unshift, delete, concat)
console.log("\nExercise Set 2");

// Shift Element
const array2 = ["red", "green", "blue", "yellow"];
array2.shift();
console.log("After shift:", array2); 

// Unshift Element
array2.unshift("purple");
console.log("After unshift:", array2); 

// Delete Element
delete array2[1];
console.log("After delete:", array2); 

// Concatenate Arrays
const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const mergedArray = array3.concat(array4);
console.log("Concatenated arrays:", mergedArray); 

// Explore Unshift & Length
const newLength = array3.unshift(0);
console.log("After unshift:", array3); 
console.log("New length:", newLength);

// Exercise Set 3: Searching (indexOf, lastIndexOf, includes)
console.log("\nExercise Set 3");

// Find Index
const array5 = ["apple", "banana", "apple", "cherry"];
console.log("First index of 'apple':", array5.indexOf("apple")); 

// Find Last Index
console.log("Last index of 'apple':", array5.lastIndexOf("apple"));

// Check Inclusion
console.log("Includes 'banana':", array5.includes("banana")); 

// Invalid Index Search
console.log("Index of 'orange':", array5.indexOf("orange")); 

// Case Sensitivity
console.log("Case sensitive check for 'APPLE':", array5.includes("APPLE")); 

// Exercise Set 4: Sorting and Reversing (sort, reverse)
console.log("\nExercise Set 4");

// Sort Strings
const fruits = ["banana", "apple", "cherry", "date"];
fruits.sort();
console.log("Sorted strings:", fruits); 

// Sort Numbers
const numbers = [10, 3, 8, 5];
numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", numbers); 

// Custom Sort (Descending)
numbers.sort((a, b) => b - a);
console.log("Sorted numbers descending:", numbers); 

// Reverse Array
numbers.reverse();
console.log("Reversed array:", numbers); 

// Mix Sort and Reverse
const mixedArray = [4, 1, 7, 3];
mixedArray.sort((a, b) => a - b).reverse();
console.log("Sorted then reversed:", mixedArray); 

// Exercise Set 5: Combined Operations
console.log("\nExercise Set 5");

// Sort and Push
const array6 = [6, 2, 9, 1];
array6.sort((a, b) => a - b);
array6.push(10);
console.log("Sorted and pushed:", array6); 
// Concatenate and Sort
const array7 = [4, 8];
const array8 = [3, 7];
const combinedArray = array7.concat(array8).sort((a, b) => a - b);
console.log("Concatenated and sorted:", combinedArray); 

// Push and Reverse
const array9 = ["x", "y"];
array9.push("z", "a", "b");
array9.reverse();
console.log("Pushed and reversed:", array9); 

// Find and Remove Element
const array10 = ["apple", "banana", "cherry"];
const index = array10.indexOf("banana");
if (index !== -1) {
    array10.splice(index, 1);
}
console.log("After removing 'banana':", array10); 

// Join and Include Check
const array11 = ["cat", "dog", "fish"];
const joinedString = array11.join("-");
console.log("Joined string:", joinedString);
const splitArray = joinedString.split("-");
console.log("Split back into array:", splitArray); 
console.log("Includes 'dog':", splitArray.includes("dog")); 
