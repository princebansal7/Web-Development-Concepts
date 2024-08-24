import { useEffect, useState } from "react";

export default function useIsOnline() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    // Define the event listener functions
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    useEffect(() => {
        // Add the event listeners
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Cleanup by removing the event listeners
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return isOnline;
}
