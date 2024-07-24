const express = require("express");
const app = express();
const port = 3000;

// We know, express application is just a chain series of middleware function calls
// => literally all the functions and routes which we had written till now, have access
//    to next, but generally we don't use it in the last function.

// But, we'll write next in middleware as they are usually not the last functions to executed
// and they usually need to perform some checks => next() will call the next function in the chain

function ticketSellerMiddleware(req, res, next) {
    const age = req.query.age;
    age >= 14
        ? next()
        : res.status(411).json({
              msg: "not old enough to buy ride ticket",
          });
}

// Now, after using middleware, our route for ride1 only need to complete the purpose of ride1
// here we explicitly added the middleware
app.get("/ride1", ticketSellerMiddleware, (req, res) => {
    res.json({
        msg: "ride 1 accessed",
    });
});

// similarly for ride2
// here we explicitly added the middleware
app.get("/ride2", ticketSellerMiddleware, (req, res) => {
    res.json({
        msg: "ride 2 accessed",
    });
});

app.listen(port);
