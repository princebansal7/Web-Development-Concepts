import { atomFamily } from "recoil";
import { todosArr } from "./todosArray";

export const todoAtomFam = atomFamily({
    key: "todoAtomFam",
    default: passedIdArg => {
        return todosArr.find(todo => todo.id === passedIdArg);
    },
});
