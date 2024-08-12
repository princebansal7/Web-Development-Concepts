import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

// Here we use selectorFamily() to get a particular todo with id
// Now we hitting backend => async task => use selector as default value in atom

export const todoAtomFam = atomFamily({
    key: "todoAtomFam",
    default: selectorFamily({
        key: "todoAtomSelectorFam",
        get: id => async () => {
            const response = await axios.get(
                `http://localhost:3000/todos?id=${id}`
            );
            return response.data;
        },
    }),
});

// Naive way
// export const todoAtomFam = atomFamily({
//     key: "todoAtomFam",
//     default: selectorFamily({
//         key: "todoAtomSelectorFam",
//         //  can't use async fxn
//         get: function (id) {
//             // function returning async fxn
//             return async function () {
//                 const response = await axios.get(
//                     `http://localhost/todos?id=${id}`
//                 );
//                 return response.data;
//             };
//         },
//     }),
// });

// - We know we are getting data from backend => sometimes it can take little time to
//   get back to us, like we mimicked in selector example using setTimeout
// - Now, instead of showing empty screen, we want to show some loader
