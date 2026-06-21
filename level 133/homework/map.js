const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);

const names = ["luka", "ana"];
const up = names.map(name => name.toUpperCase());
console.log(up);

const users = [{name: "Luka"}, {name: "Nino"}];
const namesOnly = users.map(user => user.name);
console.log(namesOnly);

const list = items.map(item => `<li>${item}</li>`);
console.log(list);

const bools = [true, false, true];
const text = bools.map(b => b ? "Yes" : "No");
console.log(text);
