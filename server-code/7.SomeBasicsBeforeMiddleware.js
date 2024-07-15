const express = require("express");
const app = express();
const port = 3000;

// 1. Here we are adding just 1 callback function but actually
//    we can add here multiple callback functions
app.get("/chekup", function (req, res) {
    //..
    //..
    //..
});

// Adding multiple callbacks
app.get(
    "/chekup",
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
);
// 2. Question ? how and in what order do they called ? => 1st cb fxn 1 gets called
//   we can add 3rd argument next in these callback fxns (express gives this next)
//   next is a function itself which we can call if we think cb fxn 1 is fine => and then it gives control to the next callback
//--
// This way these chain of fucntions are pre-checks before the final cb fxn gets executed

function cb1(req, res, next) {
    //..
    //..
    next(); // it will move control to cb2
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
    // prechecks cb1,cb2,cb3 happened already
    //..
    //..
    // final callback fxn
    res.send("completed");
});
app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
