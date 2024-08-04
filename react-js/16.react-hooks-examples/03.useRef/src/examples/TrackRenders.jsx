import { useState, useRef } from "react";

// Create a component that tracks and displays the number of times it
// has been rendered. Use useRef to create a variable that persists across
// renders without causing additional renders when it changes.

// Here we will see another use case of useRef() hook.
//  1. 1st was getting access of DOM elements
//  2. 2nd is have access to variables across renders even when the variables are
//     not state variables

/*

// Approach - 1
// Problem: we are using count and setCount to make re-renders & keeping the
//          count using trackRenders, but when we use trackRenders it also renders the component
//          again => rendering twice but counting once
// - Here useRef hook is useful

export function TrackRenders() {
    const [count, setCount] = useState(0);
    const [trackRenders, setTrackRenders] = useState(0);

    const handleReRender = () => {
        // Update state to force re-render
        setCount(count + 1);
        setTrackRenders(trackRenders + 1);
    };

    return (
        <div>
            <p>This component has rendered {trackRenders} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}


// Approach - 2
// Better solution than previous, as we should never use state variables
// to track re-renders etc as he also make render happen
// - but still not elegant solution

let trackRenders = 0;
export function TrackRenders() {
    const [count, setCount] = useState(0);

    const handleReRender = () => {
        // Update state to force re-render
        setCount(count + 1);
    };
    trackRenders++;

    return (
        <div>
            <p>This component has rendered {trackRenders} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}

*/

// Approach - 3 (2nd use case of useRef hook -  having value access across renders)
export function TrackRenders() {
    const [count, setCount] = useState(0);

    //  - we are storing value 0 as reference => it is now part of react component
    //    lifecycle unlike the previous case where we used global variable
    //  - This is 2nd use case of useRef hook
    //  - this value will be accessible across renders
    const trackRenders = useRef(0);

    const handleReRender = () => {
        setCount(count + 1);
    };
    trackRenders.current = trackRenders.current + 1;

    return (
        <div>
            <p>This component has rendered {trackRenders.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}
