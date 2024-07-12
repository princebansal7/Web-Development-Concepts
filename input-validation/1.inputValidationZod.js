// Manual input validation is hard as there are a lot of checks need
// to be in place like:
// - password length, characters, correct email etc
// So, there are bunch of libraries which make these tasks easier
// like Zod
const express = require("express");
const z = require("zod");
const app = express();
const port = 3000;

app.use(express.json());

// kidneys = [1,2] => array of numbers => create schema according to input
// we are expecting! (main part where we need to use brain)

const mySchema = z.array(z.number());

app.post("/", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = mySchema.safeParse(kidneys); // one line input validation

    res.send({
        response,
    });
});

/*
Zod gives better error message which we can use to response to user nicely
eg:
{
    "response": {
        "success": false,
        "error": {
            "issues": [
                {
                    "code": "invalid_type",
                    "expected": "array",
                    "received": "undefined",
                    "path": [],
                    "message": "Required"
                }
            ],
            "name": "ZodError"
        }
    }
}
*/

app.post("/better-handle", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = mySchema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json({
            msg: "invalid input",
        });
        return;
    }
    res.send({
        response,
    });
});

app.listen(port);
