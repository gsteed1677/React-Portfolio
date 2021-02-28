import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function Navbar() {
  return (
     <nav classname="navbar navbar-expand-lg navbar-light">
        <a classname="navbar-brand" href="/">Garrett Steed</a>
        <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span classname="navbar-toggler-icon">
          </span></button>
        <div classname="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classname="navbar-nav mr-auto">
            <li classname="nav-item active">
              <a classname="nav-link" href="/contact">Contact</a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="/resume">Resume</a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="/">Home</a>
            </li>
          </ul>
        </div>
      </nav>
  );
  }

export default Navbar;