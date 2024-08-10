import { selector } from "recoil";
import {
    jobAtom,
    messageAtom,
    networkAtom,
    notificationAtom,
} from "../atoms/atom";

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const jobsCount = get(jobAtom);
        const messagesCount = get(messageAtom);
        const networksCount = get(networkAtom);
        const notificationsCount = get(notificationAtom);

        return jobsCount + messagesCount + networksCount + notificationsCount;
    },
});
