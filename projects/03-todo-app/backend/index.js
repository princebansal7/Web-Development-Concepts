import express from "express";
import { createTodoSchema, updateTodoSchema } from "./inputSchema.js";
import { Todo } from "./db/db.js";
import dotenv from "dotenv";
import cors from "cors";

const PORT = process.env.PORT || 3000;
dotenv.config();
const app = express();
app.use(express.json());

// to allow from our machine to hit backend
// app.use(cors({ origin: "http://localhost/5173" }));

// To allow from any frontend origin
app.use(cors());

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
        await Todo.create({
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
        const allTodos = await Todo.find({});
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
        await Todo.updateOne(
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
