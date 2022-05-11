import React, { Component } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import MiniNav from "../components/MiniNav";
import Pheader from "../images/portTitle.svg"

class Portfolio extends Component {
    render() {
        return (

            <body>
                <div class="container">
                    <div class="row">
                        <Nav />
                    </div>
                </div>

                <div class="container gridSection">
                    <div class="row">

                        <div class="full column">
                            <div class="sectionHeader">
                                <img className="" src={Pheader} alt="Portfolio" />
                                <MiniNav />
                            </div>
<hr></hr>
                            <b><h1>Attention visitors!</h1></b>
                            <p>This collection is under construction. I am working to gather together all my work, old and new, to properly present. Collections will be available to all <b>Soon</b>.</p>
                            <br></br>
                            <p>In the mean time check out my GitHub to see what I've been up to!</p>

              
                        </div>


                    </div>
                </div>

                <Footer />
            </body>
        );
    }
}

export default Portfolio;
