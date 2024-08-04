import { useCallback, useState, memo } from "react";

// Create a counter component with increment and decrement functions. Pass
// these functions to a child component which has buttons to perform the increment
// and decrement actions. Use useCallback to ensure that these functions are not
// recreated on every render.

/* eslint-disable react/prop-types */

export function Counter() {
    const [count, setCount] = useState(0);

    // This way functions are depending on count (in setCount), but if count changes, both button
    // will re-render => but we have use another way

    // const handleIncrement = useCallback(() => setCount(count + 1), [count]);
    // const handleDecrement = useCallback(() => setCount(count - 1), [count]);

    // This in setCount we are using function => hence not directly accessing the
    // state variable (count), instead using whatever it's current value is
    const handleIncrement = useCallback(
        () => setCount(currentCount => currentCount + 1),
        []
    );
    const handleDecrement = useCallback(
        () => setCount(currentCount => currentCount - 1),
        []
    );

    return (
        <div>
            <p>Count: {count}</p>
            <IncrementButton onIncrement={handleIncrement} />
            <DecrementButton onDecrement={handleDecrement} />
            <hr />
        </div>
    );
}

const IncrementButton = memo(({ onIncrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
    </div>
));
const DecrementButton = memo(({ onDecrement }) => (
    <div>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));

IncrementButton.displayName = "IncrementButton";
DecrementButton.displayName = "DecrementButton";
