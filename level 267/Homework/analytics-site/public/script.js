async function addData() {
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;

    await fetch("/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({category, amount})
    });

    alert("Added!");
}

async function generateRandom() {
    await fetch("/random");
    alert("Random data inserted!");
}

async function getAnalytics() {
    const res = await fetch("/analytics");
    const data = await res.json();
    document.getElementById("result").innerText = JSON.stringify(data, null, 2);
}