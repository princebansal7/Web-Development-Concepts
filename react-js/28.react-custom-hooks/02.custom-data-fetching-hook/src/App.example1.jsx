import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// We are doing data fetching in component itself
// ugly way to write the code

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/todos").then(res => {
            setTodos(res.data.todos);
        });
    }, []);

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
