import React from "react";
import "./Contact.css";
// import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <h2>Contact Me!</h2>

      <div class="center">
        <form action="#" target="_self">
          <fieldset style={{ borderRadius: "8px" }} class="expand">
            <legend class="leg1">Your Information</legend>
            <div class="center2">
              <div class="text1">
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
                      class="inp"
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
                      class="inp"
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
          <fieldset style={{ borderRadius: "8px" }} className="expand">
            <legend class="leg1">Your Message</legend>
            <div class="center2">
              <div class="text1">
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
                      cols="52"
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
          <div class="center3">
            <input
              id="submit"
              class="button"
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
}

export default Home;
