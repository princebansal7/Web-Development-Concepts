const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

// Generate an array of objects with random title, description & id
function generateRandomData() {
    const length = Math.floor(Math.random() * 5) + 1; // Random length between 1 and 5
    const tasks = [];

    for (let i = 0; i < length; i++) {
        tasks.push({
            id: i + 1,
            title: `Task-${i + 1}`,
            description: `description-${i + 1}, random text for description`,
        });
    }
    return tasks;
}

app.get("/tasks", (req, res) => {
    const data = generateRandomData();
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/tasks`);
});
