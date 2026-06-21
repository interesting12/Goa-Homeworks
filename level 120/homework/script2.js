// მაქსიმალური მნიშვნელობის გასაღებების პოვნა
function maxValKey(map) {
    let maxVal = Math.max(...Array.from(map.values()));
    let maxKeys = [];
    
    for (let [key, value] of map) {
        if (value === maxVal) {
            maxKeys.push(key);
        }
    }
    
    return maxKeys;
}

console.log(maxValKey(new Map([['a', 5], ['b', 3], ['c', 5]]))); // ['a', 'c']
