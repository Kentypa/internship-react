import React, {useState} from "react";
import {NavLink, Route, Routes} from "react-router";
import {Login} from "../Login";
import {Registration} from "../Registration";
import {ProtectedRoute} from "../ProtectedRoute";
import {Logout} from "../Logout";
import {MainCabinet} from "../Main Cabinet";
import {UserInformation} from "../../types/user-information.tsx";

const getNavLinkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
    color: isActive ? "red" : "darkred",
    fontSize: isActive ? "1.4rem" : "1.2rem",
    padding: "2rem",
});

export const Authorization: React.FC = () => {
    const [currentUserID, setCurrentUserID] = useState<number>();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [availableAccounts, setAvailableAccounts] = useState<UserInformation[]>([]);

    return (
        <div>
            <nav className="task-nav">
                {isAuthorized ? (
                    <>
                        <NavLink style={getNavLinkStyle} to="/task4/authorization/logout" className="nav-item">Logout</NavLink>
                        <NavLink style={getNavLinkStyle} to="/task4/authorization/main-cabinet" className="nav-item">Main Cabinet</NavLink>
                    </>
                ) : (
                    <NavLink style={getNavLinkStyle} to="/task4/authorization/login" className="nav-item">Login</NavLink>
                )}
            </nav>
            <Routes>
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
                <Route element={<ProtectedRoute isAuthorized={isAuthorized}/>}>
                    <Route
                        path="logout"
                        element={<Logout setIsAuthorized={setIsAuthorized}/>}
                    />
                    <Route
                        path="main-cabinet"
                        element={<MainCabinet user={availableAccounts.find(
                            (user) => user.id === currentUserID
                        )}/>}
                    />
                </Route>
            </Routes>
        </div>
    )
}