const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/schemas");

// User Routes

// user/signup
router.post("/signup", async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;

    const userExist = await User.findOne({ username });
    if (userExist) {
        return res.status(403).json({
            msg: "user exists already",
        });
    }
    const user = await User.create({
        username,
        password,
    });
    if (user) {
        return res.json({
            msg: "user created successfully",
        });
    } else {
        return res.status(500).json({
            msg: "Something is wrong",
        });
    }
});

// user/signin
router.post("/signin", async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.headers;
    // check admin exist in DB or not
    const user = await User.findOne({
        username,
        password,
    });
    if (user) {
        const jwtToken = jwt.sign({ username }, process.env.JWT_SECRET);
        return res.json({
            token: jwtToken,
        });
    } else {
        res.status(411).json({
            msg: "incorrect email or password",
        });
    }
});

// user/courses
router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    const allCourse = await Course.find({});
    res.json(allCourse);
});

// user/courses/<anything> : as courseId is dynamic value
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username; // sent by userMiddleware
    // console.log(username);
    const courseId = req.params.courseId;
    await User.updateOne(
        {
            username: username,
        },
        {
            $push: {
                purchasedCourses: courseId,
            },
        }
    );
    console.log(courseId);
    res.json({
        msg: "course purchase complete",
    });
});

// user/purchasedCourses
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    const username = req.username; // sent by userMiddleware
    const userCourses = await User.findOne({ username });
    // console.log(userCourses.purchasedCourses);
    const courses = await Course.find({
        _id: {
            $in: userCourses.purchasedCourses,
        },
    });

    res.json({
        msg: courses,
    });
});

module.exports = router;
