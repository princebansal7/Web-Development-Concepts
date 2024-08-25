import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(`${process.env.DB_URL}/todo-app`);

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

export const Todo = mongoose.model("Todo", todoSchema);
