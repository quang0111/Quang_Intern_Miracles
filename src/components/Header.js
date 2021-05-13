import React from "react";
import "./styleHeader.css";
import Image from "../../src/image/avatar.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Header() {
  return (
    <div className="banner">
      <div className="changecolor"></div>
      <p data-aos="fade-left" data-aos-delay="50" data-aos-duration="2000">
        " I can accept failure, everyone fails at something. But I can’t accept
        not trying. – Michael Jordan . "
      </p>
      <div className="avatar">
        <img src={Image}></img>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#home">About Me</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#activities">Activities</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
