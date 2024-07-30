## How can we Minimize this re-rendering behavior (Parent to child)

- **way-2: using React.memo()**
  - It lets you skip re-rendering the component when it's props are unchanged
  - Using `**React.memo()**` will render only the those props will update i.e, only for title-1 (as others have static props)
  - [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/08.react-minimize-renders-memo/src/App.jsx)