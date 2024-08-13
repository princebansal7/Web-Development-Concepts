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
                    tailwind - flex - Child-1
                </div>
                <div style={{ backgroundColor: "yellow" }}>
                    tailwind - flex - Child-2
                </div>
                <div style={{ backgroundColor: "lightgrey" }}>
                    tailwind - flex - Child-3
                </div>
            </div>
            <hr />

            <div className="flex justify-start">
                <div style={{ backgroundColor: "lightblue" }}>
                    tailwind - flex - Child-1
                </div>
                <div style={{ backgroundColor: "yellow" }}>
                    tailwind - flex - Child-2
                </div>
                <div style={{ backgroundColor: "lightgrey" }}>
                    tailwind - flex - Child-3
                </div>
            </div>
            <hr />

            <div className="flex justify-end">
                <div style={{ backgroundColor: "lightblue" }}>
                    tailwind - flex - Child-1
                </div>
                <div style={{ backgroundColor: "yellow" }}>
                    tailwind - flex - Child-2
                </div>
                <div style={{ backgroundColor: "lightgrey" }}>
                    tailwind - flex - Child-3
                </div>
            </div>
            <hr />

            <div className="flex justify-center">
                <div style={{ backgroundColor: "lightblue" }}>
                    tailwind - flex - Child-1
                </div>
                <div style={{ backgroundColor: "yellow" }}>
                    tailwind - flex - Child-2
                </div>
                <div style={{ backgroundColor: "lightgrey" }}>
                    tailwind - flex - Child-3
                </div>
            </div>
            <hr />

            <div className="flex justify-around">
                <div style={{ backgroundColor: "red" }}>
                    tailwind - flex - Child-1
                </div>
                <div style={{ backgroundColor: "yellow" }}>
                    tailwind - flex - Child-2
                </div>
                <div style={{ backgroundColor: "green" }}>
                    tailwind - flex - Child-3
                </div>
            </div>
            <hr />

            <div className="flex justify-between">
                <div className="bg-red-600">tailwind - flex - Child-1</div>
                <div className="bg-yellow-400">tailwind - flex - Child-2</div>
                <div className="bg-green-600">tailwind - flex - Child-3</div>
            </div>
            <hr />
        </>
    );
}
