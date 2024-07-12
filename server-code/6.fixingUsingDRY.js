const express = require("express");

const app = express();
const port = 3000;

// writing functions to follow DRY
function userAndPassValidator(username, password) {
    return username != "princebansal" || password != "admin" ? true : false;
}

function inputValidator(kidneyId) {
    return kidneyId != 1 && kidneyId != 2 ? true : false;
}

app.get("/health-check", (req, res) => {
    const kidneyId = req.query.kidneyId;
    const password = req.headers.password;
    const username = req.headers.username;

    if (userAndPassValidator(username, password)) {
        res.status(403).json({
            msg: "invalid user",
        });
        return;
    }
    if (inputValidator(kidneyId)) {
        res.status(411).json({
            msg: "Wrong input",
        });
        return;
    }

    if (kidneyId == 1) {
        res.send("Your kidney is healthy, but you might need 1 more!");
    } else if (kidneyId == 2) {
        res.send("Your Both kidneys are healthy!");
    }
});

app.put("/kidney-replace", (req, res) => {
    const kidneyId = req.query.kidneyId;
    const password = req.headers.password;
    const username = req.headers.username;

    if (userAndPassValidator(username, password)) {
        res.status(403).json({
            msg: "invalid user",
        });
        return;
    }
    if (inputValidator(kidneyId)) {
        res.status(411).json({
            msg: "Wrong input",
        });
        return;
    }

    if (kidneyId == 1) {
        res.send("Your kidney is healthy, but you might need 1 more!");
    } else if (kidneyId == 2) {
        res.send("Your Both kidneys are healthy!");
    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

// Problem ?
// Still there is a lot of code repeatation
// Solution?
// Using MIDDLEWARES
// whenevers there are bunch of validation checks or pre-checks => move all of them to some other place
// and that place is Middleware!
