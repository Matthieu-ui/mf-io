import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  // faHtml5,
  // faCss3,
  // faJsSquare,
  // faReact,
  // faPython,
  // faNodeJs,
  // faLinux,
  // faWindows,
  // faApple,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

class Links extends Component {
  render() {
    return (
      <div>

        <div className="links">
          <ul>


            <li className="clinks">
              <a href="https://github.com/Matthieu-ui"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            </li>

          </ul>
         
        </div>
      </div>
    );
  }
}

export default Links;
