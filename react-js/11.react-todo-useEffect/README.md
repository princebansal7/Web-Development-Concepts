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
- In useEffect() 2nd arg i.e, dependency array is optional depending on the use case. If we are not using state to re-render the component and just making let say backend call, then we can just provide 1 arg in useEffect() i.e, callback function.
  - Then why do use useEffect() at all ? 
  - If you’re making a backend call without using useEffect and not managing state for the say todos, the main difference lies in how and when the backend call is triggered:
	1.	**Using useEffect:** The backend call is made when the component mounts (or according to the dependency array if provided). useEffect is designed to handle side effects like data fetching, and it ensures that the call happens at the right time in the component’s lifecycle (e.g., after the component has rendered).
        ```jsx
                function App() {
                    const todos = [];
                    useEffect(() => {
                        fetch(`http://localhost:3000/todos`).then(async response => {
                            const data = await response.json();
                            todos = data;
                        });
                    });
                    return (
                        <div>
                            {todos.map(todo => {
                                return (
                                    <div>
                                        <h4>{todo.title}</h4>
                                        <p>{todo.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    );
                }
        ```
    2. **Not using useEffect:** If you make the backend call directly in the body of your component (outside of useEffect), the call will be made on every render of the component. This approach is generally not recommended because:
         ```jsx
                 function App() {
                     const todos = [];
                     fetch(`http://localhost:3000/todos`).then(async response => {
                         const data = await response.json();
                         todos = data;
                     });
                     return (
                         <div>
                             {todos.map(todo => {
                                 return (
                                     <div>
                                         <h4>{todo.title}</h4>
                                         <p>{todo.description}</p>
                                     </div>
                                 );
                             })}
                         </div>
                     );
                 }

          ```
     	 - It leads to redundant backend calls since every render will trigger the call.
     	 - It doesn’t give you control over when the call is made (e.g., it could happen multiple times in quick succession during re-renders).
         - If you don’t need to trigger re-renders with state and just want to fetch data once when the component mounts, you should still use useEffect with an empty dependency array ([]). This ensures that the backend call happens only once after the initial render and won’t be repeated on subsequent re-renders.

    - In short, even if you’re not using state to manage the fetched data, using useEffect is still the best practice for making backend calls to avoid unnecessary and repeated calls.

- We can use useEffect() hook multiple times depending on the conditions.
- useEffect() can't have asynchronous fxn to avoid Race conditions, so either use promises or use another asynchronous function in it as shown in above examples.
- to make it asynchronous use useAsyncEffect() | [Read more](https://marmelab.com/blog/2023/01/11/use-async-effect-react.html)
- `useEffect()` [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/11.react-todo-useEffect/frontend/src/App.jsx)
- `useEffect()` Dependency Array significance | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/12.react-todo-useEffect-dependency/frontend/src/App.jsx)