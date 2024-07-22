const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(`${process.env.DB_CONNECTION_URL}/courses-db`);

// Defining schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Courses", // refers to Courses table
        },
    ],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number,
});

// creating required models (these models will call the CRUD methods)
const Admin = mongoose.model("Admins", AdminSchema);
const User = mongoose.model("Users", UserSchema);
const Course = mongoose.model("Courses", CourseSchema);

// Exporting models so that can use in other files
module.exports = {
    Admin,
    User,
    Course,
};
