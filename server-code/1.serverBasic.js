const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("Hello First server!"); // send() to send texts
});

app.listen(port, function () {
    console.log(`click: http://localhost:${port}/`);
});
