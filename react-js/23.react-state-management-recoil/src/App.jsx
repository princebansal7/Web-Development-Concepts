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

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
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
// - returning <div></div> instead of <></>, so that can see re-render block
function CountRenderer() {
    console.log("count rendered");
    const count = useRecoilValue(countAtom);
    return <div>{count}</div>;
}

// This component needs both how to update the value and the value itself
// => useRecoilState() hook

// optimizing button component:
//  - We know we don't need count here, as instead of doing
//     setCount(count + 1)
//    we can do:
//     setCount( cnt => cnt + 1) i.e, use simple function to do that update
//     or
//     setCount( function(cnt){ return cnt+1 })
//  - this way instead of using useRecoilState() hook
//    we can use useSetRecoilState() => gives only dispatcher function
//    => due to count update, button doesn't need to update
function Buttons() {
    console.log("button rendered");
    // const [count, setCount] = useRecoilState(countAtom);

    const setCount = useSetRecoilState(countAtom);

    return (
        <>
            <button
                onClick={() => {
                    setCount(cnt => cnt + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    setCount(cnt => cnt - 1);
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
