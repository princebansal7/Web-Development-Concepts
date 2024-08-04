## useCallback() hook

- It is used to memoize functions => helps in optimizing performance of your application, specially in the cases of child components which rely on **reference equality** to prevent unnecessary renders
- **Reference equality** in JavaScript (and in programming in general) means that two variables point to the same object in memory. This concept is crucial when dealing with objects, arrays, and functions because these are reference types in JavaScript. | [reference types in JS](https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/)

- Example
    ```jsx
        import { memo, useCallback, useState } from "react";
        /* eslint-disable react/prop-types */

        function App() {
            console.log("Parent rendered");
            const [count, setCount] = useState(0);

            // 1. Initially, we're using a function directly in the child component.
            //    - This function is recreated on every render of the parent component.
            //    - Since the function reference changes on every render, the child component will re-render each time.
            
            // const logFunction = () => {
            //     console.log("Native handleClick() called");
            // };

            // 2. To prevent unnecessary re-renders of the child component, we use useCallback.
            //    - useCallback memoizes the function, so the reference stays the same unless its dependencies change.
            //    - This means that if the function itself does not change, its reference won't change, and the child component won't re-render unnecessarily.
            
            const logFunction = useCallback(() => {
                console.log("Native handleClick() called");
            }, []); // Empty dependency array means this function never changes

            return (
                <div>
                    <button onClick={() => setCount(count + 1)}>
                        Parent Counter {count}
                    </button>
                    <ChildComponent myProp={logFunction} />
                </div>
            );
        }

        // ChildComponent will only re-render if its props change
        // With memo, it will avoid re-rendering if the prop (myProp) is the same

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
    ```
- Key Points:

	1.	Function Recreation:
    	- Initially, the logFunction is recreated every time the App component re-renders. This causes ChildComponent to re-render because it receives a new function reference each time.
	2.	Using useCallback:
    	- useCallback memoizes the logFunction, so its reference remains stable unless its dependencies change.
    	- Since the dependency array is empty ([]), logFunction will have the same reference throughout the component’s lifecycle, thus preventing ChildComponent from unnecessary re-renders.
	3.	memo for Optimization:
    	- memo optimizes the ChildComponent by preventing re-renders when its props do not change. This works effectively with useCallback to ensure ChildComponent only re-renders when necessary.

This approach ensures that ChildComponent does not re-render unless its props change, optimizing performance by avoiding unnecessary updates.
- [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/14.react-useCallback/src/App.jsx)
- [Example-2](https://github.com/princebansal7/Web-Development-Concepts/tree/main/react-js/16.react-hooks-examples/02.useCallback#readme)