import { NavLink } from "react-router";
import React from "react";

type MenuProps = {
  isAuthorized: boolean;
};

const getNavLinkStyle = ({
  isActive,
}: {
  isActive: boolean;
}): React.CSSProperties => ({
  color: isActive ? "red" : "darkred",
  fontSize: isActive ? "1.4rem" : "1.2rem",
  padding: "2rem",
});

export const Menu: React.FC<MenuProps> = ({ isAuthorized }) => {
  return (
    <nav className="task-nav">
      {isAuthorized ? (
        <>
          <NavLink
            style={getNavLinkStyle}
            to="/task4/authorization/logout"
            className="nav-item"
          >
            Logout
          </NavLink>
          <NavLink
            style={getNavLinkStyle}
            to="/task4/authorization/main-cabinet"
            className="nav-item"
          >
            Main Cabinet
          </NavLink>
        </>
      ) : (
        <NavLink
          style={getNavLinkStyle}
          to="/task4/authorization/login"
          className="nav-item"
        >
          Login
        </NavLink>
      )}
    </nav>
  );
};
