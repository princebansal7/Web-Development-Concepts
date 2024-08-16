import { useState } from "react";

function App() {
    let [color, setColor] = useState("bg-gray-200");
    console.log(color);
    const btnStyle = "m-1 rounded-full px-4 shadow-xl";

    return (
        <>
            <div className={`w-full h-screen duration-200 ${color}`}>
                <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
                    <div className="flex flex-wrap justify-center gap-3 bg-lime-100 shadow-xl text-white rounded-xl py-1 px-2">
                        <button
                            onClick={() => {
                                setColor("bg-slate-700");
                            }}
                            className={`bg-slate-700 ${btnStyle}`}
                        >
                            Black
                        </button>
                        <button
                            onClick={() => {
                                setColor("bg-green-400");
                            }}
                            className={`bg-green-400 ${btnStyle}`}
                        >
                            Green
                        </button>

                        <button
                            onClick={() => {
                                setColor("bg-yellow-400");
                            }}
                            className={`bg-yellow-400 ${btnStyle}`}
                        >
                            Yellow
                        </button>

                        <button
                            onClick={() => {
                                setColor("bg-blue-400");
                            }}
                            className={`bg-blue-400 ${btnStyle}`}
                        >
                            Blue
                        </button>

                        <button
                            onClick={() => {
                                setColor("bg-red-500");
                            }}
                            className={`bg-red-500 ${btnStyle}`}
                        >
                            Red
                        </button>
                        <button
                            onClick={() => {
                                setColor("bg-purple-400");
                            }}
                            className={`bg-purple-400 ${btnStyle}`}
                        >
                            Purple
                        </button>
                        <button
                            onClick={() => {
                                setColor("bg-pink-400");
                            }}
                            className={`bg-pink-400 ${btnStyle}`}
                        >
                            Pink
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
