import { useEffect, useMemo, useState } from "react";
/* eslint-disable react/prop-types */

/*
    - Create a simple application which calculate the sum till user's entered number
    - sum from 1 to n
    - Also have a counter button
    constraint: everything should be inside App component
*/

/*      
//  1st solution

function App() {
    const [userInput, setUserInput] = useState(0);
    const [counter, setCounter] = useState(0);
    function getSum() {
        const val = parseInt(document.querySelector("input").value);
        console.log("user input is:", val);
        let sum = (val * (val + 1)) / 2;  // say it's an expensive operation (if were using loop)
        console.log("Sum is", sum);
        setUserInput(sum);
    }
    return (
        <div>
            <input type="text" placeholder="69" onChange={getSum} />
            <h3>Sum till number is: {userInput}</h3>
            <button onClick={() => setCounter(counter + 1)}>
                Counter ({counter})
            </button>
        </div>
    );
}

// Ideally we shouldn't use, direct DOM manipulation when using react
*/

/*
// 2nd solution (still ugly code) - with direct DOM manipulation
//   - As we can see, using 2 state variables independent of each other
//     But when counter changes, sum logic again gets evaluated.
//   - Hence, not optimal code.

function App() {
    const [userInput, setUserInput] = useState(0);
    const [counter, setCounter] = useState(0);

    console.log("sum logic called");
    let sum = 0;
    const val = parseInt(userInput);
    sum = (val * (val + 1)) / 2;

    return (
        <div>
            <input
                type="text"
                placeholder="69"
                onChange={e => {
                    setUserInput(e.target.value);
                }}
            />
            <h3>
                Sum till {userInput} is: {isNaN(sum) ? 0 : sum}
            </h3>
            <button onClick={() => setCounter(counter + 1)}>
                Counter ({counter})
            </button>
        </div>
    );
}
*/

/*
// 3rd solution (using useEffect() hook - optimal code)
//   - Here, we are declaring another state variable, to use it in
//     useEffect(), => now only when userInput changes then only sum logic will
//     work and renders - good optimal solution
//   - Still there is one problem, we are causing extra rendering, as when userInput,
//     changes re-render happens, due to userInput, useEffect() changes finalValue
//     Hence, again re-render happens (not a big issue)
//   - we added extra dependency of finalVal on userInput, which can be inconsistent
//     sometimes. that's why useMemo() is better option in such cases 
//

function App() {
    const [userInput, setUserInput] = useState(0);
    const [counter, setCounter] = useState(0);
    const [finalVal, setFinalVal] = useState(0);

    useEffect(() => {
        console.log("sum logic called");
        let sum = 0;
        const val = parseInt(userInput);
        sum = (val * (val + 1)) / 2;
        setFinalVal(sum);
    }, [userInput]);

    return (
        <div>
            <input
                type="text"
                placeholder="69"
                onChange={e => {
                    setUserInput(e.target.value);
                }}
            />
            <h3>
                Sum till {userInput} is: {isNaN(finalVal) ? 0 : finalVal}
            </h3>
            <button onClick={() => setCounter(counter + 1)}>
                Counter ({counter})
            </button>
        </div>
    );
}
*/

// 4th Solution: useMemo() - best optimal
//   - We want without using extra state variable we want to do similar thing like
//     useEffect() was doing i.e, when userInput changes, then we want the sum
//     logic to happen, else not.
//   - useMemo() is same as useEffect() => also runs some logic based on dependency array
//     here, we don't need to use extra state variable just for running a logic based
//     on some condition
//     => here now, whenever userInput changes, then only then sum logic runs

function App() {
    const [userInput, setUserInput] = useState(0);
    const [counter, setCounter] = useState(0);

    const optimalSum = useMemo(() => {
        console.log("sum logic called");
        let sum = 0;
        const val = parseInt(userInput);
        sum = (val * (val + 1)) / 2;
        return sum;
    }, [userInput]);

    return (
        <div>
            <input
                type="text"
                placeholder="69"
                onChange={e => {
                    setUserInput(e.target.value);
                }}
            />
            <h3>
                Sum till {userInput} is: {isNaN(optimalSum) ? 0 : optimalSum}
            </h3>
            <button onClick={() => setCounter(counter + 1)}>
                Counter ({counter})
            </button>
        </div>
    );
}

export default App;
