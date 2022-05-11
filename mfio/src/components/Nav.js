import React, { Component } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import logo from '../images/pxArt(3).png'



class Nav extends Component {
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
              <Link to='/' class="nameItem"><a class="navLink">Home</a></Link>
              <Link to='/Portfolio' class="nameItem"><a class="navLink">Portfolio</a></Link>
              <Link to='/Contact' class="nameItem"><a class="navLink">Contact</a></Link>
            </ul>

            <ul
            
              className={cn("nav-links", {
                ["open"]: showNavMobile
              })}
            >
              <Link to='/' 
                className={cn({
                  ["open-item"]: showNavMobile
                })}
              >
              <a class="navLink">Home</a>
              </Link>

              <Link to='/Portfolio'
              className={cn({
                ["open-item"]: showNavMobile
              })}
            >
            <a class="navLink">Portfolio</a>
            </Link>


              <Link to='/Contact' 
                className={cn({
                  ["open-item"]: showNavMobile
                })}
              >
              <a class="navLink">Contact</a>
              </Link>


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

