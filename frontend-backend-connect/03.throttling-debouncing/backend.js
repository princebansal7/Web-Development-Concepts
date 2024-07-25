const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/sum", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const sum = parseInt(a) + parseInt(b);
    console.log(sum);
    res.send(sum.toString());
});

app.listen(3000);

// Throttling (not needed for now)
// - it is just like debouncing but instead frontend we apply it on backend
// - we limit the responses sent by backend by some interval or number so
//   those responses are not sent in rapid succession but after a duration, this is
//   called throttling (server responding back slowly)
