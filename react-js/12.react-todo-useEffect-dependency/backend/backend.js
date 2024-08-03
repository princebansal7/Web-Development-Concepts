import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

// Helper function to generate a random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to generate random todos
function generateTodos() {
    const todos = [];
    const todoCount = getRandomInt(10, 20);

    for (let i = 0; i < todoCount; i++) {
        todos.push({
            id: i + 1,
            title: `Todo Title ${i + 1}`,
            description: `Description for todo ${i + 1}`,
            completed: false,
        });
    }

    return todos;
}

// Route to get random todos
app.get("/todos", (req, res) => {
    console.log("todos ep hit");
    const todos = generateTodos();
    res.json(todos);
});

// Route to get a specific todo by id
app.get("/todo", (req, res) => {
    console.log("todos ep with id hit");
    const id = parseInt(req.query.id);
    const todos = generateTodos();
    const todo = todos.find(t => t.id === id);

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).send({
            error: "todo with id from 1 to 10 always generated, the current passed id todo is not found",
        });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
