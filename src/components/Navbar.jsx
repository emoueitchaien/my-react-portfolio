import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <React.Fragment>
      <nav id="navbar">
        <span id="logo">
          <Link to="/Home">emoueitchaien</Link>
        </span>
        <ul className="nav-list">
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to={"/Work"}>Works</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
          <li>
            <div id="outer-div">
              <div id="inner-div" className="moon"></div>
            </div>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
