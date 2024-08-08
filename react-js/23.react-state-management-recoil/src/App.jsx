/* 

// Old Code

import { useState } from "react";
import { CountContext } from "./context";
import { useContext } from "react";


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
*/

// we'll use recoil concept and modify above code accordingly

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

// - Now, app doesn't have any state logic in it.
function App() {
    return (
        <>
            <Count />
        </>
    );
}

// Wrapping components who are using recoil logic inside the
// RecoilRoot component, we can also wrap just Count component too (in above)
function Count() {
    console.log("count comp rendered");
    return (
        <div>
            <RecoilRoot>
                <CountRenderer />
                <br />
                <Buttons />
            </RecoilRoot>
        </div>
    );
}

// Only below 2 components need state somehow
// - this Component needs just the value and not how to update
// => useRecoilValue() hook
function CountRenderer() {
    const count = useRecoilValue(countAtom);
    return <>{count}</>;
}

// This component needs both how to update the value and the value itself
// => useRecoilState() hook
function Buttons() {
    const [count, setCount] = useRecoilState(countAtom);
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

// Using recoil we have resolved 2 issues
// 1. Prop drilling (which can also be resolved by Context api)
// 2. Re-rendering of components which were not using state but
//    was still getting re-rendered
