const jwt = require("jsonwebtoken");
require("dotenv").config();

function userMiddleware(req, res, next) {
    const userFullToken = req.headers.authorization; // Bearer token
    const tokenArray = userFullToken.split(" "); // ["Bearer",token]
    const unverifiedToken = tokenArray[1]; // token
    try {
        const decoded = jwt.verify(unverifiedToken, process.env.JWT_SECRET);
        if (decoded.username) {
            //  - we will send data to next middleware so that it can use it without user sending
            //    it explicitly => here we are sending username after decoding it from token
            //  - why sending it ? so that access data from DB using username in some other middleware where
            //    userMiddleware is used
            req.username = decoded.username;
            next();
        } else {
            return res.json({
                msg: "Unauthenticated Admin",
            });
        }
    } catch (err) {
        return res.json({
            msg: "Incorrect inputs in headers",
        });
    }
}

module.exports = userMiddleware;
