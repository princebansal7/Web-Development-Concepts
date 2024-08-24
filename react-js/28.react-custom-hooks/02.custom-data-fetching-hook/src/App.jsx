import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Creating custom hook
// - should use pre-defined hook
// - need to start with 'use'
// Handles getting todos from backend and we are returning just the todos
// and not the updater fxn as user will need just the todos list

function useTodo() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/todos").then(res => {
            setTodos(res.data.todos);
        });
    }, []);

    return todos;
}

// Our component is now clean and concise
function App() {
    const todos = useTodo();
    return (
        <>
            {todos.map(todo => (
                <MyTodo key={todo.id} todo={todo} />
            ))}
        </>
    );
}

/* eslint-disable react/prop-types */

function MyTodo({ todo }) {
    console.log(todo);
    return (
        <>
            <h2>{todo.title}</h2>
            <h4>{todo.description}</h4>
            <br />
        </>
    );
}
export default App;
