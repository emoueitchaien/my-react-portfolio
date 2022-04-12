import React from "react";
import "../styles/Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <main id="main">
        <header>
          <nav id="navbar">
            <span id="logo">
              <a href="Home" element={Link} to="/Home">
                emoueitchaien
              </a>
            </span>
            <ul className="nav-list">
              <li>
                <a href="About" element={Link} to="/About">
                  About
                </a>
              </li>
              <li>
                <a href="Work" element={Link} to={"/Work"}>
                  Works
                </a>
              </li>
              <li>
                <a href="Contact" element={Link} to={"/Contact"}>
                  Contact
                </a>
              </li>
              <li>
                <div id="outer-div">
                  <div id="inner-div" className="moon"></div>
                </div>
              </li>
            </ul>
          </nav>
        </header>
        <section id="hero">
          <div className="image">
            <div id="rightcircle"></div>
            <div id="man"></div>
          </div>
          <div id="info">
            <h1 id="mohan">
              Mohan
              <br />
              Pradhan
            </h1>
            <p>
              CS & IT Student at Amrit Campus! <br />
              Full-Stack JavaScript Developer -To-Be!
            </p>
            <button>Hire Me</button>
          </div>
        </section>
        <section style={{ position: "fixed" }} id="work"></section>
        <footer></footer>
      </main>
      <script src="script.js"></script>
    </React.Fragment>
  );
};

export default Home;
