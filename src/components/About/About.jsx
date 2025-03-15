import React, { useContext } from "react";
import "./About.css";
import { myCotext } from "../../context/DataFetching";
const About = () => {
  const {mode}=useContext(myCotext)
  return (
    <>
      <div id={`${mode === "dark" ? "App" : "AppWhite"}`}>
        <div className="content">
          <div className={`${mode === "dark" ? "title" : "title-white-mode"}`}>
            <h4>About ToDo</h4>
          </div>
          <div className={`${mode === "dark" ? "desc" : "desc-white-mode"}`}>
          
            <p>
              A to-do list is a list of items that
              <span className="red-text">need to be completed.</span> The items
              on the list can range from simple activities like replying to an
              email, to more complex tasks like creating project briefs.
            </p><br/>
          
            <p>
              The items on a to-do list are usually <span className="red-text">action-oriented,</span> such as
              “Schedule a meet with the R&D team” or “Call back customer X.”
              Some lists include more abstract goals, such as “improve your time
              management skills” or “learn how to use a new software program.”
            </p>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
