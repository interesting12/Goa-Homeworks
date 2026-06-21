function askUserName() {
    let name = prompt("გთხოვთ შეიყვანოთ თქვენი სახელი:");
    setTimeout(() => {
        alert(`გმადლობთ, ${name}! თქვენი დახმარება მნიშვნელოვანია!`);
    }, 3000);
}

askUserName();
