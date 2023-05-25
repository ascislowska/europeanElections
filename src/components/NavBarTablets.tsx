import React from "react";

const NavBarTablets = () => {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-menu is-flex-mobile is-justify-content-flex-end">
        <a className="navbar-item">Home</a>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">Charts</a>
          <div className="navbar-dropdown">
            <a className="navbar-item">EU Turnout</a>
            <a className="navbar-item">Parties</a>
            <a className="navbar-item">Groups</a>
          </div>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">About</a>
          <div className="navbar-dropdown">
            <a className="navbar-item">Data</a>
            <a className="navbar-item">Our Team</a>
            <hr className="navbar-divider" />
            <a className="navbar-item">Report an issue</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarTablets;
