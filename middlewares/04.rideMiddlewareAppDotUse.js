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
// it automatically add to middleware to the routes defined below it (order matters)

app.use(ticketSellerMiddleware);
app.get("/ride1", (req, res) => {
    res.json({
        msg: "ride 1 accessed",
    });
});

app.get("/ride2", (req, res) => {
    res.json({
        msg: "ride 2 accessed",
    });
});

app.listen(port, () => {
    console.log("App running");
});

/* But above way have a issue:
 The issue is, where the middleware produces the "not old enough to buy ride ticket" message
 for invalid routes, occurs because the middleware runs for all requests, even those for routes that don't exist.

 To fix this: 
    - mention the middleware explicitly to the just routes where it needed
    - Add another middleware to handle wrong routes and explicitly use middleware
*/
