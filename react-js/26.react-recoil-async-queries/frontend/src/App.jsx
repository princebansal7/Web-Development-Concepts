import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notificationsAtom } from "./store/atoms/atom";
import { totalNotificationSelector } from "./store/selectors/selector";
import { useEffect } from "react";
import axios from "axios";

// - We'll setup a basic app which sends backend request and get random
//   notification values for top bar !
// - This is initial way (need some improvements)

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
    const [notifications, setNotifications] = useRecoilState(notificationsAtom);
    const totalNotifications = useRecoilValue(totalNotificationSelector);
    console.log(notifications);

    // Making async call using fetch or axios => use useEffect() hook
    useEffect(() => {
        axios.get("http://localhost:3000/notifications").then(response => {
            setNotifications(response.data);
        });
    }, [setNotifications]);

    return (
        <div>
            <button>Home</button>
            <button>My Network {notifications.networks}</button>
            <button>Jobs {notifications.jobs} </button>
            <button>
                Messages{" "}
                {notifications.messages >= 100 ? "99+" : notifications.messages}
            </button>
            <button>
                Notification (
                {notifications.notifications >= 100
                    ? "99+"
                    : notifications.notifications}
                )
            </button>
            <h3>Total Notifications:{totalNotifications}</h3>
        </div>
    );
}

export default App;
