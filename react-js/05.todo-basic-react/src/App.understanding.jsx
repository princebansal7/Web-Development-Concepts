import { useState } from "react";

function App() {
    // taking state input as array with some initial values
    const [todos, setTodos] = useState([
        { title: "Learn Dance", description: "classical dance moves" },
        { title: "Guitar lesson", description: "play guitar" },
    ]);

    // adding new array object values on button click
    function addTodos() {
        // using spread operator and adding new value in old array
        // eg: nums = [1, 2, 4]
        //    [...nums, 69] => [1, 2, 4, 69]
        // using setTodos(), provided by useState => so that it renders the updated state
        //
        // setTodos([
        //     ...todos,
        //     { title: "New ToDo", description: "new description" },
        // ]);

        // or (naive way with using array helper method map)

        const newTodos = [];
        for (let i = 0; i < todos.length; i++) {
            newTodos.push(todos[i]);
        }
        newTodos.push({
            title: "New ToDo",
            description: "new description",
        });
        setTodos(newTodos);
    }

    // just for understanding child rendering
    //  - a is not a state variable => hence react is not watching it,
    //  - hence if due to parent, child re-renders, react still won't re-render a's value
    let a = 0;
    window.setInterval(() => {
        a++;
    }, 1000);
    return (
        <>
            {/* Button with inline style in react:
            - as js variable should be in {}
            - then object have its own {}
            => that's why style={{..properties}}
        
        */}
            <button style={{ border: 2, padding: 10 }} onClick={addTodos}>
                Add todo
            </button>
            {/* <Todo title={todos[0].title} description={todos[0].description} />
            <Todo title={todos[1].title} description={todos[1].description} /> */}
            {/* or */}
            {todos.map(function (todo) {
                return (
                    <Todo title={todo.title} description={todo.description} />
                );
            })}
            {/* Child will also re-render if parent re-renders unless it is using state
             variables or not */}

            <DummyButton a={a} />
        </>
    );
}

function DummyButton(props) {
    console.log("Dummy button rendered " + props.a);
    return <button>Dummy button</button>;
}

// Todo component
function Todo(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
        </div>
    );
}

export default App;
