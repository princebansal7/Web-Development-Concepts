## useMemo() hook

- Memoization: it means remembering some output given an input, and not computing it again if the same input is provided. Similar to `Caching`
- When some expensive operation needs to done and it depends on some state variable and that expensive operation is independent of other state variables, hence rendering due to other state variables shouldn't run that expensive operation which doesn't depends on them => in such cases `useMemo()` hook is optimal to use
- It only perform some logic when dependency array value changes.
- [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/13.react-useMemo/src/App.jsx)
- [Example-2](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/16.react-hooks-examples/01.useMemo/src/App.jsx)