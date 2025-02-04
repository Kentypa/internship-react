import { NavLink } from "react-router";
import React from "react";

export const Menu: React.FC = () => {
  return (
    <div className="main-layout">
      <nav className="side-nav">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/task3/main-page" className="nav-item">
          Task 3 Pages
        </NavLink>
        <NavLink to="/task4/page=1" className="nav-item">
          Task 4 Pages
        </NavLink>
        <NavLink to="/task5" className="nav-item">
          Task 5 Pages
        </NavLink>
        <NavLink to="/task6" className="nav-item">
          Task 6 Pages
        </NavLink>
        <NavLink to="/task7" className="nav-item">
          Task 7 Pages
        </NavLink>
      </nav>
      <div className="content"></div>
    </div>
  );
};
