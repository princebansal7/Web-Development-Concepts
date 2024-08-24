import { useEffect, useState } from "react";
import "./App.css";

// Let's unmount the component after 5 secs

function App() {
    const [render, setRender] = useState(true);

    // After 5 seconds it will change the state to false
    // we can see then component gets unmounted in console too

    // useEffect(() => {
    //     setTimeout(() => {
    //         setRender(false);
    //     }, 5000);
    // }, []);

    // To mount, unmount component after every 5 sec
    useEffect(() => {
        setInterval(() => {
            setRender(ren => !ren);
        }, 5000);
    }, []);

    return <>{render ? <CounterFunctionComponent /> : <></>}</>;
}

// To demonstrate life-cycle event using useEffect()

function CounterFunctionComponent() {
    useEffect(() => {
        console.log("Component mounted");

        return () => {
            console.log("Component unmounted");
        };
    }, []);

    return <>Inside Main component</>;
}

export default App;
