import React from "react";
import "../css/skeleton.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Main from "../components/Main"

function App() {
  return (
    <div className="App">
      <body>
        <div class="container">
          <div class="row">
          <div className="full column">
          <Nav />
          </div>
           
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

      </body>
    </div>
  );
}

export default App;
