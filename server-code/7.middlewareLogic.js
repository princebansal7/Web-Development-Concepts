const express = require("express");
const app = express();
const port = 3000;

function userMiddleware(res, req, next) {
    const password = req.headers.password;
    const username = req.headers.username;
    if (username != "princebansal" || password != "admin") {
        res.status(403).json({
            msg: "invalid user",
        });
    } else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "Wrong input",
        });
    } else {
        next();
    }
}

app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
    // Some kidney-check logics here
    //.....
    //.....

    if (kidneyId == 1) {
        res.send("Your kidney is healthy, but you might need 1 more!");
    } else if (kidneyId == 2) {
        res.send("Your Both kidneys are healthy!");
    }
});

app.get("/heart-check", userMiddleware, (req, res) => {
    // Some heart-check logics here
    //.....
    //.....

    res.send("Heart is Great!");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

// this is how, using middlewares in express we can write clean code and keep the related code together
// Note: first we need to learn how middleware chaining happens and use of next arg in functions
