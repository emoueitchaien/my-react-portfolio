import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"work"}>Works</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          {/* <li>
            <div id="outer-div">
              <div id="inner-div" className="moon"></div>
            </div>
          </li> */}
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
