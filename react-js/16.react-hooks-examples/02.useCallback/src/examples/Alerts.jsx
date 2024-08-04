import { useState, useCallback } from "react";

// - Create a component with a text input field and a button. The goal is to
//   display an alert with the text entered when the button is clicked.
// - Use useCallback to memoize the event handler function that triggers the alert,
//   ensuring it's not recreated on every render.
// - Currently we only have inputText as a state variable and hence you might not
//   see the benefits of useCallback. We're also not passing it down to another component
//   as a prop which is another reason for you to not see it's benefits immediately.

/* eslint-disable react/prop-types */

export function Alerts() {
    const [inputText, setInputText] = useState("");

    // Anytime state variables are used => they need to added as dependency
    const showAlert = useCallback(() => {
        alert(inputText);
    }, [inputText]);

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Enter some text"
            />
            <ShowAlert showAlert={showAlert} />
            <hr />
        </div>
    );
}

function ShowAlert({ showAlert }) {
    return <button onClick={showAlert}>Show Alert</button>;
}
