const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/schemas");
const router = Router();

// Admin Routes (to structure application in cleaner way)
// It's handing all the requests coming to /admin (as per index.js)

// handles /admin/signup
router.post("/signup", async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if an user with this username already exists or not
    // if it does => return user already exists => adminMiddleware is taking care of it (not added to these route)
    // if not => then put it in DB

    // I will not use adminMiddleware here, because while signup it will create issues:
    //   - when we do 2nd signup and do not send the same username, password in the headers
    //     as body, middleware let us proceed
    //   - but if we send old username => it will be existed in DB, middleware won't let us proceed
    // hence, unnecessary error or need send headers and body consciously
    // So, I will perform the checks here itself
    const adminExist = await Admin.findOne({ username });
    if (adminExist) {
        return res.send(403).json({
            msg: "admin already exists",
        });
    }
    await Admin.create({
        username,
        password,
    });
    res.json({
        message: "Admin created successfully",
    });
});

// handles /admin/courses
router.post("/courses", adminMiddleware, (req, res) => {
    // Implement course creation logic
});

// handles /admin/courses
router.get("/courses", adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;
