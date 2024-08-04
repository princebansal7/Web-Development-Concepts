## useRef() hook

- `ref` is a keyword used in React to reference DOM elements or class component instances.
- `useRef` is a hook that creates a mutable object which can be used with the ref attribute to access the DOM element.
- The current property of the ref object holds the reference to the DOM element or class instance.
- [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/15.react-useRef/src/App.jsx)
- **useRef() hook have 2 use cases:**
  - Getting access to DOM elements | [use-case-1](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/16.react-hooks-examples/03.useRef/src/examples/FocusOnField.jsx)
  - Making a variable accessible across renders | [use-case-2](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/16.react-hooks-examples/03.useRef/src/examples/TrackRenders.jsx)