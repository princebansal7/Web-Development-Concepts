import { atom } from "recoil";

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: {
        networks: 0,
        jobs: 0,
        messages: 0,
        notifications: 0,
    },
});
