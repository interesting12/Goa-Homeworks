function manualSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}



function manualFilter(arr, threshold) {
    let result = [];
    for (let num of arr) {
        if (num >= threshold) {
            result.push(num);
        }
    }
    return result;
}
