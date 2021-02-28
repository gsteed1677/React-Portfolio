import React from "react";



function Nav() {
  return (
     <nav classname="navbar navbar-expand-lg navbar-light">
        <a classname="navbar-brand" href="index.html">Garrett Steed</a>
        <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span classname="navbar-toggler-icon">
          </span></button>
        <div classname="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classname="navbar-nav mr-auto">
            <li classname="nav-item active">
              <a classname="nav-link" href="contact.html">Contact <span classname="sr-only">(current)</span></a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="assets/Garrett Steed Resume 2020.pdf">Resume</a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="index.html">Home</a>
            </li>
          </ul>
        </div>
      </nav>
  );
  }

export default Nav;