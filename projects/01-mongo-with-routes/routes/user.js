const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/schemas");

// User Routes
router.post("/signup", async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

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

// open for all => anyone can see available courses
// in real world admin courses will have additional keys, which helps
// to protect and access from normal users and admin, eg: isPublished

// routes to /user/courses
router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    const allCourse = await Course.find({});
    res.json(allCourse);
});

// routes to user/courses/id
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic
    // we had Purchase table separate, we could've done:
    // Purchase.create({
    //     userId,
    //     purchaseId
    // })
    // But we have purchase in user table itself
    // 1. get the courseId
    const courseId = req.params.courseId;
    //2. get the username (headers, if middleware passes)
    const username = req.headers.username;
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

// user/get-courses
router.get("/get-courses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const userCourses = await User.findOne({ username: req.headers.username });
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
