import { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";
/* eslint-disable react/prop-types */

/*
// Way-1

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <CountContext.Provider value={count}>
                <Count setCount={setCount} />
            </CountContext.Provider>
        </>
    );
}

function Count({ setCount }) {
    console.log("count comp rendered");
    return (
        <div>
            <CountRenderer />
            <br />
            <Buttons setCount={setCount} />
        </div>
    );
}

function CountRenderer() {
    const count = useContext(CountContext);
    return <>{count}</>;
}

function Buttons({ setCount }) {
    const count = useContext(CountContext);
    return (
        <>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Decrement
            </button>
        </>
    );
}
*/

// Way-2

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <CountContext.Provider value={{ count, setCount }}>
                <Count />
            </CountContext.Provider>
        </>
    );
}

// - We are not passing down any prop in this component, hence count component
//   ideally shouldn't re-render, as we are using context api to pass state
//   variables, but component does re-render!!
// - Context API:
//   - Makes re-rendering more efficient ? => No
//   - Makes syntax cleaner/ get rid of prop drilling ? => Yes

function Count() {
    console.log("count comp rendered");
    return (
        <div>
            <CountRenderer />
            <br />
            <Buttons />
        </div>
    );
}

function CountRenderer() {
    const { count } = useContext(CountContext);
    return <>{count}</>;
}

function Buttons() {
    const { count, setCount } = useContext(CountContext);
    return (
        <>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Decrement
            </button>
        </>
    );
}

export default App;
