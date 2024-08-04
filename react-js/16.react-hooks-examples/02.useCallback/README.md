- Counter component explained
  - Approach-1 (Using count Directly)
    ```jsx
    const handleIncrement = useCallback(() => setCount(count + 1), [count]);
    const handleDecrement = useCallback(() => setCount(count - 1), [count]);
    ```
  - Approach-2 (Using a Function with setCount)
    ```jsx
        const handleIncrement = useCallback(
            () => setCount(currentCount => currentCount + 1),
            []
        );
        const handleDecrement = useCallback(
            () => setCount(currentCount => currentCount - 1),
            []
        );
    ```
- Differences and Implications

	1.	Dependence on State (count):
	  - Approach 1:
        - Directly references the count state variable.
        - The useCallback dependencies array includes [count].
        - This means that the handleIncrement and handleDecrement functions are recreated every time the count value changes, which can cause the child components (IncrementButton and DecrementButton) to re-render even if the functions’ behavior hasn’t changed.
	 - Approach 2:

	    - Uses a function inside setCount that takes the previous state (currentCount) as an argument.
	    - The useCallback dependencies array is empty ([]), meaning the functions are created only once and never change.
	    - This approach ensures that the functions do not depend on the external count state, preventing unnecessary re-renders of the child components when the count changes.
	2.	Function Creation and Memoization:

	 - Approach 1:
	    - Every time the count changes, new instances of handleIncrement and handleDecrement are created due to the dependency on count.
	    - This can lead to unnecessary re-renders of the IncrementButton and DecrementButton components since their props (onIncrement and onDecrement) are changing.
	 - Approach 2:
	    - The functions are stable and do not change between renders because they do not depend on the count state directly.
	    - This avoids unnecessary re-renders of the IncrementButton and DecrementButton components, making the app more efficient.

- Why Approach 2 is Preferred

  - Using the function form of setCount in useCallback ensures that the callback functions (handleIncrement and handleDecrement) do not need to be recreated on every render. This can be particularly important in performance-sensitive applications, as it minimizes the number of re-renders and ensures that memoized components like IncrementButton and DecrementButton are not re-rendered unnecessarily.