const nums = [1, 2, 3];
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const words = ["Hello", "World"];
const sentence = words.reduce((acc, word) => acc + " " + word);
console.log(sentence);

const max = nums.reduce((a, b) => a > b ? a : b);
console.log(max);

const entries = [
  ["name", "Ana"],
  ["age", 22]
];
const obj = entries.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
console.log(obj);

const fruits = ["apple", "banana", "apple", "orange"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);
