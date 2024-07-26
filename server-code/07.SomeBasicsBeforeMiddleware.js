const express = require("express");
const app = express();
const port = 3000;

// 1. Here we are adding just 1 callback function but actually
//    we can add here multiple callback functions
app.get("/checkup", function (req, res) {
    //..
    //..
    //..
});

// Adding multiple callbacks
app.get(
    "/checkup",
    function (req, res) {
        // cb fxn 1
        //..
        //..
    },
    function (req, res) {
        // cb fxn 2
        //..
        //..
    }
    //...
    //...
);
// 2. Question ? how and in what order do they called ?
//   1st cb fxn 1 will get called
//   we can add 3rd argument next in these callback fxns (express provides next() fxn)
//   next() is a function itself which we can call if we think cb fxn's are fine => and then it gives
//   control to the next callback
//--
// This way these chain of functions are pre-checks before the final cb fxn gets executed

function cb1(req, res, next) {
    //..
    //..
    next(); // it will move control to cb2 (as it is next in order)
}
function cb2(req, res, next) {
    //..
    next(); // it will move control to cb3
}
function cb3(req, res, next) {
    //..
    next(); // it will move control to last i.e, final callback
}
app.get("/", cb1, cb2, cb3, (req, res) => {
    // pre-checks cb1,cb2,cb3 happened already
    //..
    //..
    // final callback fxn
    res.send("completed");
    // here we don't need to call next(), as this is the final or last fxn
});
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

// NOTE: Middlewares mostly used to do below 3 tasks:
//       1. End the request
//       2. Forward the request to next middleware
//       3. Pass data along to the next middleware (Important while doing authentications)
