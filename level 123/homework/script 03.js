

function task7() {
    return new Promise(resolve => {
        setTimeout(() => resolve("First"), Math.random() * 2000 + 1000);
    }).then(message => {
        console.log(message);
        return new Promise(resolve => {
            setTimeout(() => resolve("Second"), Math.random() * 2000 + 1000);
        });
    }).then(console.log);
}

task7();
