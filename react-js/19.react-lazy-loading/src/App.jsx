import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";

// 1. To Lazy import:

const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

// function App() {
//     return (
//         <div>
//             <BrowserRouter>
//                 <AppTopBar />
//                 <Routes>
//                     <Route path="/dashboard" element={<Dashboard />} />
//                     <Route path="/" element={<Landing />} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }

//  - But will give an error when goes from route A to route B or vice versa
//    As component are routed and getting loaded sometimes may be slower, we may see
//    refresh page, this is issue

// - when you are using nested routes. make sure you are not loading parent
//   component as lazy. there is a chance that child component load faster than
//   parent component. which may cause this issue.
// - Another way to fix add Routes in 'Suspense' component (it lets you do
//   asynchronous data or component fetching)
function App() {
    return (
        // Way-1
        // <div>
        //     <BrowserRouter>
        //         <AppTopBar />
        //         <Suspense>
        //             <Routes>
        //                 <Route path="/dashboard" element={<Dashboard />} />
        //                 <Route path="/" element={<Landing />} />
        //             </Routes>
        //         </Suspense>
        //     </BrowserRouter>
        // </div>

        // Way-2, fallback showing the content inside it, if loads slowly
        <div>
            <BrowserRouter>
                <AppTopBar />
                <Routes>
                    <Route
                        path="/dashboard"
                        element={
                            <Suspense>
                                <Dashboard />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={"loading.."}>
                                <Landing />
                            </Suspense>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function AppTopBar() {
    const navigate = useNavigate();
    return (
        <div>
            <button
                onClick={() => {
                    navigate("/");
                }}
            >
                Landing page
            </button>
            <button
                onClick={() => {
                    navigate("/dashboard");
                }}
            >
                Dashboard page
            </button>
        </div>
    );
}

export default App;
