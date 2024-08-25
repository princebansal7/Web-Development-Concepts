import { useEffect, useState } from "react";

// Our custom useIntervalHook runs an callback function, after every n seconds
function useIntervalHook(callbackFxn, seconds) {
    useEffect(() => {
        const timerId = setInterval(() => {
            callbackFxn();
        }, seconds * 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [seconds, callbackFxn]);
}

function TimerComponent() {
    const [count, setCount] = useState(0);

    // Our custom interval hook should runs an callback function, after every n seconds
    useIntervalHook(() => setCount(prevCount => prevCount + 1), 1);

    return (
        <>
            <h2>Timer tik tok: {count}</h2>
        </>
    );
}

export default TimerComponent;
