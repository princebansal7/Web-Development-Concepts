const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
// kidneys = [1,2] // expected

// But user can send any data in body, which can be wrong too like, string, number wrong data
// in such case:
// const kidneyLength = kidney.length; will throw exceptions which we don't want user to see
// We can use another middleware which catches all such exceptions, have 4 arguments (express recogonize it due to these 4 args)
// it always comes in last of the code

app.post("/", (req, res) => {
    const kidney = req.body.kidneys;
    const kidneyLength = kidney.length;
    res.send(`number kidneys are ${kidneyLength}`);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// Global catches - middleware => These are called Error Handling middleware
// They helps to give user a better error message
// have err argument
// have next argument (so that we can chain multiple global catches)
app.use(function (err, req, res, next) {
    res.json({
        mgs: "Invalid data",
    });
});
