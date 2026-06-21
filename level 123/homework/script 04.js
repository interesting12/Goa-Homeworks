

function task8() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Task 3 failed"), Math.random() * 3000 + 1000);
    }).catch(error => console.log(error));
}

task8();

