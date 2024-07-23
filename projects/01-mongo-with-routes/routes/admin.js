const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/schemas");
const router = Router();
const express = require("express");
// Admin Routes (to structure application in cleaner way)
// It's handing all the requests coming to /admin (as per index.js)

// handles /admin/signup

router.post("/signup", async (req, res) => {
    // Implement admin signup logic
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

// handles /admin/courses
router.post("/courses", adminMiddleware, async (req, res) => {
    // Implement course creation
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

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
    });
    return res.json({
        message: "Course created successfully",
        courseId: course._id,
    });
});

// handles /admin/courses
router.get("/courses", adminMiddleware, async (req, res) => {
    const allCourse = await Course.find({});
    res.json(allCourse);
});

module.exports = router;
