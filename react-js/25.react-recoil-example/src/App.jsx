import { RecoilRoot, useRecoilValue } from "recoil";
import {
    networkAtom,
    jobAtom,
    messageAtom,
    notificationAtom,
} from "./store/atoms/atom";
import { totalNotificationSelector } from "./store/selectors/selector";

function App() {
    return (
        <>
            <RecoilRoot>
                <LinkedInTopBar />
            </RecoilRoot>
        </>
    );
}

function LinkedInTopBar() {
    const networksAtomVal = useRecoilValue(networkAtom);
    const jobsAtomVal = useRecoilValue(jobAtom);
    const messagesAtomVal = useRecoilValue(messageAtom);
    const notificationsAtomVal = useRecoilValue(notificationAtom);
    const totalNotifications = useRecoilValue(totalNotificationSelector);

    return (
        <div>
            <button>Home</button>
            <button>My Network ({networksAtomVal})</button>
            <button>Jobs ({jobsAtomVal})</button>
            <button>Messages ({messagesAtomVal})</button>
            <button>
                Notification (
                {notificationsAtomVal >= 99 ? "99+" : notificationsAtomVal})
            </button>
            <h3>Total Notifications:{totalNotifications}</h3>
        </div>
    );
}

export default App;
