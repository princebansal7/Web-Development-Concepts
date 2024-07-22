const { User } = require("../db/schemas");

async function userMiddleware(req, res, next) {
    username = req.headers.username;
    password = req.headers.password;

    // findOne() mongoDB method returns single matching document or null
    const adminExist = await User.findOne({ username });
    if (!adminExist) {
        return res.status(403).json({
            err: "admin doesn't exits",
        });
    }
    next();
}

module.exports = userMiddleware;
