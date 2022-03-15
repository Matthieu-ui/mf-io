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
import {Link} from "react-router-dom";

class cardContent extends Component {
  render() {
    return (
      <div className="mfio-card">
        <div className="avi">
          <GlassCard />
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

        <div className="links">
          <ul>
          
            <li className="clinks">
            <Link to="mailto:Mattfelker206@outlook.com"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></Link>
            </li>
            <li className="clinks">
              <Link to="https://github.com/Matthieu-ui"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></Link>
              
            </li>
            <li className="clinks">
              <Link to="/Projects"><FontAwesomeIcon icon={faFolderOpen}></FontAwesomeIcon></Link>     
            </li>
          </ul>
          <div className="cardFooter">
            <p>Email - GitHub - Projects</p>
            <p>MatthieuFelker.io</p>
          </div>
        </div>
      </div>
    );
  }
}

export default cardContent;
