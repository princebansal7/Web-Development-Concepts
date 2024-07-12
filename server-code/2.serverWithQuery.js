const express = require("express");
const app = express();
const port = 3000;

function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// http://localhost:3000/?n=90
app.get("/", (req, res) => {
    let n = req.query.n; //req.query can be parsed using express for get request
    res.send(`<h3>Sum upto ${n} is: ${sum(n)}</h3>`);
});

app.listen(port, () => {
    console.log(`App running on Port ${port}`);
});
