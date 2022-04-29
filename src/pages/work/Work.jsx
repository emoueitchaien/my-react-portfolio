import React from "react";
import "./Work.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../components/cards/Cards";

const Home = () => {
  const [projDetails, setProjectDetails] = useState([]);

  useEffect(() => {
    if (projDetails.length === 0) {
      axios.get("http://localhost:5000/projects").then((response) => {
        setProjectDetails(response.data);
      });
    }
  }, [projDetails]);

  return (
    <React.Fragment>
      <h2>My Projects So Far</h2>

      <div className="card-container">
        {projDetails.map((project, index) => {
          return <Cards key={index} project={project} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
