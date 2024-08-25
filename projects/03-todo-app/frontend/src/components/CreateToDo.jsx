import { useState } from "react";

function CreateToDo() {
    // Now, we need to put data in DB from our frontend

    // 2. using local state variables
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // we want to fill title and description state variables whenever user completes typing input
    // => use onchange() event (we saw in DOM manipulation)
    // => will cause re-renders hence un-optimal

    function getTodos() {
        // instead of fetch() we can use axios for cleaner syntax
        fetch("http://localhost/3000/todos", {
            method: "POST",
            // how we get title and description?
            //  1. using document.getElementByID or querySelector (but we want to get away for this)
            //     (this will not cause re-renders)
            //  2. un-optimal way but widely used using local state variables
            //     (will cause a lot of re-renders)
            //  3. optimal react way using react-query (will see later)
            // Thumb rule of react is Re-renders should be minimum

            // way-1 (used id attribute in input tag)
            // body: {
            //     title: document.getElementById("title")
            //         .innerText,
            //     description:
            //         document.getElementById("description")
            //             .innerText,
            // },

            // way-2 (using local state variables)
            body: JSON.stringify({
                title,
                description,
            }),
            // this is to tell POST request that data is JSON
            headers: {
                "Content-type": "application/json",
            },
        }).then(async function (response) {
            await response.json();
            alert("Todo added");
        });
    }

    return (
        <div>
            <input
                id="title"
                type="text"
                placeholder="title"
                onChange={function (event) {
                    // console.log(event.target.value);
                    setTitle(event.target.value);
                }}
            ></input>
            <br />
            <input
                id="description"
                type="text"
                placeholder="description"
                onChange={function (event) {
                    setDescription(event.target.value);
                }}
            ></input>
            <br />
            <button onClick={getTodos}>Add Todo</button>
        </div>
    );
}

export default CreateToDo;
