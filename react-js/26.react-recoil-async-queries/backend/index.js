import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Route to respond with random data
app.get("/notifications", (req, res) => {
    const data = {
        networks: getRandomInt(0, 50),
        jobs: getRandomInt(0, 50),
        messages: getRandomInt(0, 200),
        notifications: getRandomInt(0, 50),
    };

    res.json(data);
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
