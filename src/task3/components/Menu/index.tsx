import React from "react";
import { NavLink } from "react-router";

const getNavLinkStyle = ({
  isActive,
}: {
  isActive: boolean;
}): React.CSSProperties => ({
  color: isActive ? "red" : "darkred",
  fontSize: isActive ? "1.4rem" : "1.2rem",
  padding: "2rem",
});

type MenuProps = {
  isAuthorized: boolean;
};

export const Menu: React.FC<MenuProps> = ({ isAuthorized }) => {
  return (
    <nav className="task-nav">
      <NavLink
        style={getNavLinkStyle}
        to="/task3/main-page"
        className="nav-item"
      >
        Main page
      </NavLink>
      <NavLink style={getNavLinkStyle} to="/task3/about" className="nav-item">
        About us
      </NavLink>
      <NavLink
        style={getNavLinkStyle}
        to="/task3/contacts"
        className="nav-item"
      >
        Contacts
      </NavLink>
      {isAuthorized ? (
        <>
          <NavLink
            style={getNavLinkStyle}
            to="/task3/logout"
            className="nav-item"
          >
            Logout
          </NavLink>
          <NavLink
            style={getNavLinkStyle}
            to="/task3/main-cabinet"
            className="nav-item"
          >
            Main cabinet
          </NavLink>
        </>
      ) : (
        <NavLink style={getNavLinkStyle} to="/task3/login" className="nav-item">
          Login
        </NavLink>
      )}
    </nav>
  );
};
