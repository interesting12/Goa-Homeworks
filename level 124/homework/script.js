let messageQueue = [];
let lastTime = 0;

function scheduleMessage() {
    const message = document.getElementById('message').value;
    const time = parseInt(document.getElementById('time').value);

    if (message && time > 0) {
        messageQueue.push({ message, time });
        document.getElementById('message').value = '';
        document.getElementById('time').value = '';
        processMessages();
    }
}

function processMessages() {
    if (messageQueue.length === 0) return;

    const { message, time } = messageQueue[0];
    const delay = lastTime > 0 ? Math.max(0, lastTime + time - Date.now()) : time;
    
    setTimeout(() => {
        document.getElementById('output').innerText += message + '\n';
        lastTime = Date.now() + time;
        messageQueue.shift();
        processMessages();
    }, delay);
}
