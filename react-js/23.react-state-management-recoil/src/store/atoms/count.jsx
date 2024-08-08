import { atom } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0,
});

// This way we have separately defined the state as atom
