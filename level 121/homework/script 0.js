// Basic Callback - Logging a Message with Delay


function greetUser(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

function onGreetComplete() {
    console.log("Greeting complete!");
}

greetUser("Alex", onGreetComplete);
