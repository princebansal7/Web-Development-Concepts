const express = require("express");
const app = express();
const port = 3000;

function ticketSellerMiddleware(req, res, next) {
    const age = req.query.age;
    age >= 14
        ? next()
        : res.status(411).json({
              msg: "not old enough to buy ride ticket",
          });
}

// we know, below all routes will need the ticket-checker middleware
// hence we can use app.use()
// it automatically add to middleware to the routes defined below it

app.get("/ride1", ticketSellerMiddleware, (req, res) => {
    res.json({
        msg: "ride 1 accessed",
    });
});

app.get("/ride2", ticketSellerMiddleware, (req, res) => {
    res.json({
        msg: "ride 2 accessed",
    });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        msg: "route not found",
    });
});

app.listen(port, () => {
    console.log("App running");
});
