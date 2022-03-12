import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GlassCard from "./Glasscard";
import { faEnvelope, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faPython,
  faNodeJs,
  faLinux,
  faWindows,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import About from "./About";

class cardContent extends Component {
  render() {
    return (
      <div className="mfio-card">
  
        <div className="avi">
        <GlassCard />
        </div>


        <div className="title">
          <p>Web Developer and Graphic Artist</p>
        </div>
        <div className="skillBase">
          <i>
            <FontAwesomeIcon className="icons" icon={faHtml5}></FontAwesomeIcon>
            <FontAwesomeIcon className="icons" icon={faCss3}></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icons"
              icon={faJsSquare}
            ></FontAwesomeIcon>
            <FontAwesomeIcon className="icons" icon={faReact}></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icons"
              icon={faNodeJs}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icons"
              icon={faPython}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="icons"
              icon={faWindows}
            ></FontAwesomeIcon>
            <FontAwesomeIcon className="icons" icon={faLinux}></FontAwesomeIcon>
            <FontAwesomeIcon className="icons" icon={faApple}></FontAwesomeIcon>
          </i>
        </div>
        <About />

        <div className="links">
          <ul>
            <li className="clinks">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </li>
            <li className="clinks">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </li>
            <li className="clinks">
              <FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default cardContent;
