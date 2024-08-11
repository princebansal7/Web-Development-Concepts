import { atom, selector } from "recoil";
import axios from "axios";

// - Default value for an atom should be synchronous or
//   can be a selector which is synchronous.
// - In our current case, we are giving atom default values and making async
//   call separately, which causes double render of app, 1st with default values
//   and 2nd with async call when we hit backend.
// - To avoid this, need to make async call from atom by using selector in default

// export const notificationsAtom = atom({
//     key: "notificationsAtom",
//     default: {
//         networks: 0,
//         jobs: 0,
//         messages: 0,
//         notifications: 0,
//     },
// });

// eg:
export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: selector({
        key: "notificationsAtomSelector",
        get: async () => {
            // adding 3 sec artificial delay (nothing will render)
            // await new Promise(res => setTimeout(res, 3000));
            const response = await axios.get(
                "http://localhost:3000/notifications"
            );
            return response.data;
        },
    }),
});
