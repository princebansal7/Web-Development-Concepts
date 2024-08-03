import { useState, useEffect } from "react";
/* eslint-disable react/prop-types */

function App() {
    // Now, say we have few buttons and clicking on the button
    // that corresponding ToDo with id gets fetched,
    // (used in pagination - click on 1 => goes to 1st page
    //                     - click on 2 => goes to 2nd page)
    const [selectedId, setSelectedId] = useState(1);

    return (
        <>
            <button
                onClick={function () {
                    setSelectedId(1);
                }}
            >
                1
            </button>
            <button
                onClick={function () {
                    setSelectedId(2);
                }}
            >
                2
            </button>
            <button
                onClick={function () {
                    setSelectedId(3);
                }}
            >
                3
            </button>
            <button
                onClick={function () {
                    setSelectedId(4);
                }}
            >
                4
            </button>
            <ToDoId id={selectedId} />
        </>
    );
}

function ToDoId({ id }) {
    // understanding useEffect() and dependency array:
    //  - we will use a Todo component here which takes id as input,
    //    and fetches data for that todo from the given endpoint and then
    //    renders it => check how will the dependency array changes

    // Now, if I keep dependency array empty => it means, it doesn't depend on anything
    // i.e, it will only runs fetch logic 1st time => sends the fetch() request
    // => sends only the 1st time with default id=1

    // But now, I want whatever id I passed, based on that fetch request should go =>
    // in dependency array id need to be passed, so that whenever id is changed =>
    // useEffect() again run the fetch logic.

    // SO, that was the significance of dependency array!

    console.log(id);
    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/todo?id=${id}`).then(async response => {
            const data = await response.json();
            setTodo(data);
        });
    }, [id]);

    return (
        <div>
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
        </div>
    );
}

export default App;
