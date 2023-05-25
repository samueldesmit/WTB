import './App.css';
import Home from "./pages/home/Home";
import Nav from "./components/Nav";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import {Navigate, Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/notfoud/NotFoundPage";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <Nav />
                <Routes>
                    <Route path="login" element={<Login/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="profile" element={ isAuthenticated ? <Profile/> : <Navigate to="/login"/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="/" element={ isAuthenticated ? <Home/> : <Navigate to="/login"/>}/>
                </Routes>
        </>
    );
}

export default App;
