import React, { Component } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import DesignBook from "../components/DesignBook";
import MiniNav from "../components/MiniNav";



class Design extends Component {
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

                        <div class="full column">
                            <div class="sectionHeader">
                                <h1>Design</h1>
                                <MiniNav/>
                                <hr></hr>
                                <DesignBook />



                            </div>


                        </div>
                    </div>
                </div>

                <Footer />
            </body>
        );
    }
}

export default Design;
