import { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";
/* eslint-disable react/prop-types */

// In Previous example where we have prop drilling issue

// Old
// function App() {
//     const [count, setCount] = useState(0);
//     return (
//         <>
//             <CountContext.Provider value={count}>
//                 <Count count={count} mySetCount={setCount} />
//             </CountContext.Provider>
//         </>
//     );
// }

// To solve Context Api:
// To use this, we have to push the state management code outside the react component
// App component have 1 child Count, and Count have 2 child, CountRenderer and Buttons
//  - We want the prop to teleport from App to Grand children (Buttons, CountRenderer) directly,
//    instead of passing it via Count component.
//  - Wrap the component in provider who wants to use teleported value

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

// Old
// function Count({ count, mySetCount }) {
//     return (
//         <div>
//             <CountRenderer count={count} />
//             <br />
//             <Buttons count={count} handleClick={mySetCount} />
//         </div>
//     );
// }

// New,  as we don't need count prop in this
function Count({ setCount }) {
    return (
        <div>
            <CountRenderer />
            <br />
            <Buttons setCount={setCount} />
        </div>
    );
}

// Old
// function CountRenderer({ count }) {
//     return <>{count}</>;
// }

// New, We need count prop directly here
//  - useContext() hook with value which have context
//  - this way we have access to count prop without it being passed as prop
function CountRenderer() {
    const count = useContext(CountContext);
    return <>{count}</>;
}

// Old
// function Buttons({ count, handleClick }) {
//     return (
//         <>
//             <button
//                 onClick={() => {
//                     handleClick(count + 1);
//                 }}
//             >
//                 Increment
//             </button>
//             <button
//                 onClick={() => {
//                     handleClick(count - 1);
//                 }}
//             >
//                 Decrement
//             </button>
//         </>
//     );
// }

// New, We need count prop directly here
// useContext() hook with value which have context
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

export default App;
