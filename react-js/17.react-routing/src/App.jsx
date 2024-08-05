import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

function App() {
    // 1. creating routes
    // return (
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/dashboard" element={<Dashboard />} />
    //             <Route path="/" element={<Landing />} />
    //         </Routes>
    //     </BrowserRouter>
    // );

    //2. Creating top bar which remains same at all routes
    // return (
    //     <div>
    //         <div
    //             style={{
    //                 background: "black",
    //                 color: "grey",
    //                 padding: 2,
    //                 borderRadius: 5,
    //                 margin: 5,
    //             }}
    //         >
    //             <h2>Top Bar</h2>
    //         </div>
    //         <BrowserRouter>
    //             <Routes>
    //                 <Route path="/dashboard" element={<Dashboard />} />
    //                 <Route path="/" element={<Landing />} />
    //             </Routes>
    //         </BrowserRouter>
    //     </div>
    // );
    //  - Now, the question: we creating 2 client side routes, so when request goes to
    //    '/dashboard' or '/' does the HTML/CSS/JS bundle returns each time?
    //
    //  3. Let's add 2 buttons for Landing and Dashboard page view.
    //     - When we do client side routing, ideally we shouldn't get any html/css/js back when
    //       going through routes
    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        // window.location.href = "http://localhost:5173/"; // not react way
                        //                  or
                        window.location.href = "/"; // not react way
                    }}
                >
                    Landing page
                </button>
                <button
                    onClick={() => {
                        // window.location.href = "http://localhost:5173/dashboard"; // not react way
                        //                  or
                        window.location.href = "/dashboard"; // not react way
                    }}
                >
                    Dashboard page
                </button>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
    // Above way we are not actually doing client-side-routing, as checking network tab in inspect mode
    // it's clear all html js files are coming again and page is doing hard reload
    //
    // To Solve this problem we can use another hook called 'useNavigate()' provided by 'react-router-dom'
    // Library!
}
export default App;
