const express = require("express");
const app = express();
const port = 3000;

// we'll take themepark example:
// where kids are going on a ride

// Here we performed no checks, hence anyone access the ride1
app.get("/ride1", (req, res) => {
    res.json({
        msg: "ride 1 accessed",
    });
});

app.listen(port);
