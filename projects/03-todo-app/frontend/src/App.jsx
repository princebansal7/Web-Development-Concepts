import { useState, useEffect } from "react";
import CreateToDo from "./components/CreateToDo";
import Todos from "./components/Todos";

function App() {
    const [todosBE, setTodosBE] = useState([]);

    // 1. This way whenever get new data using fetch, state is updated =>
    //    setTodoBE again re-renders App() => again fetch() => again state update and so on..
    //    that's why this is not the correct way to send backend request to get data

    // fetch("http://localhost:3000/todos").then(async response => {
    //     const json = await response.json();
    //     setTodosBE(json.todos);
    // });

    // To Solve this we need to use useEffect() use, which solves this issue

    useEffect(() => {
        fetch("http://localhost:3000/todos").then(async response => {
            const json = await response.json();
            setTodosBE(json.todos);
        });
    }, []);

    return (
        <>
            <CreateToDo />
            <Todos todos={todosBE} />
        </>
    );
}

export default App;
