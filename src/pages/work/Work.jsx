import React from "react";
import "./Work.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../../components/cards/Cards";

const Home = () => {
  const [projDetails, setProjectDetails] = useState([]);

  useEffect(() => {
    if (projDetails.length === 0) {
      axios
        .get("https://api.github.com/users/emoueitchaien/repos")
        .then((response) => {
          setProjectDetails(response.data);
        });
    }
  }, [projDetails]);

  return (
    <React.Fragment>
      <div className="card-container">
        {projDetails.map((project, index) => {
          return <Cards key={index} project={project} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
