// Destructing:

// 1. Array Destructuring: Extract values from an array and assign them to variables in a single line of code.
const [a, b, c] = [1, 2, 3];
console.log(a, b, c);

// 2. Object Destructuring: Unpack properties from objects into distinct variables with concise syntax.
const obj = { x: 10, y: 20 };
const { x, y } = obj;
console.log(x, y);

// 3. Renaming Variables: Rename variables while destructuring to provide clearer names for extracted values.
const obj = { x: 10, y: 20 };
const { x: xPos, y: yPos } = obj;
console.log(xPos, yPos);

// 4. Skipping Values: Skip over unwanted elements in an array or properties in an object during destructuring.
const [first, , third] = [1, 2, 3];
console.log(first, third);

// 5. Destructuring in Loops: Iterate over an array of objects and destructure each object's properties directly in the loop declaration.
const arr = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
for (const { a, b } of arr) {
  console.log(a, b);
}

// 6. Combining Destructuring and Rest Syntax: Use both destructuring and rest syntax together for flexible assignments.
const [first, ...rest] = [1, 2, 3, 4];
console.log(first, rest);

// 7. Skipping Elements: Given an array [1, 2, 3, 4, 5], extract only the first and last elements into variables, skipping the middle ones.
const [first, , , , last] = [1, 2, 3, 4, 5];
console.log(first, last);

// 8. Using Destructuring with Map and Filter: Write a function that filters an array of objects based on a condition and uses
//  destructuring to access object properties within the filter function.
const arr = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
const result = arr.filter(({ id }) => id > 1).map(({ name }) => name);
console.log(result);

// 9. Destructuring Arrays with Mixed Types: Given an array containing both primitive values and objects, extract properties
//  from the objects using destructuring.
const mixed = [1, { a: 2 }, 3, { b: 4 }];
const [num, { a }, , { b }] = mixed;
console.log(num, a, b);


// 10. Manual Destructuring Function Rules
// Function Name: manualDestructing
// Input Parameter: Accepts one parameter obj, which should be an object to be destructured.
// Output: Returns an array containing the values of the properties of the input object.
// Usage: Usable by passing an object as an argument.
// Execution: Extracts the values of the properties from the input object manually, without using any built-in destructuring syntax.
// Returned Array: Contains the values of the properties of the input object in the same order as they are defined in the object.
function manualDestructuring(obj) {
    const keys = Object.keys(obj);
    const values = [];
    for (let i = 0; i < keys.length; i++) {
      values.push(obj[keys[i]]);
    }
    return values;
  }
  const obj = { a: 1, b: 2, c: 3 };
  console.log(manualDestructuring(obj));
  