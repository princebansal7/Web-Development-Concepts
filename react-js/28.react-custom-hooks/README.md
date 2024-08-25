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
  - [IMP] This is important: we can't use hooks inside a normal native functions, i.e, function should either be a component or an hook itself
  - custom hook name must start with `use`

- Examples:
  - Data fetching hooks
    - Without custom hook | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/02.custom-data-fetching-hook/src/App.example1.jsx)
    - With custom hook | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/02.custom-data-fetching-hook/src/App.example2.jsx)
    - improved custom hook - loading | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/02.custom-data-fetching-hook/src/App.example3.jsx)
    - custom hook with auto refreshing but bad code | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/02.custom-data-fetching-hook/src/App.example4.jsx)
    - Improved custom hook with auto refreshing code | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/02.custom-data-fetching-hook/src/App.example5.jsx)
    - using external Data fetching library `swr` | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/02.custom-data-fetching-hook/src/App.jsx)

  - Browser functionality related hooks like: useWindowSize, useMousePosition, useOnlineStatus
    - Checking whether the user is online or not | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/03.custom-browser-hook/src/hooks/useOnline.jsx)
    - Checking Mouse pointer location | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/03.custom-browser-hook/src/hooks/useMousePointer.jsx)
    - Checking Inner window dimensions | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/03.custom-browser-hook/src/hooks/useDimension.jsx)
  
  - Performance/Timer based hooks like: useDebounce, useInterval
    - created useInterval hook which run a function after every n seconds | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/04.custom-performace-timer-hook/src/components/TimerComponent.jsx)
    - useDebounce hook, should debounce the value for some n interval | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/28.react-custom-hooks/04.custom-performace-timer-hook/src/components/DebounceSearchBarComponent.jsx)