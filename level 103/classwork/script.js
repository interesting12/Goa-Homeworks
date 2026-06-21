// const items = ['mobile', 'laptop'];

// const index = {
//   1: items[0],
//   2: items[1]
// };


const items = ['mobile', 'laptop'];
const index = {};

for (let i = 0; i < items.length; i++) {
  index[i + 1] = items[i]; 
}