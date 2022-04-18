import React from "react";
import pic1 from "../../assets/img/proj_img1.png";
import pic2 from "../../assets/img/proj_img2.png";
import pic3 from "../../assets/img/proj_img3.png";
import pic4 from "../../assets/img/proj_img4.png";

const Cards = (props) => {
  var pictures = {
    1: pic1,
    2: pic2,
    3: pic3,
    4: pic4,
  };

  return (
    <>
      <div className="card">
        <img
          className="card-img"
          src={pictures[Math.floor(Math.random() * 4) + 1]}
          alt="Card cap"
        />
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
