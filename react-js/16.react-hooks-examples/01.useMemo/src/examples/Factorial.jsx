import { useState, useMemo } from "react";

//  - In this Example, task is to create a component (Factorial) that performs an expensive
//    calculation (finding the factorial) based on a user input.
//  - Use useMemo to ensure that the calculation is only recomputed when the input changes,
//    not on every render.

function Factorial() {
    const [input, setInput] = useState(0);

    // useMemo() ensures unless the user input changes,  on re-render
    // we do again compute the expensive operation
    const expensiveValue = useMemo(() => {
        let factorial = 1;
        for (let i = 1; i <= input; i++) {
            factorial = factorial * i;
        }
        // console.log(input);
        // console.log(factorial);
        return factorial;
    }, [input]);

    return (
        <div>
            <h1>Calculate Factorial!</h1>
            <input
                type="number"
                placeholder="69"
                onChange={e =>
                    setInput(
                        isNaN(Number(e.target.value))
                            ? 0
                            : Number(e.target.value)
                    )
                }
            />
            <h2>
                {input}! = {expensiveValue}
            </h2>
            <hr />
        </div>
    );
}

export default Factorial;
