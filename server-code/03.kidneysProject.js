const express = require("express");
const app = express();
const port = 3000;
users = [
    {
        name: "Mikasa",
        kidneys: [{ healthy: true }, { healthy: false }],
    },
];

// for get request: popular way to send data is Query parameters
app.get("/", function (req, res) {
    const mikasaKidney = users[0].kidneys;
    let totalKidney = mikasaKidney.length;
    let healthyKidney = 0;
    for (let i = 0; i < mikasaKidney.length; i++) {
        if (mikasaKidney[i].healthy) {
            healthyKidney += 1;
        }
    }
    let unhealthyKidney = totalKidney - healthyKidney;
    res.json({
        totalKidney,
        healthyKidney,
        unhealthyKidney,
    });
});

app.use(express.json()); // we use app.use() to get the body parameter in post request (we'll see in middleware)

// Reason why we have to use app.use(express.json()) for body unlike query parameters and headers
// because body can be anything, text, html, json
// => we explicitly need to tell using middleware that we are expecting json here! (check 10.appDotUse.js)

// for post request: body is way to send data
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy; // this req.body directly can't be parsed with express => need to use app.use(express.json())
    users[0].kidneys.push({
        healthy: isHealthy,
    });
    // json() to send json data (preferred)
    res.json({
        stat: "kidney passed",
    });
});

// updating all healthy kidneys to unhealthy
app.put("/", function (req, res) {
    if (!atleastOneBadKidney()) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = false;
        }
        res.json({});
    } else {
        res.status(411).json({});
    }
});

// will be removing all unhealthy kidneys
app.delete("/", function (req, res) {
    if (atleastOneBadKidney()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true,
                });
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            state: "unhealthy kidney removed",
        });
    } else {
        res.status(411).json({
            msg: "All kidneys are healthy",
        });
    }
});

function atleastOneBadKidney() {
    let atleastOneBadKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneBadKidney = true;
        }
    }
    return atleastOneBadKidney;
}

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
