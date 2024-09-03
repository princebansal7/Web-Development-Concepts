const express = require("express");
const app = express();
const port = 3000;

let numberOfRequests = 0;
// commonly used middleware to count request coming on a route
function calculateRequests(req, res, next) {
    numberOfRequests++;
    console.log("Requests: ", numberOfRequests);
    next();
}

app.get("/check-req", calculateRequests, (req, res) => {
    res.send(
        `<h2>Calculating Number of requests /check-req route using middleware: ${numberOfRequests}</h2>`
    );
});

// If I add new route with same middleware, request count will be continued with same number..
app.get("/prince", calculateRequests, (req, res) => {
    res.send(
        `<h2>Calculating Number of requests on prince/ route using middleware: ${numberOfRequests}</h2>`
    );
});
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
