## How can we Minimize this re-rendering behavior (Parent to child)

- **way-2: using React.memo()**
  - It lets you skip re-rendering the component when it's props are unchanged
  - Using `React.memo()`, it will render only those components, whose props will update i.e, in below example only for title-1 (as others have static props)
  - Note: When you return `<div></div>` memo will not re-render static props but if return `Fragment: <></>` memo will re-render everything because fragment is not any element on DOM, hence it takes all components as individual hence re-renders them, but when we return <div> it is a element on DOM hence,  it memoise this.
    ```jsx
      import { useState, memo } from "react";

      function App() {
          const [title, setTitle] = useState("Title-1: Random number (1 to 10)is: 0" );
          function updateTitle() {
            console.log(title);
            let randomNum = Math.floor(Math.random() * 10 + 1);
            let str = randomNum.toString();
            setTitle("Title-1: Random number (1 to 10) is: " + str);
          }
          // Here returning <> Fragment => will re-render all components
          // whether they have static or dynamic props
          return (
            <>
                <button onClick={updateTitle}>Get Random Number</button>
                <Header title={title} />
                <Header title="Title-2: I will not re-render" />
                <Header title="Title-3: I will not re-render" />
                <Header title="Title-4: I will not re-render" />
                <Header title="Title-5: I will not re-render" />
            </>
          );

        // But if returns div => won't re-render static props component
           return (
            <div>
                <button onClick={updateTitle}>Get Random Number</button>
                <Header title={title} />
                <Header title="Title-2: I will not re-render" />
                <Header title="Title-3: I will not re-render" />
                <Header title="Title-4: I will not re-render" />
                <Header title="Title-5: I will not re-render" />
            </div>
          );
      }
      const Header = memo(function Header({ title }) {
        console.log("rendered");
        return (
          <>
              <h2>{title}</h2>
          </>
        );
      });

      export default App;
    ```
  - [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/08.react-minimize-renders-memo/src/App.jsx)