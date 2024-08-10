import { atom } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 7,
});
export const jobAtom = atom({
    key: "jobAtom",
    default: 0,
});
export const messageAtom = atom({
    key: "messageAtom",
    default: 91,
});
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 99,
});

// This way we have separately defined the state as atom
