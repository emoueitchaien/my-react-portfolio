import React from "react";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };
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
                      value={name}
                      name="name"
                      required=""
                      onChange={handleName}
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
                      name="email"
                      value={email}
                      required=""
                      onChange={handleEmail}
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
                      width: "100%",
                      float: "left",
                      // marginRight: "40px",
                      marginBottom: "20px",
                    }}
                  >
                    <label>Message :</label>
                    <br />
                    <br />

                    <textarea
                      name="message"
                      value={message}
                      rows="6"
                      cols="45"
                      placeholder="Your Message here"
                      onChange={handleMessage}
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
              onClick={handleSubmit}
            />
            <br />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
