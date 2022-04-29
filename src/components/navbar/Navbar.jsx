import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <React.Fragment>
      <nav id="navbar">
        <span id="logo">
          <Link to="/home">emoueitchaien</Link>
        </span>
        <ul className="nav-list">
          <li>
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"work"}>Works</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
