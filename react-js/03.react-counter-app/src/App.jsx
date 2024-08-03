// state variable (not in way react expects)
// let state = {
//   counter:0
// }

import { useState } from "react";

// this is an react component, named App
function App() {
    // react way state variable
    const [counter, setCounter] = useState(0);

    // 1. Updating state
    //  - state.counter++ // changing global state counter
    //  - counter = counter + 1 ; // not the correct way to update state variable value

    // 2. react doesn't update state variable synchronously
    //    it takes buffer and update whenever it finds it efficient
    //    =>  => counter will still update like 0 -> 1 -> 2 -> 3 ...
    // function increaseCounter() {
    //     setCounter(counter + 1); // 0 + 1 => counter = 1 (nope, still counter = 0)
    //     setCounter(counter + 1); // 1 + 1 => counter = 2 (nope, still counter = 0)
    //     console.log(counter); // 0 (remains 0)
    //     setCounter(counter + 1); // 2 + 1 => counter = 3 (nope, still counter = 0)
    // }

    // 3. we want to update like above use functions
    //   => counter will update like 0 -> 3 -> 6 -> 9 ...
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

// 1. Whenever we need any js variable or expression in
//    react component, wrap it in {}, it renders an dynamic
//    variable
// 2. in jsx we write XML not HTML
//    => in html: <button onclick="increaseCounter()"></button>
//    => in jsx:  <button onClick={functionName or function itself}></button>
// 3. we have defined a global variable named state => but when we update it
//    react doesn't re-render the component
//    why ?
//    Because React isn't watching it => we have to define state variables in react
//    a certain way so that react will watch it and whenever they get change
//    accordingly components who are having those state variables should re-render
//    => to use state variable as per react expectation so that react watches we
//       need to use a 'hook' named "useState"
//       const [counter,setCounter] = useState(initial_val)
//       useState() hook returns array with:
//                  1st value as state variable value
//                  2nd value as react internal dispatch function which
//                  re-renders the component when state variable value changes
//
// => Hence, using react it is that easy to do same thing we did in 02.counter-state-component
//    in just few lines of code
