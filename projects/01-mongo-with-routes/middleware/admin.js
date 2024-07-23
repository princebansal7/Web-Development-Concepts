const { Admin } = require("../db/schemas");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    username = req.headers.username;
    password = req.headers.password;

    // findOne() mongoose method to check
    Admin.findOne({
        // username: username,
        //     or (as key and value both same => can write once)
        username,
        password,
    }).then(value => {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "admin doesn't exist",
            });
        }
    });
}

module.exports = adminMiddleware;
