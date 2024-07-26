const { Router } = require("express");
const { Admin, Course } = require("../db/schemas");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
require("dotenv").config();
const router = Router();

// Admin Routes
// admin/signup
router.post("/signup", async (req, res) => {
    // Implement admin signup logic (same as previous project)
    const username = req.body.username;
    const password = req.body.password;

    const adminExist = await Admin.findOne({ username });
    if (adminExist) {
        return res.status(403).json({
            msg: "admin exists already",
        });
    }
    const admin = await Admin.create({
        username,
        password,
    });
    if (admin) {
        return res.json({
            msg: "Admin created successfully",
        });
    } else {
        return res.status(500).json({
            msg: "Something is wrong",
        });
    }
});

//admin/signin
// login in admin and returns back jwt token
// middleware automatically checks for valid admin
router.post("/signin", async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.headers;
    // check admin exist in DB or not
    const admin = await Admin.findOne({
        username,
        password,
    });
    if (admin) {
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

// admin/courses - POST request
router.post("/courses", adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const isPublished = req.body.isPublished;

    const courseExist = await Course.findOne({ title });
    if (courseExist) {
        return res.status(403).json({
            msg: "course already exists",
        });
    }
    // console.log("bahar aa gya");

    const course = await Course.create({
        title,
        description,
        price,
        imageLink,
        isPublished,
    });
    return res.json({
        message: "Course created successfully",
        courseId: course._id,
    });
});

// admin/courses - GET request
router.get("/courses", adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourse = await Course.find({});
    res.json(allCourse);
});

module.exports = router;
