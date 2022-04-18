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

  const validateName = () => {
    if (name.trim() === "") {
      document.getElementById("nameError").innerHTML = "Name is required!";
      document.getElementById("nameError").style.display = "block";
      return false;
    } else if (name.trim().length <= 4) {
      document.getElementById("nameError").innerHTML =
        "Please enter your fullname!";
      document.getElementById("nameError").style.display = "block";
      return false;
    } else if (!name.trim().match(/^[ a-zA-Z]+$/)) {
      document.getElementById("nameError").innerHTML = "Invalid name!";
      document.getElementById("nameError").style.display = "block";
      return false;
    } else {
      document.getElementById("nameError").style.display = "none";
      return true;
    }
  };

  const validateEmail = () => {
    if (email.trim() === "") {
      document.getElementById("emailError").innerHTML = "Email is required!";
      document.getElementById("emailError").style.display = "block";
      return false;
    } else if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      document.getElementById("emailError").innerHTML = "Enter a valid email";
      document.getElementById("emailError").style.display = "block";
      return false;
    } else {
      document.getElementById("emailError").style.display = "none";
      return true;
    }
  };

  const validateMessage = () => {
    if (message.trim().length <= 5) {
      document.getElementById("messageError").innerHTML = "Enter a valid email";
      document.getElementById("messageError").style.display = "block";
      return false;
    } else {
      document.getElementById("messageError").style.display = "none";
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName();
    validateEmail();
    validateMessage();
    if (validateName() && validateEmail() && validateMessage()) {
      console.log(name, email, message);
      setName("");
      setEmail("");
      setMessage("");
    }
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
                    id="commonStyle"
                    style={{
                      float: "left",
                      marginRight: "40px",
                    }}
                  >
                    <label>Name :</label>
                    <br />
                    <br />
                    <input
                      className="inp"
                      type="text"
                      id="name"
                      value={name}
                      name="name"
                      onChange={handleName}
                      onBlur={validateName}
                      placeholder="  Your full name"
                    />
                    <br />
                    <div id="nameError">name errors</div>

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
                      onChange={handleEmail}
                      onBlur={validateEmail}
                      placeholder="  your_name@domain"
                    />
                    <br /> <div id="emailError">email errors</div>
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
                      width: "100%",
                      float: "left",
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
                      placeholder="  Your message here.."
                      onChange={handleMessage}
                      onBlur={validateMessage}
                    ></textarea>
                    <div id="messageError">message errors</div>
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
