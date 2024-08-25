import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Adding some extra features to our custom hook
// adding loading feature
// adding auto refresh feature - user will give input and after that many
// second we will re-poll the backend i.e, hit the backend and get new todos

// Here 2 interval runs, if user changes the seconds input
// => 2 clocks running => more backend calls
function useTodo(seconds) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setInterval(() => {
            axios.get("http://localhost:3000/todos").then(res => {
                setTodos(res.data.todos);
                setLoading(false);
            });
        }, seconds * 1000);

        axios.get("http://localhost:3000/todos").then(res => {
            setTodos(res.data.todos);
            setLoading(false);
        });
    }, [seconds]);

    return { todos, loading };
}

// Our component is now clean and concise
function App() {
    const { todos, loading } = useTodo(3);
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
