import React from "react";
import "./Work.css";
import pic1 from "./img/img-1.png";
import pic2 from "./img/img-2.png";
import pic3 from "./img/img-3.png";
import pic4 from "./img/img-4.png";

const Home = () => {
  return (
    <React.Fragment>
      <div className="card-container">
        <div className="card">
          <img className="card-img" src={pic1} alt="Card cap" />
          <div className="overlay">
            <div className="cardborder">
              <h5 className="card-title">Project</h5>
              <p className="card-description">
                This project has this description. That it has some description
              </p>
              <a href=" " className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src={pic2} alt="Card  cap" />
          <div className="overlay">
            <div className="cardborder">
              <h5 className="card-title">Project</h5>
              <p className="card-description">
                This project has this description. That it has some description
              </p>
              <a href=" " className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src={pic3} alt="Card  cap" />
          <div className="overlay">
            <div className="cardborder">
              <h5 className="card-title">Project</h5>
              <p className="card-description">
                This project has this description. That it has some description
              </p>
              <a href=" " className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src={pic4} alt="Card  cap" />
          <div className="overlay">
            <div className="cardborder">
              <h5 className="card-title">Project</h5>
              <p className="card-description">
                This project has this description. That it has some description
              </p>
              <a href=" " className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src={pic1} alt="Card  cap" />
          <div className="overlay">
            <div className="cardborder">
              <h5 className="card-title">Project</h5>
              <p className="card-description">
                This project has this description. That it has some description
              </p>
              <a href="/" className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src={pic2} alt="Card  cap" />
          <div className="overlay">
            <div className="cardborder">
              <h5 className="card-title">Project</h5>
              <p className="card-description">
                This project has this description. That it has some description
              </p>
              <a href=" " className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
