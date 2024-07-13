const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;
const jwtPassword = "696969"; // we need password to verify the token

// Not using DBs yet so will be doing changes in memory
const users = [
    {
        username: "prince.bansal1914@gmail.com",
        password: "12377",
        name: "Prince Bansal",
    },
    {
        username: "john.doe333@gmail.com",
        password: "99339933",
        name: "John Doe",
    },
    {
        username: "elisa.perry@gmail.com",
        password: "112233",
        name: "Elisa Perry",
    },
];

function userExists(username, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            return true;
        }
    }
    return false;
}

app.use(express.json());

// We'll send object in body (postman) like:
// {
//     "username": "prince.bansal1914@gmail.com",
//     "password":  "12377"
// }
app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exists In-Memory DB",
        });
    }
    // we'll use jwt's sign() method:
    //   jwt.sign(payload, secretOrPrivateKey, [options, callback])
    //   (Asynchronous) If a callback is supplied, the callback is called with the err or the JWT.
    //   (Synchronous) Returns the JsonWebToken as string
    //   payload could be an object literal, buffer or string representing valid JSON.

    //we encrypt username => returns token with encryted username  (long string we learned about in md file)
    let token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

// Will be sending data using Headers like:
// Authorization: <token_long_string>
app.get("/users", (req, res) => {
    const userToken = req.headers.authorization;
    try {
        const decoded = jwt.verify(userToken, jwtPassword);
        const username = decoded.username;
        // return list of all users except the signed in user
        res.json({
            allUsersExceptSignedinUser: users.filter(arrayUser => {
                return arrayUser.username == username ? false : true;
            }),
        });
    } catch (err) {
        res.status(403).json({
            msg: "Invalid user token",
        });
    }
});

app.listen(port, () => {
    console.log(`App running on ${port}`);
});
