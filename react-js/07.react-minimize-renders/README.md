## How can we Minimize this re-rendering behavior (Parent to child)

- **Way-1: Push the state down where re-rendering is required**
 - To minimize, push down the state to the `lowest common ancestor (LCA)` of the child where the state is required and not put the state in root
 - Why LCA ? so that sibling children can have the propagated state changes too (via their common parent)
 - Check example here: [Click](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/07.react-minimize-renders/src/App.jsx)