import useIsOnline from "../hooks/useOnline";

function IsOnlineHook() {
    const isOnline = useIsOnline();
    return (
        <>
            {isOnline ? (
                <h1>You are connected</h1>
            ) : (
                <h1>Not connected to internet</h1>
            )}
        </>
    );
}

export default IsOnlineHook;
