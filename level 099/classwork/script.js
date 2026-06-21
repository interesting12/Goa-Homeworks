// const user = [
//     { name: "George", age: 17 },
//     { city: "Tbilisi", country: "Georgia" },
// ];
// function keyValue(array) {
    
//     array.forEach(obj => {
//         for (const [key, value] of Object.entries(obj)) {
//             console.log(`${key}: ${value}`);
//         }
//     });
// }
// keyValue(user);




const user = [
    { name: "John", age: 30 },
    { city: "Tbilisi", country: "Georgia" },
];


function keyValue(array) {
    for (let i = 0; i < array.length; i++) {
        const obj = array[i];
        for (const key in obj) {
            console.log(key + ": " + obj[key]);
        }
    }
}

keyValue(user);
