import { Hono } from "hono";

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

    return c.text("Hello from /input!");
});

export default app;
