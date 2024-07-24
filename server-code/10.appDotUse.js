const express = require("express");
const app = express();
const port = 3000;

let numberOfRequests = 0;

// Middleware
function calculateRequests(req, res, next) {
    numberOfRequests++;
    console.log("Requests: ", numberOfRequests);
    next();
    // In custom middlewares, This is must to call the next() fxn or else using just app.use()
    // and providing middleware as arg in it won't call the next middlewares automatically
}

// 1. Here we specified middleware explicitly
app.get("/", calculateRequests, (req, res) => {
    res.send(`<h2>Explicit middleware example: ${numberOfRequests}</h2>`);
});
// 2. when we use app.use() and pass a middleware as argument, it automatically add this middleware to all the
//    below routes without us adding the middlewares explicitly.

app.get("/prince1", (req, res) => {
    res.send(
        `<h2>Middleware won't work here, as above app.use() :${numberOfRequests}</h2>`
    );
});

app.use(calculateRequests);
// so in below route /prince2, calculateRequests will automatically be added, but it won't be added to /prince1 route
// as that route is defined above the app.use() line

app.get("/prince2", (req, res) => {
    res.send(
        `<h2>Middleware example using app.use(): ${numberOfRequests}</h2>`
    );
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

// NOTE:
// When we use app.use(express.json()); we called json() fxn but in our example we wrote just
// app.use(calculateRequests) and not app.use(calculateRequests())
// because express.json() itself returns a function, which then work as middleware (which have next() in it)

// So now we know what are Middlewares!
// => Middlewares are the handlers which do initials checks before the logics get implements
//    These initial checks are majorly of 2 types
//      - Authentication checks: making sure user is signed in
//      - Input validation checks: making sure we are getting the right inputs
