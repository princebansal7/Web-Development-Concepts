## Counter App with props

- Check files: `App.jsx` and `main.jsx`
- We can pass arguments as `props` in component just like HTML attributes (syntax different)
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