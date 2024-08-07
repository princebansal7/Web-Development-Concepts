## Context API

- To fix Prop Drilling issue, we can use **`Context API`**
- It makes very easy to pass state variables between the components without drilling them down
- It lets you `Teleport` the state variables to the required components directly. [Read more](https://react.dev/learn/passing-data-deeply-with-context)
- It lets you keep all state logic outside of your core react components.
- it uses: 
  - `createContext`: to create context
  - `provider`: to wrap those components who need teleported value
  - `useContext` hook to access the teleported value
![Check Image](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_context_close.dark.png&w=1920&q=75) 

![teleport](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_context_far.dark.png&w=1920&q=75)

- [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/21.react-context-api/src/App.jsx)

- Till now, this is all React had to offer for better structure the application and state management, then `Redux` and `Recoil` were introduced.
- We can also use **reducer & useReducer() hook** before redux and recoil for state management