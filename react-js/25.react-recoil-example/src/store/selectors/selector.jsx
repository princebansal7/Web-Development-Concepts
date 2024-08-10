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
        // using atom in get => it tells react that this selector depends on
        // these atoms => anytime these changes selector gets called
        const jobsCount = get(jobAtom);
        const messagesCount = get(messageAtom);
        const networksCount = get(networkAtom);
        const notificationsCount = get(notificationAtom);

        return jobsCount + messagesCount + networksCount + notificationsCount;
    },
});
