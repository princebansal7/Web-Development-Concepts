const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");
const { todo } = require("./db/db.js");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
    const createPayLoad = req.body;
    // input validation
    const validTodoPayLoad = createTodoSchema.safeParse(createPayLoad);
    if (!validTodoPayLoad.success) {
        return res.status(400).json({
            msg: "invalid inputs",
        });
    }
    // put data in mongoDB
    try {
        await todo.create({
            title: createPayLoad.title,
            description: createPayLoad.description,
            completed: false,
        });
        res.json({
            msg: "todo created!",
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

// get all todos from db
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await todo.find({});
        res.json({ todos: allTodos });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put("/completed", async (req, res) => {
    const idPayLoad = req.body;
    console.log(idPayLoad);
    const validIdPayload = updateTodoSchema.safeParse(idPayLoad);
    console.log(validIdPayload);
    if (!validIdPayload.success) {
        return res.status(400).json({
            msg: "invalid id",
        });
    }
    // get matching data from mongodb, find() send promise
    // updateOne(arg1, arg2) => arg1 is on what basis value need to be updated
    //                          arg2 is what value need to be updated
    try {
        await todo.updateOne(
            {
                _id: idPayLoad.id,
            },
            {
                completed: true,
            }
        );
        res.json({
            msg: "todo is completed",
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, console.log(`http://localhost/${PORT}`));
