// defining state variable (not in the way react expects)

// let state = {
//   counter:0
// }

import { useState } from "react";

// This is an react component, named App
function App() {
    // 1. Updating state

    //  - state.counter++ // changing global state counter
    //  - counter = counter + 1 ; // not the correct way to update state variable value

    // react way to define state variable
    const [counter, setCounter] = useState(0);

    // 2. Updating state variable using dispatcher fxn provided by useState() hook - React way
    //    NOTE:
    //    - react doesn't update state variable synchronously
    //      it takes buffer and update whenever it finds it efficient
    //      => so below, expectation is:
    //         => counter will update like 0 -> 3 -> 6 -> 9 ...
    //         => but counter will still update like 0 -> 1 -> 2 -> 3 ...

    // function increaseCounter() {
    //     setCounter(counter + 1); // 0 + 1 => counter = 1 (nope, still counter = 0)
    //     setCounter(counter + 1); // 1 + 1 => counter = 2 (nope, still counter = 0)
    //     console.log(counter); // 0 (remains 0)
    //     setCounter(counter + 1); // 2 + 1 => counter = 3 (nope, still counter = 0)
    // }

    // 3. If we want to update as per expectation i.e, in every step use functions (they take prev
    //    state as arg and updates)
    //    => counter will update like 0 -> 3 -> 6 -> 9 ...
    //    - Added 3 different way to use function

    // function increaseCounter() {
    //     setCounter(function (counter) {
    //         return counter + 1;
    //     }); // 0 + 1 => counter = 1 (yes)

    //     setCounter(counter => {
    //         return counter + 1;
    //     }); // 1 + 1 => counter = 2 (yes)

    //     setCounter(counter => counter + 1); // 2 + 1 => counter = 3 (yes)
    // }

    // Actual what we are doing (state update)
    function increaseCounter() {
        setCounter(counter + 1); // correct way to update state variable
    }

    return (
        <>
            <button onClick={increaseCounter}>Counter {counter}</button>
        </>
    );
}

export default App;
