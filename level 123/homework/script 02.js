

function task6() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 1 complete"), Math.random() * 4000 + 1000);
    });
}

task6().then(console.log);

