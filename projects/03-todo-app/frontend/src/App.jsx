import { CreateToDo } from "./components/CreateToDo";
import { useState } from "react";
import Todos from "./components/Todos";

function App() {
    const [todosBE, setTodosBE] = useState([]);
    fetch("http://localhost:3000/todos").then(async response => {
        const json = await response.json();
        setTodosBE(json.todos);
    });
    return (
        <>
            <CreateToDo />
            <Todos todos={todosBE} />
        </>
    );
}

export default App;
