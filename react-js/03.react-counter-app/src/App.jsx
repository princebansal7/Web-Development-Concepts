// state variable (not in way react expects)
// let state = {
//   counter:0
// }

import { useState } from "react";

// this is an react component, named App
function App() {
    // react way state variable
    const [counter, setCounter] = useState(0);

    // updating state
    function increaseCounter() {
        // state.counter++ // changing global state counter
        // counter = counter + 1 ;      // not the correct way to update state variable value
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
