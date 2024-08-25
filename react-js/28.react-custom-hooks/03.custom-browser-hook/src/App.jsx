import "./App.css";
import DimensionComponent from "./components/DimensionComponent";
import IsOnlineHook from "./components/IsOnlineComponent";
import MousePointerComponent from "./components/MousePointerComponent";

function App() {
    return (
        <>
            <IsOnlineHook />
            <MousePointerComponent />
            <DimensionComponent />
        </>
    );
}

export default App;
