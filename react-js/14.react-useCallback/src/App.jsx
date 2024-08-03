import { memo, useCallback, useState } from "react";
/* eslint-disable react/prop-types */

function App() {
    console.log("Parent rendered");
    const [count, setCount] = useState(0);

    //  1. We will pass this native fxn (not state fxn) in an child component as input
    //   (we are passing a reference type)
    //    - so this way, if we click Parent Counter, still child shouldn't render as we
    //      have used memo() and child prop is not changing
    //    - But we are passing a reference type so, at every new render of parent it's
    //      reference is changing, and react think that it's a new function and not the same
    //      previous one => myProp is changing that's why child is re-rendering

    // const logFunction = () => {
    //     console.log("Native handleClick() called");
    // };
    //
    //
    // => 2. So, to Prevent this we will wrap this function inside useCallback() hook,
    //       which 'memoize this function' based on dependency array => now, it knows the
    //       function didn't change even if it's reference did change => hence it will
    //       not change myProp hence, re-render won't happen

    const logFunction = useCallback(() => {
        console.log("Native handleClick() called");
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Parent Counter {count}
            </button>
            <ChildComponent myProp={logFunction} />
        </div>
    );
}

//  - memo is helping in stop child component to re-render even when parent re-renders
//    as Child have no changing props
//  - we want child to render only when it's prop changes

const ChildComponent = memo(({ myProp }) => {
    console.log("child rendered");
    return (
        <div>
            <button onClick={myProp}>Child Counter</button>
        </div>
    );
});

ChildComponent.displayName = "ChildComponent";

export default App;
