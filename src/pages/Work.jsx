import React from "react";
import "../styles/Work.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";

const Home = () => {
  const [projDetails, setProjectDetails] = useState([]);

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     "https://api.github.com/users/emoueitchaien/repos"
  //   );
  //   setProjectDetails(response.data);
  //   console.log(projDetails[1]);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (projDetails.length === 0) {
      axios
        .get("https://api.github.com/users/emoueitchaien/repos")
        .then((response) => {
          setProjectDetails(response.data);
          console.log(projDetails[1]);
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
