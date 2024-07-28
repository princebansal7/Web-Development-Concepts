import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    // passing props
    return (
        <>
            <CustomButton count={counter} setCount={setCounter} />
        </>
    );
}

// button component (creating it separate so that App component doesn't get cluttered up)
// getting props
function CustomButton(props) {
    function increaseCounter() {
        props.setCount(props.count + 1);
    }
    return <button onClick={increaseCounter}>Counter {props.count}</button>;
}

export default App;
