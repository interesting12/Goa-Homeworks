// 1) Function that prints "გამარჯობა"
function greet() {
    console.log("გამარჯობა");
  }
  
  // 2) Function that takes a name argument and prints a greeting
  function greetName(name) {
    console.log(`გამარჯობა, ${name}`);
  }
  
  // 3) Function that returns the number increased by 1
  function increment(num) {
    return num + 1;
  }
  
  // 4) Function that returns the negative version of a non-negative number
  function negativeAndIncrement(num) {
    const negativeNum = -Math.abs(num);
    return negativeNum + 1;
  }
  
  // 5) Function that returns an HTML element by ID and changes its attributes
  function changeElementAttributes(id) {
    const element = document.getElementById(id);
    if (element) {
      element.style.color = 'red';
      element.style.backgroundColor = 'yellow';
      element.textContent = 'Text content changed!';
    }
  }
  