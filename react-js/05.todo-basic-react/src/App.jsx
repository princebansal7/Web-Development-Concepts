import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([
        { title: "Learn Dance", description: "classical dance moves" },
        { title: "Guitar lesson", description: "play guitar" },
    ]);
    function addTodos() {
        setTodos([
            ...todos,
            { title: "New ToDo", description: "new description" },
        ]);
    }
    return (
        <>
            <button onClick={addTodos}>Add todo</button>
            {todos.map(function (todo) {
                return (
                    <Todo title={todo.title} description={todo.description} />
                );
            })}
        </>
    );
}

function Todo(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
        </div>
    );
}

export default App;
