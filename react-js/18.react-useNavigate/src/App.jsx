import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";

/*
 // Below is wrong way to use this hook
function App() {
    // Using 'useNavigate()' hook for client-side-routing.
    // - it make sure to not to do Hard reload of page
    // - changing the route and load the route specific code

   
    //  - We can only use react-router-dom specific things inside <BrowserRouter/>
    //    component => useNavigate() hook and whichever one is using it should be inside
    //    above mentioned component
    const navigate = useNavigate();
    return (
        <div>
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
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
*/

function App() {
    // - To solve above issue, we will put all the router specific code in another
    // component and put that component inside <BrowserRouter/> component
    // - This is the correct way to do client side routing in react

    return (
        <div>
            <BrowserRouter>
                <AppTopBar />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Landing />} />
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
