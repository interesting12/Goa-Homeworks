
function countArea(...args) {
    if (args.length === 2) {
      const [length, width] = args;
      return length * width;
    } else if (args.length === 1) {
      const radius = args[0];
      return Math.PI * Math.pow(radius, 2);
    } else if (args.length === 3) {
      const [base, height] = args;
      return 0.5 * base * height;
    } else {
      return "Invalid arguments";
    }
  }
  

  console.log(countArea(5, 10)); 
  console.log(countArea(7));     
  console.log(countArea(6, 4, 0)); 
  