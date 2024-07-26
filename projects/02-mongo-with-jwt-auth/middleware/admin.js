const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware for handling auth (auth using JWT)
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    //  - Check readme for the exact headers to be expected
    //  - when we get headers => they are converted to lowercase (hence 'authorization' instead of 'Authorization')
    const userFullToken = req.headers.authorization; // Bearer token
    // correct userToken will look like:
    // Headers (in postman)
    // Authorization Bearer aslmacddcdcs.cdjsvfl.svnfvflsvfl.ksdnvslvns

    const tokenArray = userFullToken.split(" "); // ["Bearer",token]
    const unverifiedToken = tokenArray[1]; // token

    //  - we know we need a global secret which is used to sign and verify the token
    //  - this authentication, authorization is little different, (we check what type of user is trying to signin
    //    i.e, user or admin as username can be same but access type can be different)
    try {
        const decoded = jwt.verify(unverifiedToken, process.env.JWT_SECRET);
        //  - We are not checking username in database now, we are using JWT => that's the benefit of it
        //    as it saves db calls!
        if (decoded.username) {
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

module.exports = adminMiddleware;
