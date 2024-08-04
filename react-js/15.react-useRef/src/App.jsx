import { useRef, useEffect, useState } from "react";
/* eslint-disable react/prop-types */

/*
  This example demonstrates changing the tax value displayed in the DOM from 20000 to 100
  after some time using two approaches: direct DOM manipulation and using the `useRef` hook.
  
  Direct DOM manipulation is generally not recommended in React as it bypasses React's
  reconciliation process, which can lead to inconsistencies and unexpected behavior.
*/

/*
function App() {
    const [tax, setTax] = useState(0);
    console.log("hello");
    useEffect(() => {
        //  - We are using direct DOM manipulation, which we shouldn't do
        //    as it confuses react and react thinks tax value is still 20000
        //  - setInterval is a side effect hence putting it inside useEffect
        setInterval(function () {
            document.getElementById("tax-div").innerHTML = 100;
        }, 5000);
        setTax(20000);
    }, []);

    return (
        <>
            <h2>
                Your tax is: <div id="tax-div">{tax}</div>
            </h2>
        </>
    );
}
*/

// Improved version using useRef() hook
function App() {
    const [tax] = useState(20000);

    // using useRef() hook
    const divReference = useRef();

    useEffect(() => {
        // Using useRef to directly access the DOM element
        const timeoutId = setTimeout(function () {
            if (divReference.current) {
                console.log(divReference.current);
                divReference.current.innerHTML = 100;
            }
        }, 5000);

        // Cleanup function to clear the timeout - if the component unmount
        // before the time completes (good practice)
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <h2>
                Your tax is: <div ref={divReference}>{tax}</div>
            </h2>
        </>
    );
}

export default App;
