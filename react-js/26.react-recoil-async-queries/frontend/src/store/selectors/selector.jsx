import { selector } from "recoil";
import { notificationsAtom } from "../atoms/atom";

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        const allNotifications = get(notificationsAtom);
        return (
            allNotifications.networks +
            allNotifications.jobs +
            allNotifications.messages +
            allNotifications.notifications
        );
    },
});
