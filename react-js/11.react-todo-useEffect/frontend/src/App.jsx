import { useState, useEffect } from "react";
/* eslint-disable react/prop-types */

function App() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        async function getTodos() {
            const response = await fetch("http://localhost:3000/todos");
            const resultTodos = await response.json();
            setTodo(resultTodos);
        }
        getTodos();
    }, []);

    return (
        <>
            <ToDos todos={todo} />
        </>
    );
}

function ToDos({ todos }) {
    return (
        <div>
            {todos.map(todo => (
                <div key={todos.id}>
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                </div>
            ))}
        </div>
    );
}

export default App;
