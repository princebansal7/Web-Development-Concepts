import "./App.css";

function App() {
    return (
        // 1. html way but in react
        <>
            <div style={{ display: "flex" }}>
                <div style={{ backgroundColor: "lightblue" }}>I am Child-1</div>
                <div style={{ backgroundColor: "yellow" }}>I am Child-2</div>
                <div style={{ backgroundColor: "lightgrey" }}>I am Child-3</div>
            </div>
            <hr />

            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ backgroundColor: "lightblue" }}>I am Child-1</div>
                <div style={{ backgroundColor: "yellow" }}>I am Child-2</div>
                <div style={{ backgroundColor: "lightgrey" }}>I am Child-3</div>
            </div>
            <hr />

            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ backgroundColor: "lightblue" }}>I am Child-1</div>
                <div style={{ backgroundColor: "yellow" }}>I am Child-2</div>
                <div style={{ backgroundColor: "lightgrey" }}>I am Child-3</div>
            </div>
            <hr />
        </>
    );
}

export default App;
