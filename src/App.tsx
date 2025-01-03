import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router";
import React, {useState} from "react";
import {AboutUs} from "./components/AboutUs";
import {Contacts} from "./components/Contacts";
import {Login} from "./components/Login";
import {Registration} from "./components/Registration";
import {UserInformation} from "./types/user-information";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {Logout} from "./components/Logout";
import {MainCabinet} from "./components/Main Cabinet";
import {MainPage} from "./components/MainPage";

const getNavLinkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
    color: isActive ? "red" : "darkred",
    fontSize: isActive ? "1.4rem" : "1.2rem",
    padding: "2rem",
});

function App() {
    const [currentUserID, setCurrentUserID] = useState<number>();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [availableAccounts, setAvailableAccounts] = useState<UserInformation[]>([]);

    return (
        <BrowserRouter>
            <nav>
                <NavLink style={getNavLinkStyle} to="">Main page</NavLink>
                <NavLink style={getNavLinkStyle} to="about">About us</NavLink>
                <NavLink style={getNavLinkStyle} to="contacts">Contacts</NavLink>
                {isAuthorized ?
                    <>
                        <NavLink style={getNavLinkStyle} to="logout">Logout</NavLink>
                        <NavLink style={getNavLinkStyle} to="main-cabinet">Main cabinet</NavLink>
                    </>
                    : <NavLink style={getNavLinkStyle} to="login">Login</NavLink>}
            </nav>
            <Routes>
                <Route path="" element={<MainPage />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="login" element={<Login setIsAuthorized={setIsAuthorized} availableAccounts={availableAccounts} setCurrentUserID={setCurrentUserID} />} />
                <Route path="registration" element={<Registration availableAccounts={availableAccounts} setAvailableAccounts={setAvailableAccounts} />} />
                <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
                    <Route path="logout" element={<Logout setIsAuthorized={setIsAuthorized} />} />
                    <Route path="main-cabinet" element={<MainCabinet user={availableAccounts.find((user) => user.id === currentUserID)} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;