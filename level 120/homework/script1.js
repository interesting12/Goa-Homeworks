// რუკის ინვერტირება
function invertedMap(map) {
    let invertedMap = new Map();
    for (let [key, value] of map) {
        invertedMap.set(value, key); 
    }
    return invertedMap;
}

console.log(invertedMap(new Map([['a', 1], ['b', 2], ['c', 1]]))); // Map {1 => 'c', 2 => 'b'}
