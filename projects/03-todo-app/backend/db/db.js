const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`${process.env.DB_URL}/todo-app-db1`);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model("todo-table", todoSchema);
module.exports = {
    todo,
};
