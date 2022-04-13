import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <main id="main">
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
