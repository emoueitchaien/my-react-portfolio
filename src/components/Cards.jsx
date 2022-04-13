import React from "react";
import pic1 from "../assets/img/img-1.png";
// import pic1 from "https://avatars.githubusercontent.com/u/51243294?v=4";
const Cards = (props) => {
  return (
    <>
      <div className="card">
        <img className="card-img" src={pic1} alt="Card cap" />
        <div className="overlay">
          <div className="cardborder">
            <h5 className="card-title">{props.project.name}</h5>
            <p className="card-description">
              {props.project.description
                ? props.project.description
                : "Some project with no description, please visit below to know more."}
            </p>
            <a href={props.project.html_url} className="btn btn-primary">
              View Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
