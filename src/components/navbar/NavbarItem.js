import React from "react";
import { NavLink } from "react-router-dom";

function NavbarItem({ handleClick, text, linkto, children }) {
  return (
    <>
      <li className="navbar-item" onClick={handleClick}>
        <NavLink to={linkto} className="navbar-link">
          {children}
          <p>{text}</p>
        </NavLink>
      </li>
    </>
  );
}

export default NavbarItem;
