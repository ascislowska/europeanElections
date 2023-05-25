import React from "react";

const SideMenu = () => {
  return (
    <aside className="menu side-menu is-fixed-top">
      <div className="section side-menu-section">
        <p className="menu-label">About</p>
        <ul className="menu-list">
          <li>
            <a>Data</a>
          </li>
          <li>
            <a>Our Team</a>
          </li>
          <li>
            <a>Support</a>
          </li>
        </ul>
        <p className="menu-label">Check data</p>
        <ul className="menu-list">
          <li>
            <a>Voting turnout</a>
          </li>
          <li>
            <a className="is-active">Results</a>
            <ul>
              <li>
                <a>Parties</a>
              </li>
              <li>
                <a>Groups</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
