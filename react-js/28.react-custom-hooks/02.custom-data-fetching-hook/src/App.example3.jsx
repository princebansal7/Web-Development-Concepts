import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Adding some extra features to our custom hook
// adding loading feature

function useTodo() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:3000/todos").then(res => {
            setTodos(res.data.todos);
            setLoading(false);
        });
    }, []);

    return [todos, loading];
}

// Our component is now clean and concise
function App() {
    const [todos, loading] = useTodo();
    if (loading) return <h1>Loading...</h1>;
    else
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
