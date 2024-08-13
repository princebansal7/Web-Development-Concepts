export function ResponsivenessWithBreakPoints() {
    return (
        <>
            <div className="bg-purple-500 text-gray-50 md:bg-blue-500">
                Bg with change
            </div>
            <br />
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div style={{ backgroundColor: "lightblue", color: "blue" }}>
                    tailwind - flex - Child-0
                </div>
                <div className="bg-red-600 text-yellow-200">
                    tailwind - flex - Child-1
                </div>
                <div className="bg-yellow-400 text-red-600">
                    tailwind - flex - Child-2
                </div>
                <div className="bg-green-600 text-neutral-100">
                    tailwind - flex - Child-3
                </div>
            </div>
        </>
    );
}
