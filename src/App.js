import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Login from "./Pages/Authentication/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Authentication/SignUp";
function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
