import useMousePointer from "../hooks/useMousePointer";

function MousePointerComponent() {
    const mouseLoc = useMousePointer();
    return (
        <>
            <h3>Mouse pointer location is</h3>
            <h4>
                X:{mouseLoc.x} , Y:{mouseLoc.y}
            </h4>
        </>
    );
}

export default MousePointerComponent;
