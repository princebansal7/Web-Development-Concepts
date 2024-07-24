const express = require("express");
const app = express();
const port = 3000;

let numberOfReqests = 0;
// commonly used middleware to count request comming on a route
function calculateRequests(req, res, next) {
    numberOfReqests++;
    console.log("Requests: ", numberOfReqests);
    next();
}

app.get("/check-req", calculateRequests, (req, res) => {
    res.send(
        `<h2>Calculating Number of requests /check-req route using middleware: ${numberOfReqests}</h2>`
    );
});

// If I add new route with same middleware, request count will be continued with same number..
app.get("/prince", calculateRequests, (req, res) => {
    res.send(
        `<h2>Calculating Number of requests on prince/ route using middleware: ${numberOfReqests}</h2>`
    );
});
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
