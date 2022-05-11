import React, { Component } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";
// import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";



class Contact extends Component {
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
                        <div class="main">
                            <div class="full column contactContainer">

                                <ContactForm />


                            </div>
             
                                <div className="chatText">
                       
                                    <FontAwesomeIcon className="chatIcon" icon={faCommentDots} />
                                    <p>
                                        let's start a thread if you just want to chat, have inquiries, or questions! Taking commissions now.</p>
                 

                        </div>
              



                </div>
            </div>
                </div >

            <Footer />
            </body >
        );
    }
}

export default Contact;
