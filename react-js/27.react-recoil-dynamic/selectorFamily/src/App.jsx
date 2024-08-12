import { useRecoilValue, RecoilRoot } from "recoil";

import { todoAtomFam } from "./atom";
/* eslint-disable react/prop-types */

// useSelector
// Here we will be getting todos from backend server

function App() {
    return (
        <RecoilRoot>
            <ToDo id={1} />
            <ToDo id={2} />
            <ToDo id={2} />
            <ToDo id={3} />
            <ToDo id={4} />
        </RecoilRoot>
    );
}

function ToDo({ id }) {
    const todo = useRecoilValue(todoAtomFam(id));

    return (
        <>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
        </>
    );
}

export default App;
