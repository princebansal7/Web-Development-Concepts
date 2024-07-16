const jwt = require("jsonwebtoken");
const z = require("zod");
const jwtPassword = "secret";

// Tasks:
//  - Write a function that takes in a username and password and returns a JWT token with the username encoded.
//    Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
//  - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
//  - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
//  - To test, go to the 02-jwt folder and run `npx jest ./tests`

const usernameSchema = z.string().email();
const passwordSchema = z.string().min(6);

function signJwt(username, password) {
    const isValidUsername = usernameSchema.safeParse(username);
    const isValidPassword = passwordSchema.safeParse(password);
    if (!isValidUsername.success || !isValidPassword.success) {
        return null;
    }
    const signedToken = jwt.sign({ username }, jwtPassword);
    return signedToken;
}

function verifyJwt(token) {
    // Your code here
    try {
        jwt.verify(token, jwtPassword);
        return true;
    } catch (err) {
        return false;
    }
}

function decodeJwt(token) {
    // Your code here
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

console.log(signJwt("prince@gmail.com", "password123"));
console.log(signJwt("prince.com", "p123"));

console.log(decodeJwt("wrongtoken"));
console.log(
    decodeJwt(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    )
);

console.log(verifyJwt("wrongtoken", jwtPassword));
console.log(
    verifyJwt(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        jwtPassword
    )
);
