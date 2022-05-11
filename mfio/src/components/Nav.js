import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          
            <img className="newLogo" src={logo} alt="logo"></img>

            <ul class="navMenu">
                <Link class="nameItem">
                  <a class="navLink" href="/">Home</a>
                </Link>
                <Link class="nameItem">
                  <a class="navLink" href="Portfolio">Portfolio</a>
                </Link>
                <Link class="nameItem">
                  <a class="navLink" href="Contact">Contact</a>
                </Link>
              </ul>

            <ul
              className={cn("nav-links", {
                ["open"]: showNavMobile
              })}
            >
              <li
                className={cn({
                  ["open-item"]: showNavMobile
                })}
              >
                <a href="/">Home</a>
              </li>
              <li
                className={cn({
                  ["open-item"]: showNavMobile
                })}
              >
                <a href="Contact">Contact</a>
              </li>
              <li
                className={cn({
                  ["open-item"]: showNavMobile
                })}
              >
                <a href="Portfolio">Portfolio</a>
              </li>
            </ul>
            <div
              className={cn("burger", {
                ["toggle"]: showNavMobile
              })}
              
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

