function unionOfSets(setsArray) {
    return setsArray.reduce((acc, set) => {
        set.forEach(value => acc.add(value));
        return acc;
    }, new Set());
}

// Test
console.log(unionOfSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));
// Output: Set { 1, 2, 3, 4 }