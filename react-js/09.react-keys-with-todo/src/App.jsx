import { useState } from "react";

// 3. "Keys" Concept in react:
//    - So, when rendering list or array items in react, we must give each array
//      element a unique key (a number or string), which uniquely identifies each
//      item in that array
//    - key tells react which array item each component corresponds to, it becomes
//      important when array items can move (sorted, deleted, inserted), hence, helps
//      react to make correct updates in DOM tree
//

let idCounter = 4;
const todos = [
    {
        id: 1,
        title: "title-1",
        description: "title-1 description",
    },
    {
        id: 2,
        title: "title-2",
        description: "title-2 description",
    },
    {
        id: 3,
        title: "title-3",
        description: "title-3 description",
    },
];

function App() {
    const [todoList, setTodoList] = useState(todos);
    function addTodo() {
        setTodoList([
            ...todoList,
            {
                id: idCounter++,
                title: "title-new",
                description: "title-new description",
            },
        ]);
    }

    return (
        <>
            <button onClick={addTodo}>Add Todo</button>
            {todoList.map(todoItem => (
                <Todo
                    key={todoItem.id}
                    title={todoItem.title}
                    description={todoItem.description}
                />
            ))}
        </>
    );
}
/* eslint-disable react/prop-types */

function Todo({ title, description }) {
    return (
        <>
            <h2>{title}</h2>
            <h4>{description}</h4>
        </>
    );
}

export default App;
