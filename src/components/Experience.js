import React from "react";
import "./experience.css";
import Image from "../../src/image/frontEnd.jpg";
import Soft from "../../src/image/soft.png";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>My experiences</h1>
      <div className="soft">
        <div className="soft-left">
          <img src={Image}></img>
        </div>
        <div className="soft-right">
          <ul>
            <h3>Project Aptech</h3>
            <li>
              + Jelwery Web ( building a sales web interface for users with
              Angular 4 ){" "}
            </li>
            <li>+ Gym App ( Java ) </li>
          </ul>
          <ul>
            <h3>Saporta Corp</h3>
            <li>
              + Intern Front End( 2 mounths ) and Fresher Front End ( 2 mounths
              ){" "}
            </li>
            <li>
              + Participate in the big project of a European American restaurant
              ( Next js , scss , material-ui , react ){" "}
            </li>
          </ul>
          <ul>
            <h3>Freelancer Web</h3>

            <li>+ Get PSD to HTML cut on Facebook Group </li>
          </ul>
        </div>
      </div>
      <div className="soft-2">
        <div className="soft-left">
          <img src={Soft} className="img2"></img>
        </div>
        <div className="soft-right2">
          <ul>
            <h3>EngLish</h3>
            <li>+ Toeic 600 </li>
            <li>+ Speak and Listen </li>
          </ul>
          <ul>
            <h3>Strenght</h3>
            <li>+ Learn new technologies well </li>
            <li>
              + Hardworking, ready to take responsibility and OT if needed{" "}
            </li>
          </ul>
          <ul>
            <h3> Soft Skill</h3>

            <li>+ Scss ,Redux , React Hook , Git , Trello , Photoshop</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
