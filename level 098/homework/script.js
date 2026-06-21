// 1) შექმენით ფუნქცია რომელსაც გადაეცემა მატრიცა ( 2დ მასივი )
//  და დააბრუნებს მასივს უნიკალური ელემენტებით 
// (ელემენტი რომელიც მთლიან მასივში ერთხელაა) 


const array = [
    [2, 1, 4],
    [7, 2, 3],
    [2, 8, 3]
];
function uniqueElement(array) {

     const count = {}; //გამოვიყენე ელემენტების სიხშირის დასატვლელად

    for (let i = 0; i < array.length; i++) { //გადაიდს array-ის თითოეულ ელემენტზე (array )
        for (let x = 0; x < array[i].length; x++) { // ეს გადადის array[i]-ის თითოეულ ელემენტზე (row)
            const element = array[i][x];
            if (count[element] === undefined) {
                count[element] = 1; //თუ ელემენტი არის undefined ანუ არარსებობს მივანიჭოთ მნიშვნელობა 1.
            } else {
                count[element]++;  //თუ არარის undefined ანუ არსებობს მაშინ გავზარდოთ 1-ით.
            }
        }
    }
    const unique = []; // უნიკალური ელემენტები
    for (const element in count) { // for in loop გადაუვლის count ობიექტს, გადადის ყველა key-ზე
        if (count[element] === 1) { //თუ ელემენტის სიხშირე არის 1 ანუ უნიკალუირა
            unique.push(Number(element)); // უნიკალურ ელემენტს ვამატებთ unique(უნიკალური ელემენტების მასივი)-ში.
        }
    }
    return unique; 
}

console.log(uniqueElement(array)); // [8, 7, 4]
