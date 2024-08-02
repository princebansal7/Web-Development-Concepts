import { useState, useEffect } from "react";
/* eslint-disable react/prop-types */

function App() {
    const [todos, setTodos] = useState([]);

    // way-1 (fetch() with promise)
    // useEffect(() => {
    //     fetch("http://localhost:3000/todos").then(async response =>
    //         setTodo(await response.json())
    //     );
    // }, []);

    // way-2 (fetch with async await, put it in another function as useEffect can't be asynchronous)
    //       - to make useEffect() asynchronous we can another useAsyncEffect()
    async function getTodos() {
        const response = await fetch("http://localhost:3000/todos");
        const resultTodos = await response.json();
        setTodos(resultTodos);
    }

    // To refresh todos in every 10 seconds
    useEffect(() => {
        setInterval(() => {
            getTodos();
        }, 1000);
    }, []);

    return (
        <>
            {todos.map(todo => {
                return (
                    <>
                        <ToDos
                            key={todo.id}
                            title={todo.title}
                            description={todo.description}
                        />
                    </>
                );
            })}
        </>
    );
}

function ToDos({ title, description }) {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
    );
}

export default App;
