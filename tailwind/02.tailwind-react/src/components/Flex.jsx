export function Flex() {
    // 1. html way but in react
    // return (
    //     <>
    //         <div style={{ display: "flex" }}>
    //             <div style={{ backgroundColor: "lightblue" }}>I am Child-1</div>
    //             <div style={{ backgroundColor: "yellow" }}>I am Child-2</div>
    //             <div style={{ backgroundColor: "lightgrey" }}>I am Child-3</div>
    //         </div>
    //         <hr />

    //         <div style={{ display: "flex", justifyContent: "flex-start" }}>
    //             <div style={{ backgroundColor: "lightblue" }}>I am Child-1</div>
    //             <div style={{ backgroundColor: "yellow" }}>I am Child-2</div>
    //             <div style={{ backgroundColor: "lightgrey" }}>I am Child-3</div>
    //         </div>
    //         <hr />

    //         <div style={{ display: "flex", justifyContent: "space-around" }}>
    //             <div style={{ backgroundColor: "lightblue" }}>I am Child-1</div>
    //             <div style={{ backgroundColor: "yellow" }}>I am Child-2</div>
    //             <div style={{ backgroundColor: "lightgrey" }}>I am Child-3</div>
    //         </div>
    //         <hr />
    //     </>
    // );

    // 2. Using Tailwind
    return (
        <>
            <div className="flex">
                <div style={{ backgroundColor: "lightblue" }}>
                    flex - Child-1 - tw
                </div>
                <div style={{ backgroundColor: "yellow" }}>
                    flex - Child-2 - tw
                </div>
                <div style={{ backgroundColor: "lightgrey" }}>
                    flex - Child-3 - tw
                </div>
            </div>
            <hr />

            <div className="flex justify-start">
                <div style={{ backgroundColor: "lightblue" }}>
                    flex:justify-start - Child-1 - tw
                </div>
                <div style={{ backgroundColor: "yellow" }}>
                    flex:justify-start - Child-2 - tw
                </div>
                <div style={{ backgroundColor: "lightgrey" }}>
                    flex:justify-start - Child-3 - tw
                </div>
            </div>
            <hr />

            <div className="flex justify-end">
                <div style={{ backgroundColor: "lightblue" }}>
                    flex:justify-end - Child-1 - tw
                </div>
                <div style={{ backgroundColor: "yellow" }}>
                    flex:justify-end - Child-2 - tw
                </div>
                <div style={{ backgroundColor: "lightgrey" }}>
                    flex:justify-end - Child-3 - tw
                </div>
            </div>
            <hr />

            <div className="flex justify-center">
                <div style={{ backgroundColor: "lightblue" }}>
                    flex:justify-center - Child-1 - tw
                </div>
                <div style={{ backgroundColor: "yellow" }}>
                    flex:justify-center - Child-2 - tw
                </div>
                <div style={{ backgroundColor: "lightgrey" }}>
                    flex:justify-center - Child-3 - tw
                </div>
            </div>
            <hr />

            <div className="flex justify-around">
                <div style={{ backgroundColor: "red" }}>
                    flex:justify-around - Child-1 - tw
                </div>
                <div style={{ backgroundColor: "yellow" }}>
                    flex:justify-around - Child-2 - tw
                </div>
                <div style={{ backgroundColor: "green" }}>
                    flex:justify-around - Child-3 - tw
                </div>
            </div>
            <hr />

            <div className="flex justify-between">
                <div className="bg-red-600">
                    flex:justify-between - Child-1 - tw
                </div>
                <div className="bg-yellow-400">
                    flex:justify-between - Child-2 - tw
                </div>
                <div className="bg-green-600">
                    flex:justify-between - Child-3 - tw
                </div>
            </div>
            <hr />
        </>
    );
}
