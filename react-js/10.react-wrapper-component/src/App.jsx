// import { useState } from "react";
/* eslint-disable react/prop-types */

/*  

// Way-1 (to create wrapper) - Never preferred
function App() {
    return (
        <>
            <WrapperComponent innerComponent={<TextComponent />} />
        </>
    );
}

function TextComponent() {
    return <h1>Hello I am inside a Wrapper Component</h1>;
}

// This component is wrapping whatever component is passed in it
function WrapperComponent({ innerComponent }) {
    return (
        <>
            <div style={{ border: "2px solid red", padding: 10 }}>
                {innerComponent}
            </div>
        </>
    );
}

*/

// Way-2: Cleaner Syntax
//       - Directly put stuff inside the Wrapper component
//       - use 'children' keyword as props => gives everything (text, elements, components)
//         inside of the wrapper component

function App() {
    return (
        <>
            <WrapperComponent>Example-1</WrapperComponent>

            <WrapperComponent>
                <h1>Example-2</h1>
            </WrapperComponent>

            <WrapperComponent>
                <p>Example-3</p>
            </WrapperComponent>

            <WrapperComponent>
                <TextComponent />
            </WrapperComponent>

            <WrapperComponent>
                <WrapperComponent>
                    <WrapperComponent />
                </WrapperComponent>
            </WrapperComponent>
        </>
    );
}

// This component is wrapping whatever component is passed in it
function WrapperComponent({ children }) {
    // console.log(children);
    return (
        <>
            <div
                style={{
                    marginTop: 5,
                    border: "2px solid purple",
                    padding: 10,
                }}
            >
                {children}
            </div>
        </>
    );
}

function TextComponent() {
    return <h5>Example-4</h5>;
}
export default App;
