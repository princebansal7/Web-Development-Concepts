const express = require("express");

const app = express();
const port = 3000;

// We can send data 3 ways
// - query parameters
// - body
// - headers

app.get("/health-check", (req, res) => {
    const kidneyId = req.query.kidneyId; // getting data sent using query parameters
    const password = req.headers.password; // getting data using using headers
    const username = req.headers.username;

    // username check (assume we have single user)
    if (username != "princebansal" || password != "admin") {
        res.status(403).json({
            msg: "invalid user",
        });
        return; // early returning
    }

    // Input validation
    if (kidneyId != 1 && kidneyId != 2) {
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

// Problems with this approach?
// What if we have to write other routes like kidney-replace!
// we again have to write validation checks in that route too!
// => not following DRY
