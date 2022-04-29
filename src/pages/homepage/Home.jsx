import React from "react";
import "./Home.css";
import cv from "../../assets/my_cv_web.pdf";
import SocialSites from "../socialSites/SocialSites";

const Home = () => {
  return (
    <React.Fragment>
      <section id="hero">
        <div className="image">
          <div id="rightcircle"></div>
          <div id="man"></div>
        </div>
        <div id="social">
          <SocialSites />
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
          <a href={cv}>
            <button>Get My CV</button>
          </a>
        </div>
        <div id="onlySmall">
          <SocialSites />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
