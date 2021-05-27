import React from "react";
import "../styles/header.css";

function Header() {
    return (
        <header>
        <div className="px-3 py-2 bg-dark text-white">
          <div className="container">
            <div
              className="
                d-flex
                flex-wrap
                align-items-center
                justify-content-center justify-content-lg-start
              "
            >
              <a
                href="#hero"
                className="
                  d-flex
                  align-items-center
                  my-2 my-lg-0
                  me-lg-auto
                  text-white text-decoration-none
                "
              >
                <h1>Nick Verneck</h1>
              </a>
  
              <ul
                className="
                  nav
                  col-12 col-lg-auto
                  my-2
                  justify-content-center
                  my-md-0
                  text-small
                "
              >
                <li>
                  <a href="#hero" className="nav-link text-secondary">
                    <h1><i className="bx bx-home d-block mx-auto mb-1"></i></h1>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link text-white">
                    <h1><i className="bx bx-user d-block mx-auto mb-1"></i></h1>
                    About
                  </a>
                </li>
                <li>
                  <a href="./Nickresume2020.pdf" target="_blank" className="nav-link text-white">
                    <h1><i className="bx bx-file-blank d-block mx-auto mb-1"></i></h1>
                    <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="nav-link text-white">
                    <h1>
                      <i className="bx bx-book-content d-block mx-auto mb-1"></i>
                    </h1>
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link text-white">
                    <h1><i className="bx bx-envelope d-block mx-auto mb-1"></i></h1>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;