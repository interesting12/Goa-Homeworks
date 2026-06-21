
function task9() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.random() > 0.5 ? "Task 1 complete" : "Task 1 was quick");
        }, Math.random() * 4000 + 1000);
    });
}

task9().then(console.log);
