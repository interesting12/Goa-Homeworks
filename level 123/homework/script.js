function task10() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.3 ? reject("Task 3 failed") : resolve("Task 3 complete");
        }, Math.random() * 3000 + 1000);
    }).catch(error => console.log(error));
}

task10().then(console.log);
