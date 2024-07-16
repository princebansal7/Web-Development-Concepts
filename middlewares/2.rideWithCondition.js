const express = require("express");
const app = express();
const port = 3000;

// only 14 or above kids can go for ride 1:
// let's add a check for age

function ticketSeller(age) {
    return age >= 14 ? true : false;
}

app.get("/ride1", (req, res) => {
    if (ticketSeller(req.query.age)) {
        res.json({
            msg: "ride 1 accessed",
        });
    } else {
        res.status(411).json({
            msg: "not old enough to buy ride 1 ticket",
        });
    }
});

// let's say there is another ride 2:
// we have just repeated logic

app.get("/ride2", (req, res) => {
    if (ticketSeller(req.query.age)) {
        res.json({
            msg: "ride 2 accessed",
        });
    } else {
        res.status(411).json({
            msg: "not old enough to buy ride 2 tickett",
        });
    }
});

app.listen(port);
// To Solve this, use Middlewares
