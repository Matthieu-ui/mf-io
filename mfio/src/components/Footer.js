import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
class Footer extends Component {
  render() {
    return (

          <div className="attribution full column">
            <p>
              &copy; 2021-2022 by{" "}
              <li><Link to="https://Matthieufelker.io">Matthieu Felker</Link></li>.
            </p>
            <p>
              Created with
              <i className="footerIcon">
                <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
              </i>
            </p>
          </div>

    );
  }
}

export default Footer;
