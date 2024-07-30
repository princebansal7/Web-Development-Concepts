const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`${process.env.DB_URL}/todo-app-db1`);

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    completed: {
        type: Boolean,
        default: false,
    },
});

const todo = mongoose.model("todo-table", todoSchema);
module.exports = {
    todo,
};
