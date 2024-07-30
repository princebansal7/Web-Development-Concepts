import { useState } from "react";

function App() {
    // 3. How can we Minimize this re-rendering behavior (Parent-child)
    //    way-1 (push the state where re-rendering required)
    //        - created new component which have the state variable, hence only this
    //          component gets re-rendered when pressing the button
    //
    //  => push down the state to the lowest common ancestor of the child where the
    //     state is required and not to put the state in root
    //  => as putting state at root will causes all child components to re-render
    return (
        <>
            <HeaderWithButton />
            <Header title="Title-2: I will not re-render" />
            <Header title="Title-3: I will not re-render" />
            <Header title="Title-4: I will not re-render" />
        </>
    );
}

function Header({ title }) {
    return (
        <>
            <h2>{title}</h2>
        </>
    );
}

// component where we pushed down the state, where state was actually required

function HeaderWithButton() {
    const [title, setTitle] = useState("Title-1: Random number (1 to 10) is: ");
    function updateTitle() {
        // console.log(title);
        let randomNum = Math.floor(Math.random() * 10 + 1);
        let str = randomNum.toString();
        setTitle("Title-1: Random number (1 to 10) is: " + str);
    }
    return (
        <div>
            <button onClick={updateTitle}>Get Random Number</button>
            <h2>{title}</h2>
        </div>
    );
}

export default App;
