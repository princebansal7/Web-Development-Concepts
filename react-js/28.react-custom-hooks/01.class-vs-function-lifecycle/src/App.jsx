import { useEffect, useState, Component } from "react";
import "./App.css";

// Let's unmount the component after 5 secs
// To demonstrate life-cycle event in class based components

function App() {
    const [render, setRender] = useState(true);

    // To mount, unmount component after every 5 sec
    useEffect(() => {
        setInterval(() => {
            setRender(ren => !ren);
        }, 5000);
    }, []);

    return <>{render ? <CounterClassComponent /> : <></>}</>;
}

// To demonstrate life-cycle event in class based components
class CounterClassComponent extends Component {
    componentDidMount() {
        console.log("Component mounted");
    }

    componentWillUnmount() {
        // cleanup tasks like: remove eventListeners or cancel subscriptions
        console.log("Component Unmounted");
    }
    render() {
        return <>Inside Main component</>;
    }
}

export default App;
