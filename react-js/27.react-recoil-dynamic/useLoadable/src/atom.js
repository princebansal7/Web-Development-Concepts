import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todoAtomFam = atomFamily({
    key: "todoAtomFam",
    default: selectorFamily({
        key: "todoAtomSelectorFam",
        get: id => async () => {
            // adding artificial delay of 2 sec
            await new Promise(resolve => setTimeout(resolve, 2000));
            const response = await axios.get(
                `http://localhost:3000/todos?id=${id}`
            );
            return response.data;
        },
    }),
});
