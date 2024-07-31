## Keys concept in react when using list or array

**"Keys" Concept in react:**
 - So, when rendering list or array items in react, we must give each array element a unique `key` (a number or string), which uniquely identifies each item in that array, `key` is keyword.
 - key tells react which array item each component corresponds to, it becomes important when array items can move (sorted, deleted, inserted), hence, helps react to make correct updates in DOM tree
 - Rather than generating keys on the fly, include them in data itself
 - So, it is important to write such components right way
  - [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/09.react-keys-with-todo/src/App.jsx) 