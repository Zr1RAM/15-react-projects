import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { toggleSidebar, toggleSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    console.log(e.target);
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.right + tempBtn.left) / 2;
    const bottom = tempBtn.bottom - 3;
    toggleSubmenu(true, page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      toggleSubmenu(false);
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img
            src="https://raw.githubusercontent.com/john-smilga/react-projects/a7607537821a58e3569a4e4d8eb029ae63fe405d/13-stripe-submenus/setup/src/images/logo.svg"
            alt="stripe"
            className="nav-logo"
          />
          <button
            className="btn toggle-btn"
            onClick={() => toggleSidebar(true)}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
