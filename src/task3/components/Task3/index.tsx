import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router";
import { UserInformation } from "../../types/user-information.tsx";
import { MainPage } from "../MainPage";
import { AboutUs } from "../AboutUs";
import { Contacts } from "../Contacts";
import { Login } from "../Login";
import { Registration } from "../Registration";
import { ProtectedRoute } from "../ProtectedRoute";
import { Logout } from "../Logout";
import { MainCabinet } from "../Main Cabinet";
import '../../styles/style.css'

const getNavLinkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
    color: isActive ? "red" : "darkred",
    fontSize: isActive ? "1.4rem" : "1.2rem",
    padding: "2rem",
});

export const Task3: React.FC = () => {
    const [currentUserID, setCurrentUserID] = useState<number>();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [availableAccounts, setAvailableAccounts] = useState<UserInformation[]>([]);

    return (
        <div>
            <nav className="task-nav">
                <NavLink style={getNavLinkStyle} to="/task3/main-page" className="nav-item">Main page</NavLink>
                <NavLink style={getNavLinkStyle} to="/task3/about" className="nav-item">About us</NavLink>
                <NavLink style={getNavLinkStyle} to="/task3/contacts" className="nav-item">Contacts</NavLink>
                {isAuthorized ? (
                    <>
                        <NavLink style={getNavLinkStyle} to="/task3/logout" className="nav-item">Logout</NavLink>
                        <NavLink style={getNavLinkStyle} to="/task3/main-cabinet" className="nav-item">Main cabinet</NavLink>
                    </>
                ) : (
                    <NavLink style={getNavLinkStyle} to="/task3/login" className="nav-item">Login</NavLink>
                )}
            </nav>
            <Routes>
                <Route path="main-page" element={<MainPage />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="contacts" element={<Contacts />} />
                <Route
                    path="login"
                    element={
                        <Login
                            setIsAuthorized={setIsAuthorized}
                            availableAccounts={availableAccounts}
                            setCurrentUserID={setCurrentUserID}
                        />
                    }
                />
                <Route
                    path="registration"
                    element={
                        <Registration
                            availableAccounts={availableAccounts}
                            setAvailableAccounts={setAvailableAccounts}
                        />
                    }
                />
                <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
                    <Route
                        path="logout"
                        element={<Logout setIsAuthorized={setIsAuthorized} />}
                    />
                    <Route
                        path="main-cabinet"
                        element={
                            <MainCabinet
                                user={availableAccounts.find(
                                    (user) => user.id === currentUserID
                                )}
                            />
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
};
