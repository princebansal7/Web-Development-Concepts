import { useEffect, useState } from "react";

// Our custom debounce hook
function useDebounce(val, delay) {
    const [debouncedValue, setDebouncedValue] = useState(val);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(val);
        }, delay);

        return () => {
            clearTimeout(timerId);
        };
    }, [delay, val]);

    return debouncedValue;
}

// search bar component
export default function DebounceSearchBar() {
    const [inputVal, setInputVal] = useState("");
    const debouncedVal = useDebounce(inputVal, 500); // debounce value for 500 ms

    // can use the 'debouncedVal' in component logic:
    // e.g: Triggering a search API call via a useEffect

    useEffect(() => {
        if (debouncedVal) {
            console.log(debouncedVal);
        }
    }, [debouncedVal]);

    return (
        <>
            <input
                placeholder="Search here.."
                type="text"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
            />
            <br />
            <br />
            <div>Debounced value is: {debouncedVal}</div>
        </>
    );
}
