import {
    RecoilRoot,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
import {
    networkAtom,
    jobAtom,
    messageAtom,
    notificationAtom,
} from "./store/atoms/atom";
import { totalNotificationSelector } from "./store/selectors/selector";
import { useMemo } from "react";
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
    const messagesAtomVal = useRecoilValue(messageAtom);

    // Because, now we need to update value too => useRecoilState(), which gives both
    // const [messagesAtomVal, setMessagesAtomVal] = useRecoilState(messageAtom);

    // This way, we will this will get calculated if any other state variable changes
    // const totalNotifications = networksAtomVal + jobsAtomVal + messagesAtomVal + notificationsAtomVal;

    // So, to avoid we need to use useMemo(), it will re-render only when one of the dependent value
    // changes
    // const totalNotifications = useMemo(() => {
    //     return (
    //         networksAtomVal +
    //         jobsAtomVal +
    //         messagesAtomVal +
    //         notificationsAtomVal
    //     );
    // }, [networksAtomVal, jobsAtomVal, messagesAtomVal, notificationsAtomVal]);

    // - To Avoid this, we can use Selector from recoil,
    // - Benefit of using selector in this case instead of useMemo() is we can use
    //   this selector and atoms to create a totally new selector for other use case
    //   (like if we have to show, total notification + total message)
    //   if we use useMemo() we can't use it in other selectors !
    const totalNotificationsSelectorVal = useRecoilValue(
        totalNotificationSelector
    );
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
            {/* <button onClick={()=>{setMessagesAtomVal(messagesAtomVal+1)}}>Me</button> */}
            <button>Me</button>
            {/* <MessageUpdate /> */}

            {/* Without selector */}
            {/* <h3>Total Notifications:{totalNotifications}</h3> */}
            {/* Selector use */}
            <h3>Total Notifications:{totalNotificationsSelectorVal}</h3>
        </div>
    );
}

// Without using Atom

// function MessageUpdate() {
//     We just need to update the state => useSetRecoilState()
//     const setMessagesAtomVal = useSetRecoilState(messageAtom);
//     return (
//         <button onClick={() => setMessagesAtomVal(cnt => cnt + 1)}>Me</button>
//     );
// }

export default App;
