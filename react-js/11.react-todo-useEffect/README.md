## ToDo app with useEffect() hook

- `useEffect()` takes 2 arguments 1st **what logic to run**, 2nd the **dependency array.**
- What is `dependency array` ? On the basis this array effect calls the written logic in it. it takes state variable as input
  - our dependency array is empty initially => it will mount the App() components one time when array was empty i.e, on 1st render
  - Now, when we fetch the new data, state changes => App again will try to mount and re-render but useEffect won't let it as it is already mounted based on the empty array, hence those infinite re-rendering issue gets resolved and on state update just the re-render happens.
  - Example: Let's say a race car have to do 100 laps and is allowed to take pit break at pit stop time to time, so will it take pit break at every lap ? or in every 10 laps ? or after certain condition met like tyre pressure of car changes, fuel filling etc. => will take pit break after a certain condition met and not after every lap even though car passes the pit stop at every lap, so this pit stop is a **side effect**, so this pit stop is something which we don't want to happen at every render, we want it to happen independently irrespective of how many renders has happened, when some certain condition is met, we making the pit stop break happen is `useEffect`. so that dependency array is way to give that certain condition. 
  - If we don't give dependency array then it will have same infinite re-rendering and mounting like we saw in [ToDo app project](https://github.com/princebansal7/Web-Development-Concepts/blob/main/projects/03-todo-app/frontend/src/App.jsx)
  - using <React.StrictMode> makes the component mount twice in dev environment, it doesn't work in production env
    ```jsx
        useEffect(() => {}, []);
                         |    \  
                        Logic  \
                                \
                               Dependency array 
                                 

    ```
    ```jsx
        useEffect(() => {
            fetch("http://localhost:3000/todos").then(async response =>
                setTodo(await response.json())
            );
        }, []);
    ```
    ```jsx
        async function getTodos() {
            const response = await fetch("http://localhost:3000/todos");
            const resultTodos = await response.json();
            setTodo(resultTodos);
        }

        useEffect(() => {
            getTodos();
        }, []);
    ```

- `useEffect()`: It allows you to perform **side effects** in function components
- **side effects** are operations that can affect other components or can't be done during rendering, such as data fetching, subscriptions or manually changing the DOM in react components.
- `useEffect()` hook serve the same purpose as `componentDidMount`, `componentDidUpdate` and `componentWillUnmount` in react class components, but **unified into a single API**.
- We can use useEffect() hook multiple times depending on the conditions.
- useEffect() can't have asynchronous fxn to avoid Race conditions, so either use promises or use another asynchronous function in it as shown in above examples.
- to make it asynchronous use useAsyncEffect() | [Read more](https://marmelab.com/blog/2023/01/11/use-async-effect-react.html)
- [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/11.react-todo-useEffect/frontend/src/App.jsx)