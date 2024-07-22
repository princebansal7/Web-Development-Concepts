const mongoose = require("mongoose");
const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const jwtSecret = "690069";

mongoose.connect(`${process.env.DB_CONNECTION_URL}/first_mongo_db`);
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

const Users = mongoose.model("Users", {
    name: String,
    email: String,
    password: String,
});

async function userExists(email) {
    // checks in the database
    // findOne => searches key in DB return true or false
    const exists = await Users.findOne({ email: email });
    console.log(exists);
    return exists !== null;
}

app.use(express.json());
function isValidUserMiddleware(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const isValidEmail = emailSchema.safeParse(email);
    const isValidPass = passwordSchema.safeParse(password);
    // console.log(isValidEmail);
    // console.log(isValidPass);
    if (!(isValidEmail.success && isValidPass.success)) {
        return res.json({
            err: "Invalid email or password",
        });
    }
    next();
}

app.post("/signup", isValidUserMiddleware, async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    // console.log(email);
    if (!userExists(email)) {
        res.status(402).json({
            error: "USER doesn't exist",
        });
    }
    try {
        const person = await Users.create({
            name: name,
            email: email,
            password: password,
        });
        res.status(201).json(person);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

app.get("/signin", isValidUserMiddleware, async (req, res) => {
    const email = req.headers.email;
    const password = req.headers.password;
    const isUserInDB = await userExists(email);
    if (!isUserInDB) {
        return res.json({
            error: "user doesn't exist",
        });
    }
    console.log(email);
    const signedToken = jwt.sign({ email, password }, jwtSecret);
    return res.json({
        token: signedToken,
    });
});

app.get("/users", async function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtSecret);
        const password = decoded.password;
        const email = decoded.email;
        // return a list of users other than current user from the database
        let people = [];
        // searches mongoDB for passed email to exists or not and put that user in data!
        const data = await Users.find({ email: email });
        if (data) {
            // find({}) : retrieves all documents in collection
            const allUsers = await Users.find({});
            for (let i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email !== data[0].email) {
                    people.push(allUsers[i]);
                }
            }
            res.status(200).json(people);
        }
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000, () => console.log("App Running"));
