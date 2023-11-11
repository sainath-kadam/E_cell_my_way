import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assets/images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="brand-title">
        <img className="e_cell-logo" src={Logo} alt="logo" />
      </div>
      <a className="toggle-button" onClick={() => setActive(!active)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={`${active ? "active" : null} navbar-links`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Events">Events</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Associates">Associates</a>
          </li>
          <li>
            <a href="/Gallery">Gallery</a>
          </li>
          <li>
            <a href="/Team">Team</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


// Home Events About Associates Gallery Team ContactUs 

