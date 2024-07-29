import { CreateToDo } from "./components/CreateToDo";
import { useState } from "react";
import Todos from "./components/Todos";

function App() {
    // 1. This way whenever get get new data using fetch, state is updated =>
    //    setTodoBE again re-renders App() => again fetch() => again state update and so on..
    //    that's why this is not the correct way to send backend request to get data
    //
    const [todosBE, setTodosBE] = useState([]);
    fetch("http://localhost:3000/todos").then(async response => {
        const json = await response.json();
        setTodosBE(json.todos);
    });
    //
    // to Solve this we need to use useEffect() use, which solves this issue

    return (
        <>
            <CreateToDo />
            <Todos todos={todosBE} />
        </>
    );
}

export default App;
