import { CreateToDo } from "./components/CreateToDo";
import Todos from "./components/Todos";

function App() {
    return (
        <>
            <CreateToDo />
            <Todos
                todos={[
                    {
                        title: "Task-1",
                        description: "this is task-1, do it",
                        completed: false,
                    },
                    {
                        title: "Task-2",
                        description: "this is task-2, do it",
                        completed: true,
                    },
                ]}
            />
        </>
    );
}

export default App;
