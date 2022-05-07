import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Links from "../components/Links"
import { Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (

      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footOne full column">
              <p>
                &copy; 2021-2022 by{" "}
                <li><Link to="https://Matthieufelker.io">Matthieu Felker</Link></li>.
              </p>
              <Links />
              <p>Created with .. <i className="footerIcon">
              <FontAwesomeIcon icon={ faReact}> </FontAwesomeIcon>
            </i> </p>
              
            
            </div>
            <div class="footTwo six columns">


            
            </div>
            <div class="footThree two columns">
             
   
            </div>
          </div>
        </div>
      </footer>






    );
  }
}

export default Footer;
