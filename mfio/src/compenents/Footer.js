import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="attribution full column">
            <p>
              &copy; 2021-2022 by{" "}
              <a href="https://github.com/Matthieu-ui">Matthieu Felker</a>.
            </p>
            <p>
              Created with
              <i className="footerIcon">
                <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
              </i>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
