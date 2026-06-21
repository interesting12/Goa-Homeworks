// 5) Function to calculate the sum of elements in an array
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
  }
  
  // 6) Function to extract the "name" property from an array of objects
  function getNames(arr) {
    return arr.map(obj => obj.name);
  }
  
  // 7) Object with 3 methods and 3 properties
  const myObject = {
    name: "Sample Object",
    type: "Example",
    count: 5,
    greet() {
      return `Hello from ${this.name}!`;
    },
    incrementCount() {
      this.count += 1;
      return this.count;
    },
    describe() {
      return `This is a ${this.type} with name "${this.name}" and count ${this.count}.`;
    }
  };
  
  // 8) Function to find the smallest and largest word in a string
  function findSmallestAndLargestWord(text) {
    const words = text.split(" ");
    let smallest = words[0];
    let largest = words[0];
  
    words.forEach(word => {
      if (word.length < smallest.length) smallest = word;
      if (word.length > largest.length) largest = word;
    });
  
    return [smallest, largest];
  }
  
  console.log(sumArray([1, 2, 3, 4]));
  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  console.log(getNames(people));
  console.log(myObject.greet());
  console.log(myObject.incrementCount());
  console.log(myObject.describe());
  console.log(findSmallestAndLargestWord("This is a simple sentence example for testing"));
  