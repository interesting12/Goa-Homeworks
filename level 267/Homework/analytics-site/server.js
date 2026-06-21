const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

const db = new sqlite3.Database("./database.db");

db.run(`
CREATE TABLE IF NOT EXISTS sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT,
    amount REAL
)
`);

app.post("/add", (req, res) => {
    const { category, amount } = req.body;
    db.run("INSERT INTO sales (category, amount) VALUES (?, ?)", 
        [category, amount],
        function(err) {
            if (err) return res.status(500).send(err);
            res.send({ message: "Added successfully" });
        });
});

app.get("/random", (req, res) => {
    const categories = ["Food", "Tech", "Clothes"];
    for (let i = 0; i < 10; i++) {
        const randomCategory = categories[Math.floor(Math.random() * 3)];
        const randomAmount = Math.floor(Math.random() * 1000);

        db.run("INSERT INTO sales (category, amount) VALUES (?, ?)", 
            [randomCategory, randomAmount]);
    }
    res.send({ message: "Random data inserted" });
});

app.get("/analytics", (req, res) => {
    db.all(`
        SELECT 
            category,
            COUNT(*) as total_sales,
            SUM(amount) as total_amount,
            AVG(amount) as avg_amount
        FROM sales
        GROUP BY category
        HAVING total_amount > 1000
    `, (err, rows) => {
        if (err) return res.status(500).send(err);
        res.json(rows);
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});