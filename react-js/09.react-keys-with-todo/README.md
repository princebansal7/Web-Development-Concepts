## Keys concept in react when using list or array

**"Keys" Concept in react:**
 - So, when rendering list or array items in react, we must give each array element a unique `key` (a number or string), which uniquely identifies each item in that array, `key` is keyword.
 - key tells react which array item each component corresponds to, it becomes important when array items can move (sorted, deleted, inserted), hence, helps react to make correct updates in DOM tree
 - **Rather than generating keys on the fly, include them in data itself**, because for eg; using map index as key, we are not telling react the correct thing, say array had 3 items we move 3rd to 1st place, and if we use index as key, react will just think oh, 1st item is changed but actually the position is moved. that's why sends unique keys along with data is recommended.
 - So, it is important to write such components right way
  - [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/09.react-keys-with-todo/src/App.jsx) 