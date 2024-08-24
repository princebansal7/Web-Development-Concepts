import { useEffect, useState } from "react";

export default function useMousePointer() {
    const [mousePointerLoc, setMousePointerLoc] = useState({ x: 0, y: 0 });

    function handleMouseMoveEvent(event) {
        setMousePointerLoc({ x: event.clientX, y: event.clientY });
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMoveEvent);

        // cleaning up previous effect
        return () => {
            window.removeEventListener("mousemove", handleMouseMoveEvent);
        };
    }, []);

    return mousePointerLoc;
}
