import React from "react";
import "../src/css/skeleton.css";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Card />
            </div>
          </div>
        </div>
        <div className="footer container">
          <div className="row">
            <div className="full column">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
