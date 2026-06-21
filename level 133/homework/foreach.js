const nums = [1, 2, 3, 4];
nums.forEach(num => console.log(num));


const names = ["Ana", "Gio", "Nika"];
const uppercased = [];
names.forEach(name => uppercased.push(name.toUpperCase()));
console.log(uppercased);


const users = [{name: "Luka"}, {name: "Maya"}];
users.forEach(user => console.log(user.name));


let sum = 0;
nums.forEach(n => sum += n);
console.log(sum);

const products = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 }
  ];
  
  products.forEach(product => {
    console.log(`${product.name} costs $${product.price}`);
  });