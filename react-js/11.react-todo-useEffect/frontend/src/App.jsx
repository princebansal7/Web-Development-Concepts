import { useState, useEffect } from "react";
/* eslint-disable react/prop-types */

function App() {
    // const [todos, setTodos] = useState([]);

    // way-1 (fetch() with promise)
    //    - Dependency array is [] => fetch() call will happen once when 1st
    //      render happens (if using React.strictMode, then renders twice)
    // useEffect(() => {
    //     fetch("http://localhost:3000/todos").then(async response =>
    //         setTodo(await response.json())
    //     );
    // }, []);

    // way-2 (fetch with async await, put it in another function as useEffect can't have asynchronous
    //        fxn as 1st arg)
    //       - to make useEffect() asynchronous we can another useAsyncEffect()

    // async function getTodos() {
    //     const response = await fetch("http://localhost:3000/todos");
    //     const resultTodos = await response.json();
    //     setTodos(resultTodos);
    // }
    // useEffect(() => {
    //     getTodos();
    // }, []);

    // return (
    //     <>
    //         <ToDos todos={todo} />
    //         {todos.map(todo => {
    //             return (
    //                 <>
    //                     <ToDos
    //                         key={todo.id}
    //                         title={todo.title}
    //                         description={todo.description}
    //                     />
    //                 </>
    //             );
    //         })}
    //     </>
    // );

    return (
        <>
            <ToDoId id={2} />
        </>
    );
}

// function ToDos({ title, description }) {
//     return (
//         <div>
//             <h2>{title}</h2>
//             <h3>{description}</h3>
//         </div>
//     );
// }

function ToDoId({ id }) {
    // understanding useEffect() and dependency array:
    //  - we will use a Todo component here which takes id as input,
    //    and fetches data for that todo from the given endpoint and then
    //    renders it => check how will the dependency array changes

    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/todo?id=${id}`).then(async response => {
            const data = await response.json();
            setTodo(data);
        });
    }, []);

    return (
        <div>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
        </div>
    );
}

export default App;
