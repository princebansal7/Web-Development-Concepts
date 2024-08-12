import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Function to generate a random integer between min and max (inclusive)
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// Generate 50 todos
const todos = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: `Todo ${index + 1}`,
    description: `This is the description for todo ${index + 1}`,
    complete: false,
}));

// or
// const todos = [];
// for (let i = 1; i <= 50; i++) {
//     todos.push({
//         id: i,
//         title: `Todo ${i}`,
//         description: `This is the description for todo ${i}`,
//         complete: false,
//     });
// }

// Route to respond with todos based on the id query parameter
app.get("/todos", (req, res) => {
    const { id } = req.query;

    if (id) {
        const todo = todos.find(t => t.id === parseInt(id));
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({
                error: "Todo not found, generated till id 50",
            });
        }
    } else {
        res.json(todos); // Return all todos if no id is provided
    }
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
