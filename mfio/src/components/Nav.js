import React, { Component } from "react";

import cn from "classnames";
import logo from '../images/pxArt(3).png'



class Nav extends Component{
  state = {
    showNavMobile: false
  };
  render() {
    const { showNavMobile } = this.state;

    return (
      <div className="nav">
        <nav>
          <div className="wrap">
          
            <img className="newLogo" src={logo} alt="Matts logo"></img>

            <ul class="navMenu">
                <li class="nameItem">
                  <a class="navLink" href="/">Home</a>
                </li>
                <li class="nameItem">
                  <a class="navLink" href="Portfolio">Portfolio</a>
                </li>
                <li class="nameItem">
                  <a class="navLink" href="Contact">Contact</a>
                </li>
              </ul>

            <ul
              className={cn}
            >
              <li
                className={cn}
              >
                <a href="/">Home</a>
              </li>
              <li
                className={cn}
              >
                <a href="Contact">Contact</a>
              </li>
              <li
                className={cn}
              >
                <a href="Portfolio">Portfolio</a>
              </li>
            </ul>
            <div
              className={cn("burger")}
              
              onClick={() =>
                this.setState({ showNavMobile: !this.state.showNavMobile })
              }
            >
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

