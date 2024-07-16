const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/interest-data", function (req, res) {
    const principle = parseInt(req.query.p);
    const rate = parseInt(req.query.r);
    const time = parseInt(req.query.t);
    const simpleInterest = (principle * rate * time) / 100;
    const totalAmount = principle + simpleInterest;
    res.json({
        simpleInterest,
        totalAmount,
    });
});

app.listen(port, console.log(`App running on ${port}`));
