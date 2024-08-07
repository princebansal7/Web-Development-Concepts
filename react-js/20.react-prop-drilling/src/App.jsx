import { useState } from "react";
/* eslint-disable react/prop-types */

/* 
// Initial set-up
function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Count count={count} />
            <Buttons count={count} handleClick={setCount} />
        </>
    );
}

function Count({ count }) {
    return <div>{count}</div>;
}

function Buttons({ count, handleClick }) {
    return (
        <>
            <button
                onClick={() => {
                    handleClick(count + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    handleClick(count - 1);
                }}
            >
                Decrement
            </button>
        </>
    );
}
*/

// Now we want Button component inside Count component
// But 1st issue will be, setCount is not available to button, and we have to
// pass 'setCount' as prop in Count component even actually Count component doesn't need it.
// So,
//                   App (parent)
//                    |
//                   Count (Child)
//                    |
//                   Buttons (child)
//  We are passing props to App which goes to Count and then it's child i.e,
//  Buttons even when Count child doesn't require it, just for the sake of it's
//  child we are passing it to all children => This is called 'Prop Drilling'

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            {/* <Count count={count} /> */}
            <Count count={count} mySetCount={setCount} />
        </>
    );
}

function Count({ count, mySetCount }) {
    return (
        <div>
            {count}
            <br />
            <Buttons count={count} handleClick={mySetCount} />
        </div>
    );
}

function Buttons({ count, handleClick }) {
    return (
        <>
            <button
                onClick={() => {
                    handleClick(count + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    handleClick(count - 1);
                }}
            >
                Decrement
            </button>
        </>
    );
}
export default App;
