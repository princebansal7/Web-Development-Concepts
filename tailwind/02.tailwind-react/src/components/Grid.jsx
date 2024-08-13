export function Grid() {
    return (
        <>
            <div className="grid grid-cols-3">
                <div className="bg-orange-500">tailwind - grid - Child-1</div>
                <div className="bg-blue-100">tailwind - grid - Child-2</div>
                <div className="bg-green-500">tailwind - grid - Child-3</div>
            </div>
            <br />

            {/* 
            Making unequal parts - total parts 10 (100%),
             1st div in 4 (40%) parts,
             2nd div in 4 (40%) parts, 
             3rd div in 2 (20%) parts 
             */}
            <div className="grid grid-cols-10">
                <div className="bg-red-500 col-span-4">
                    tailwind - grid - Child-1
                </div>
                <div className="bg-yellow-500 col-span-4">
                    tailwind - grid - Child-2
                </div>
                <div className="bg-blue-500 col-span-2">
                    tailwind - grid - Child-3
                </div>
            </div>
            <br />
            {/* Without grid  */}
            <div className="flex">
                <div className="bg-red-500 w-[40%]">
                    tailwind - grid - Child-1
                </div>
                <div className="bg-yellow-500 w-[40%]">
                    tailwind - grid - Child-2
                </div>
                <div className="bg-blue-500 w-[20%]">
                    tailwind - grid - Child-3
                </div>
            </div>
            <hr />
        </>
    );
}

// Now we'll see how to set break-points, and accordingly elements will take different widths
