import React, { Component } from "react";

//import Card from "./Links";
import GlassCard from "./Glasscard";

class Main extends Component {
  render() {
    return (

      <div>
        <div id="mainer">
          <div className="mainContainer">
            <div className="aviBox">
              <GlassCard />

            </div>
            <div className="mainText">
                  <i id="peaceSign" class="fa-solid fa-hand-peace"></i>
                  <p>
                    I am an <b>artist</b>, <b>designer</b> and <b>developer</b>{" "}
                    from the greater Seattle area.
                  </p>
                  <br></br>
                  <p>
                    This website is an <b>ever-growing</b> project and{" "}
                    <b>home</b> to a collection of my work and future{" "}
                    <b>open-source</b> projects.{" "}
                  </p>
                  <p className="loveMatt">
                    -<small> Matthieu</small>{" "}
                  </p>
                </div>
          </div>
        </div>

        <div className="full column"></div>
      </div>
    );
  }
}

export default Main;
