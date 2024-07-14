const mongoose = require("mongoose");
require("dotenv").config();

// Very Naive code to understand how db connection works! (There are various checks need to be in-place)

// connecting with mongoose DB, where first_mongo_db is database name
mongoose.connect(`${process.env.DB_CONNECTION_URL}/first_mongo_db`);

// Defining Scehma to let mongo know what kinda data is coming
// - here Test_User_Table is table name inside the first_mongo_db database
const TestUser = mongoose.model("Test_User_Table", {
    name: String,
    email: String,
    password: String,
});

// creating user with data
const testUser = new TestUser({
    name: "Prince Bansal",
    email: "extxt@gmail.com",
    password: "123",
});

// .save() will let you put the defined data in db
testUser.save().then(() => console.log("user added"));
