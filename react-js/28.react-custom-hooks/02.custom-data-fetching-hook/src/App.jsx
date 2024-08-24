import useSWR from "swr";
import axios from "axios";
import "./App.css";

const fetcher = async url => {
    const response = await axios.get(url);
    const todos = response.data.todos;
    console.log(todos);
    return todos;
};

function App() {
    const { data, error, isLoading } = useSWR(
        "http://localhost:3000/todos",
        fetcher
    );
    if (error) return <h1>Failed to load..</h1>;
    if (isLoading) return <h1>Loading..</h1>;
    return (
        <>
            {data.map(todo => (
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
