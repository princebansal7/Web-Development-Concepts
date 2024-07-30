- React `Component returns` only one element (top level xml)

    Correct:
    ```jsx
    function App() {
        return (
            <>
                <Header />
                <Header />
                <Header />
            </>
        );
    }
    ```
    wrong:
    ```jsx
    function App() {
        return (
            <Header />
            <Header />
            <Header />
        );
    }
    ```

- Reason is **Reconciliation:**
- **What is Reconciliation?** It is the process of figuring out what DOM updates needs to happen as the application grows
- The process of updating the UI when the state or props of a component change is called **"reconciliation"** (Virtual DOM, Diffing Algorithm, Update Mechanism are some key concepts of reconciliation)