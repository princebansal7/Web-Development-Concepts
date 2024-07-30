import { useState, memo } from "react";

// 3. How can we Minimize this re-rendering behavior (Parent-child)
//    way-2 (memo(): it lets you skip re-rendering the component when it's
//          props are unchanged
//  - to use memo(): we need to wrap the component inside it so that it can memoise
//    it can if props doesn't changes it won't re-renders it

function App() {
    const [title, setTitle] = useState(
        "Title-1: Random number (1 to 10) is: 0"
    );

    function updateTitle() {
        console.log(title);
        let randomNum = Math.floor(Math.random() * 10 + 1);
        let str = randomNum.toString();
        setTitle("Title-1: Random number (1 to 10) is: " + str);
    }
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
}

// will render 5 times
// function Header({ title }) {
//     console.log("rendered");
//     return (
//         <>
//             <h2>{title}</h2>
//         </>
//     );
// }

// using memo() will render only the one, whose props will update
// i.e, only for title-1 (as others have static props)
const Header = memo(function Header({ title }) {
    console.log("rendered");
    return (
        <>
            <h2>{title}</h2>
        </>
    );
});

export default App;
