## Basic ToDo App

- Check files: `src/App.jsx` and `src/main.jsx`
- Important point:
  - Every time a **Parent re-renders**, **it's child also re-renders as well** regardless of whether they are using state variable or not.
  - But if a child is using some variable which are not state variables, react won't re-render those value (it will still re-render the child but not the values of variables which are not state variables)
  - We can avoid this and optimize using react **hook** called `useMemo()`, we'll see it later
  - see file: [src/App.understanding.jsx](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/05.todo-basic-react/src/App.understanding.jsx) for better understanding.