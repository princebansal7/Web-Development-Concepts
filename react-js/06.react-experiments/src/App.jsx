import { useState } from "react";
import Header from "./components/Header.jsx";

// 2. Now we want user to update the 1st header title on click of button
function App() {
    const [title, setTitle] = useState("Title-1: Random number (1 to 10) is: ");

    // this way react only re-renders the 1st header component (title-1)
    function updateTitle() {
        console.log(title);
        let randomNum = Math.floor(Math.random() * 10 + 1);
        let str = randomNum.toString();
        setTitle("Title-1: Random number (1 to 10) is: " + str);
    }

    // - Ideally only title-1 header should've re-rendered
    // - but we are seeing everything is getting re-render (using dev tools)
    // - re-rendering happens when
    //   - A state variable that is being used inside a component changes
    //   - A Parent component re-render triggers all the children components
    //     re-rendering
    // - The 'title' state variable is being used in App component (in it's scope or lifecycle)
    //    that's why acc. to react logic all child components (title-2,3) re-renders too
    //
    return (
        <>
            <button onClick={updateTitle}>Get Random Number</button>
            <Header title={title} />
            <Header title="Title-2: I will not re-render" />
            <Header title="Title-3: I will not re-render" />
        </>
    );
}

export default App;
