const { User } = require("../db/schemas");

async function userMiddleware(req, res, next) {
    username = req.headers.username;
    password = req.headers.password;

    // findOne() mongoDB method returns single matching document or null
    User.findOne({
        // username: username,
        //     or (as key and value both same => can write once)
        username,
        password,
    }).then(value => {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "user doesn't exist",
            });
        }
    });
}

module.exports = userMiddleware;
