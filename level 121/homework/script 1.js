function processArrayWithDelay(arr, callback) {
    setTimeout(() => {
        const squaredArray = arr.map(num => num * num);
        callback(squaredArray);
    }, 1000);
}

processArrayWithDelay([2, 4, 6], (result) => {
    console.log("კვადრატში აყვანილი მასივი:", result);
});
