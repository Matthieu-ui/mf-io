import React from "react";
import "../css/skeleton.css";
import Card from "../components/Links";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Main from "../components/Main"

function App() {
  return (
    <div className="App">
      <body>
        <div class="container">
          <div class="row">
            <Nav />
          </div>
        </div>

        <div class="container gridSection">
          <div class="row">
            <div class="main">
              <div class="full column">
                <div class="one-half columns">
                 <Main/>
                </div>
              </div>
            </div>
          </div>
        </div>

<Footer/>

        <script src="js/lightmode.js"></script>
        <script src="js/mobileMenu.js"></script>
        <script src="js/3dcard.js"></script>
      </body>
    </div>
  );
}

export default App;
