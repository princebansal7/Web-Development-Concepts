const { Admin } = require("../db/schemas");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    username = req.headers.username;

    // for empty headers
    if (!username) {
        return next();
    }
    // findOne() mongoose method to check
    const isAdminExist = await Admin.findOne({
        // username: username,
        //     or (as key and value both same => can write once)
        username,
    });
    if (isAdminExist) {
        return res.status(403).json({
            err: "admin already exists",
        });
    }
    next();
}

module.exports = adminMiddleware;
