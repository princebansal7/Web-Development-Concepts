const express = require("express");
const cors = require("cors");
const app = express();

// We know nothing about CORS yet, still
// its clear it's working as a middleware to pre-check something,
// will learn more later
app.use(cors());

app.get("/sum", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const sum = parseInt(a) + parseInt(b);
    console.log(sum);
    res.send(sum.toString());
});

app.listen(3000);
