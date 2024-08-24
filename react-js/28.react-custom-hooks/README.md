# LifeCycle Events & Custom hooks

### Lifecycle events in class and functional components
Hooks provide 2 things:
1. state 
   - Class vs Functional component | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/01.class-vs-function-lifecycle/src/App.example.jsx)
2. Lifecycle events in functional components
   - Lifecycle events ?
     - A event gets triggered or code that need to be run when lifecycle of an
       component changes are called lifecycle events
   - Lifecycle of components ?
     - Whenever a component mounts => put on the screen 1st time
     - Whenever a component unmounts => taken off from screen
   - In function components it's done using `useEffect()` hook
   - `useEffect()` returning a function flow to understand lifecycle event [concept](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/01.class-vs-function-lifecycle/src/App.example2.jsx) | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/01.class-vs-function-lifecycle/src/App.example3.jsx)
   - class based component lifecycle event | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/01.class-vs-function-lifecycle/src/App.jsx)

### Custom Hooks

- Hooks that you create yourself so that others can use them are called custom hooks
- A **custom hook** is effectively a function but with these following properties
  - uses another **hook internally** (like useState, useEffect, another custom hook)
  - Starts with `use`

- Examples:
  - Data fetching hooks
    - Without custom hook | [Example]()
    - With custom hook | [Example]()
    - improved custom hook - loading | [Example]()
    - custom hook with auto refreshing but bad code | [Example]()
    - Improved custom hook with auto refreshing code | [Example]()
    - using external Data fetching library `swr` | [Example]()

  - Browser functionality related hooks like: useWindowSize, useMousePosition, useOnlineStatus
  - Performance/Timer based hooks like: useDebounce, useInterval