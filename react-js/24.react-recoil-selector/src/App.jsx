import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenSelector, oddSelector } from "./store/selectors/selector";

// Task: We have to render "Count is Even" if count is even on button clicks
//                         "Count is Odd"  if count is odd on button clicks

function App() {
    return (
        <>
            <Count />
        </>
    );
}

function Count() {
    console.log("count comp rendered");
    return (
        <div>
            <RecoilRoot>
                <CountRenderer />
                <br />
                <Buttons />
                <br />
                <CheckEven />
                <CheckOdd />
            </RecoilRoot>
        </div>
    );
}

function CountRenderer() {
    // console.log("count rendered");
    const count = useRecoilValue(countAtom);
    return <div>{count}</div>;
}

/*
    
// My Initial Solution:

function CheckEven() {
    const count = useRecoilValue(countAtom);
    const isEven = count % 2 == 0;
    return <>{isEven ? <b>Count is Even</b> : null}</>;
}
function CheckOdd() {
    const count = useRecoilValue(countAtom);
    return <>{count % 2 != 0 ? <b>Count is Odd</b> : null}</>;
}

*/

// Using recoil way
function CheckEven() {
    const isEven = useRecoilValue(evenSelector);
    return <>{isEven ? <b>Count is Even</b> : null}</>;
}
function CheckOdd() {
    const isOdd = useRecoilValue(oddSelector);
    return <>{isOdd % 2 != 0 ? <b>Count is Odd</b> : null}</>;
}

function Buttons() {
    console.log("button rendered");

    const setCount = useSetRecoilState(countAtom);

    return (
        <>
            <button
                onClick={() => {
                    setCount(cnt => cnt + 1);
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    setCount(cnt => cnt - 1);
                }}
            >
                Decrement
            </button>
        </>
    );
}

export default App;
