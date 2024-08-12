import { useRecoilValue, useRecoilValueLoadable, RecoilRoot } from "recoil";

import { todoAtomFam } from "./atom";
/* eslint-disable react/prop-types */

// - We know we are getting data from backend => sometimes it can take little time to
//   get back to us, like we mimicked in selector example using setTimeout
// - Now, instead of showing empty screen, we want to show some loader

// - For this use useRecoilValueLoadable() hook, instead of useRecoilValue()
// - also can use useRecoilStateLoadable() hook, instead of useRecoilState(), gives updater fxn too

function App() {
    return (
        <RecoilRoot>
            <ToDo id={1} />
            <ToDo id={2} />
        </RecoilRoot>
    );
}

function ToDo({ id }) {
    // const todo = useRecoilValue(todoAtomFam(id));
    const todo = useRecoilValueLoadable(todoAtomFam(id));

    // now, this todo is not out todos list, but it's an object
    // which have:
    // {
    //    state: => until values comes from backend, gives value 'loading'
    //              when gets values from backend, gives value 'hasValue'
    //              when backend call fail, gets value 'hasError'
    //    contents => it is the actual data we are getting
    // }
    // => accordingly we can put checks and show loader to users in case of delay
    console.log(todo);
    // return (
    //     <>
    //         <h2>{todo.title}</h2>
    //         <p>{todo.description}</p>
    //     </>
    // );

    if (todo.state === "loading") {
        return <div>Loading...</div>;
    } else if (todo.state === "hasValue") {
        return (
            <>
                <h2>{todo.contents.title}</h2>
                <p>{todo.contents.description}</p>
            </>
        );
    } else if (todo.state === "hasError") {
        // Can handle these errors using Suspense, ErrorBoundary too if
        // not using Loadable hook
        return <div>Error loading the data from backend</div>;
    }
}

export default App;

// This way we can add 'loading skeleton' to websites when backend call have delay
