## ToDo app with useEffect() hook

- `useEffect()` takes 2 arguments 1st **what logic to run**, 2nd the **dependency array.**
- What is dependency array ? On the basis this array effect calls the written logic in it.
  - our dependency array is empty initially => it will mount the App() components one time when array was empty i.e, on 1st render
  - Now, when we fetch the new data, state changes => App again will try to mount and re-render but useEffect won't let it as it is already mounted based on the empty array, hence those infinite re-rendering issue gets resolved and on state update just the re-render happens.
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
- useEffect() can't have asynchronous fxn to avoid Race conditions, so either use promises or use another asynchronous function in it as shown in above examples.
- to make it asynchronous use useAsyncEffect() | [Read more](https://marmelab.com/blog/2023/01/11/use-async-effect-react.html)
- [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/11.react-todo-useEffect/frontend/src/App.jsx)