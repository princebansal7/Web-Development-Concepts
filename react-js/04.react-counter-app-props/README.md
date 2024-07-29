## Counter App with props

- Check files: `App.jsx` and `main.jsx`
- We can pass arguments as `props` in component just like HTML attributes (syntax different)
- **props** are **properties**.
- we can call it anything instead of calling `props` (but props is standard)
- Here we also separated button component, benefits is we can use it multiple times in other components like here in App, it makes code cleaner :
  - initial
    ```jsx
        function App() {
            const [counter, setCounter] = useState(0);
            // passing props 'counter' as "count" and 'setCounter' as "setCount"
            return (
                <>
                    <CustomButton count={counter} setCount={setCounter} />
                </>
            );
        }
        function CustomButton(props) {
            function increaseCounter() {
                props.setCount(props.count + 1);
            }
            return <button onClick={increaseCounter}>Counter {props.count}</button>;
        }
    ```
  - using component multiple times
    ```jsx
        function App() {
            const [counter, setCounter] = useState(0);
            // passing props
            return (
                <>
                    <CustomButton count={counter} setCount={setCounter} />
                    <CustomButton count={counter + 10} setCount={setCounter} />
                    <CustomButton count={counter * 100} setCount={setCounter} />
                </>
            );
        }
    ```

- Here we are returning elements (which will shown on DOM) like this:
    ```jsx
        return <button onClick={increaseCounter}>Counter {props.count}</button>; // Modern way

                       |
                       |  Transpiled
                       |
                       \/

        return React.createElement("button",{onClick:increaseCounter},`Counter ${props.count}`) // Old way
    ``` 
- Initially react was written like the transpiled version (which is more relatable to DOM manipulation we wrote)
- But in later versions it was made more cleaner and is basically a syntactic sugar