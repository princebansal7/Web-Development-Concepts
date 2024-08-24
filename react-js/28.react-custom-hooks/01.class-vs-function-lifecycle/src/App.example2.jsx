import { useEffect } from "react";
import "./App.css";

function App() {
    return (
        <>
            <CounterFunctionComponent />
        </>
    );
}

function CounterFunctionComponent() {
    // useEffect() flow:
    //  - one the very 1st render, it 1st runs the component mount logic
    //  - in 2nd and later renders, it first runs the return fxn (previous
    //    effect cleanup code), and then renders the component mount logic

    useEffect(() => {
        // logic to run when 'component mounts'

        console.log("Component mounted");

        // New thing to learn about useEffect()
        // - It can return a function which runs based on dependency (cleanup code)
        // - If we have given any dependency
        //     - [IMP] then the return fxn runs 1st whenever the dependency changes
        //       and then (i.e, after return fxn) runs the 'component mount' logic
        // - if we don't have any dependency
        //     - then 1st the component mount logic runs, then when the
        //       component unmounts then return fxn logic runs
        // This is the significance of returning a function from useEffect()

        return () => {
            // logic to run when dependency changes or component unmounts (cleanup code)
            console.log("Component unmounted");
        };
    }, []);

    return <>Inside Main component</>;
}

export default App;
