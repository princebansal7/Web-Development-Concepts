import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
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
    const notificationsAtomVal = useRecoilValue(notificationAtom);
    const totalNotifications = useRecoilValue(totalNotificationSelector);
    // const messagesAtomVal = useRecoilValue(messageAtom);

    // Because, now we need to update value too => useRecoilState(), which gives both
    const [messagesAtomVal, setMessagesAtomVal] = useRecoilState(messageAtom);

    return (
        <div>
            <button>Home</button>
            <button>My Network ({networksAtomVal})</button>
            <button>Jobs ({jobsAtomVal})</button>
            <button>
                Messages ({messagesAtomVal >= 100 ? "99+" : messagesAtomVal})
            </button>
            <button>
                Notification (
                {notificationsAtomVal >= 100 ? "99+" : notificationsAtomVal})
            </button>
            <button onClick={() => setMessagesAtomVal(cnt => cnt + 1)}>
                Me
            </button>
            <h3>Total Notifications:{totalNotifications}</h3>
        </div>
    );
}

export default App;
