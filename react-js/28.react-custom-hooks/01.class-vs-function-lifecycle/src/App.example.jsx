import { Component, useState } from "react";
import "./App.css";

function App() {
    return (
        <>
            <CounterFunctionComponent />
            <br />
            <br />
            <CounterClassComponent />
        </>
    );
}

function CounterFunctionComponent() {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    return (
        <>
            <div>{count}</div>
            <button onClick={incrementCount}>
                Increase (Function component)
            </button>
        </>
    );
}

class CounterClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <>
                <div>{this.state.count}</div>
                <button onClick={this.incrementCount}>
                    Increase (class component)
                </button>
            </>
        );
    }
}

export default App;
