const express = require("express");
const z = require("zod");
const app = express();
const port = 3000;

app.use(express.json());

// 1. [1,2,..] => array of numbers => zod schema:
app.post("/array", (req, res) => {
    const mySchema = z.array(z.number());
    const kidneys = req.body.kidneys;
    const response = mySchema.safeParse(kidneys);

    res.send({
        response,
    });
});

/* 
    2. Expected data
    {
        email: string => have @ etc
        password:  => atleast 8 char
        country: either IN or US
    }
    => zod schema:
*/

app.post("/signup", (req, res) => {
    const mySchema = z.object({
        email: z.string().email(),
        password: z.string().min(7),
        country: z.literal("IN").or(z.literal("US")),
    });

    const userData = req.body;
    const result = mySchema.safeParse(userData);
    res.send({
        result,
    });
});

app.listen(port);
