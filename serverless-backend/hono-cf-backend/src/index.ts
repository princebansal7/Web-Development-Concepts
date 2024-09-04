import { Hono } from "hono";
import { Context } from "hono/jsx";

const app = new Hono();

// Here with context we do all the stuff that we do using req, res in express

app.get("/", context => {
    return context.text("Hello from Hono backend!");
});

// input from user example:

// Request via postman: http://localhost:8787/input?a=10&b=30
// Header: Authorization: sample
// body: {"data":"text"}
// query parameters: a=10, b=30
app.post("/input", async c => {
    const body = await c.req.json(); // to get body
    console.log(body); // { data: 'text' }
    console.log(c.req.header("Authorization")); // sample
    console.log(c.req.query("a")); // 10
    console.log(c.req.query("b")); // 30

    return c.text("Hello from /input");
});

// Similar to express we can add middlewares too.

async function authMiddleware(c: any, next: any) {
    if (c.req.header("Authorization")) {
        // do some auth logic
        // calculating request time
        console.log(c.req.header("Authorization"));
        const initialTime = new Date();
        await next();
        const totalTime = (new Date().getTime() - initialTime.getTime()) / 1000;
        console.log(`Total time: ${totalTime} seconds`);
    } else {
        c.text("You don't have access");
    }
}

// app.use(authMiddleware);

app.post("/user", authMiddleware, async c => {
    return c.text("Hello from /user");
});

export default app;
