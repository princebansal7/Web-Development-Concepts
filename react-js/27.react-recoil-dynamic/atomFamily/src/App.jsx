import {
    useRecoilValue,
    RecoilRoot,
    atomFamily,
    useSetRecoilState,
} from "recoil";
import { useEffect } from "react";
import { todosArr } from "./todosArray";
import { todoAtomFam } from "./atom";
/* eslint-disable react/prop-types */

// Say we are getting todos dynamically with some ID,
// and we should render those todos whose id is passed
// and we need to store todos in atom.
// => we need to store atom dynamically and not individually

function App() {
    return (
        <RecoilRoot>
            <ToDo id={1} />
            <ToDo id={2} />
            <ToDo id={2} />
            <ToDo id={3} />
            <ToDo id={4} />
            <TodoUpdater />
        </RecoilRoot>
    );
}

function TodoUpdater() {
    const todoToUpdate = useSetRecoilState(todoAtomFam(2));

    useEffect(() => {
        setTimeout(() => {
            todoToUpdate({
                id: 2,
                title: "NEW TODO",
                description: "New Description!!",
            });
        }, 4000);
    }, [todoToUpdate]);
}

function ToDo({ id }) {
    // We can't create atom like this, as will be getting atoms
    // dynamically and not hardcoded
    // => single atom will store single state!

    // const todoAtom = atom({
    //     key: "todoAtom1",
    //     default: { id: 1, title: "task-1", description: "description-1" },
    // });

    // counter: we can store the whole todo array in single atom too
    // this also has some downsides
    // const todoAtom = atom({
    //     key: "todoAtom1",
    //     default: [
    //         {
    //             id: 1,
    //             title: "task-1",
    //             description: "description-1",
    //         },
    //         {
    //             id: 2,
    //             title: "task-2",
    //             description: "description-2",
    //         },
    //     ],
    // });
    //            or
    // const todoAtom = atom({
    //     key: "todoAtom1",
    //     default: todosArr,
    // });

    // So this way are getting just the single todoAtom, or whole array
    // so, if only one array value changes all thing re-renders!
    // we can't dynamically create atoms like this

    // const todo = useRecoilValue(todoAtom);

    // "With use of atomFamily(): it is a function which return a writeable RecoilState atom"

    // We want each todo component to have it's own atom
    // => we'll use atomFamily
    //    In this default value is function, which return specific atom
    //    with provided id
    // const todoAtomFam = atomFamily({
    //     key: "todoAtomFam",
    //     default: function (passedId) {
    //         return todosArr.find(function (todo) {
    //             return todo.id === passedId;
    //         });
    //     },
    // });
    //
    //          or
    //
    // const todoAtomFam = atomFamily({
    //     key: "todoAtomFam",
    //     default: passedIdArg => {
    //         return todosArr.find(todo => todo.id === passedIdArg);
    //     },
    // });
    // Benefit is if multiple todos gets called with same id => it refers to same
    // todo and doesn't create new one each time hence, if update one todo id=2 => other todo
    // with same id=2 also gets updated, check TodoUpdate() component

    // Getting specific todo based on id from atomFamily
    const todo = useRecoilValue(todoAtomFam(id));

    return (
        <>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
        </>
    );
}

export default App;
