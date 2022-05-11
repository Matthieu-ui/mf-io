import React, { Component } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faGithub
//     faHtml5,
//     faCss3,
//     faJsSquare,
//     faReact,
//     faPython,
//     faNodeJs,
//     faLinux,
//     faWindows,
//     faApple,
 } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import MiniNav from "../components/MiniNav";





class Development extends Component {
    render() {
        return (

            <body>
                <div class="container">
                    <div class="row">
                        <div className="full-column">
                            <Nav />
                        </div>


                    </div>
                </div>

                <div class="container gridSection">
                    <div class="row">

                    <div className="sectionHeader">
                        <div class="full column">
                      
                            <h1>Development</h1>
               
                            <MiniNav/>
                            
                            
                            </div>

                            <h1>...Not much here!?</h1>
                            <hr></hr>
                            <ul>
                            <li className="navLink">
                            <Link to="https://github.com/Matthieu-ui">GitHub<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></Link>
                        </li>
                            </ul>
                         

                    </div>
                    </div>
                            

           

               



                </div>

                <Footer />
            </body>
        );
    }
}

export default Development;
