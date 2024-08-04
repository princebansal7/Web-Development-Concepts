import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component
// mounts or the button is clicked, automatically focus the text input field
// using useRef.

/*

// 1. Without react
export function FocusOnField() {
    // 1st time when component renders => cursor will be in input field
    useEffect(() => {
        document.getElementById("input-box").focus();
    }, []);

    // When we click Button, cursor will focus in input field
    const handleButtonClick = () => {
        document.getElementById("input-box").focus();
    };

    return (
        <div>
            <input id="input-box" type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
}
*/

// Using react (with useRef)
// 1st use case of useRef -  getting access of DOM elements
export function FocusOnField() {
    // 1st time when component renders => cursor will be in input field

    const inputBoxRef = useRef();
    useEffect(() => {
        inputBoxRef.current.focus();
    }, [inputBoxRef]);

    // When we click Button, cursor will focus in input field
    const handleButtonClick = () => {
        inputBoxRef.current.focus();
    };

    return (
        <div>
            <input
                ref={inputBoxRef}
                type="text"
                placeholder="Enter text here"
            />
            <button onClick={handleButtonClick}>Focus Input</button>
            <hr />
        </div>
    );
}
