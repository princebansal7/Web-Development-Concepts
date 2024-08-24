import useDimension from "../hooks/useDimension";

function DimensionComponent() {
    const { w, h } = useDimension();
    return (
        <>
            <h3>Window inner dimensions</h3>
            <h4>
                width:{w} , height:{h}
            </h4>
        </>
    );
}

export default DimensionComponent;
