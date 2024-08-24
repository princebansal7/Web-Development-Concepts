import { useEffect, useState } from "react";

export default function useDimension() {
    const [innerDimension, setInnerDimension] = useState({
        w: window.innerWidth,
        h: window.innerHeight,
    });

    const handleResizeEvent = () => {
        setInnerDimension({ w: window.innerWidth, h: window.innerHeight });
    };

    useEffect(() => {
        window.addEventListener("resize", handleResizeEvent);

        // cleaning up previous effect
        return () => {
            window.removeEventListener("resize", handleResizeEvent);
        };
    }, []);

    return innerDimension;
}
