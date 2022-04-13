import React from "react";
import "../styles/Contact.css";
// import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <React.Fragment>
      <h2>Contact Me!</h2>

      <div className="center">
        <form action="#" target="_self">
          <fieldset
            id="field"
            style={{ borderRadius: "8px" }}
            className="expand"
          >
            <legend className="leg1">Your Information</legend>
            <div className="center2">
              <div className="text1">
                <div>
                  <div
                    style={{
                      float: "left",
                      marginRight: "40px",
                      marginBottom: "20px",
                    }}
                  >
                    <label>Name :</label>
                    <br />
                    <br />
                    <input
                      className="inp"
                      type="text"
                      required=""
                      oninvalid="this.setCustomValidity('I need to know Your Name!')"
                      oninput="this.setCustomValidity('')"
                      placeholder="Your First Name"
                    />
                    <br />
                  </div>
                  <div style={{ float: "left", marginBottom: "20px" }}>
                    <label>E-mail :</label>
                    <br />
                    <br />
                    <input
                      className="inp"
                      type="text"
                      name="mail"
                      required=""
                      oninvalid="this.setCustomValidity('Incase I need to get back to you!')"
                      oninput="this.setCustomValidity('')"
                      placeholder="your_name@domain"
                    />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <br />
          <fieldset
            id="field"
            style={{ borderRadius: "8px" }}
            className="expand"
          >
            <legend className="leg1">Your Message</legend>
            <div className="center2">
              <div className="text1">
                <div>
                  <div
                    style={{
                      float: "left",
                      marginRight: "40px",
                      marginBottom: "20px",
                    }}
                  ></div>
                  <div
                    style={{
                      float: "left",
                      marginRight: "40px",
                      marginBottom: "20px",
                    }}
                  ></div>
                  <div
                    style={{
                      float: "left",
                      marginRight: "40px",
                      marginBottom: "20px",
                    }}
                  >
                    <label>Message :</label>
                    <br />
                    <br />

                    <textarea
                      rows="7"
                      cols="45"
                      placeholder="Your Message here"
                      oninvalid="this.setCustomValidity('Thought you were writing something to me!?')"
                      oninput="this.setCustomValidity('')"
                      required=""
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <br />

          <br />
          <br />
          <div className="center3">
            <input
              id="submit"
              className="button"
              type="submit"
              name="Done"
              value="Submit!"
            />
            <br />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
