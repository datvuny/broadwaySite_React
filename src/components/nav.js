import React from 'react';

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg sticky fixed-top r-nav">
        <div className="container">
          <a href="./" className="navbar-brand">
            BROADWAY IN THE KNOW
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarId"
          >
            <span>
              <i className="fas fa-bars hamburger"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarId">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="./" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.todaytix.com/nyc/category/all-shows"
                  className="nav-link"
                >
                  TodayTix
                </a>
              </li>
              <li className="nav-item">
                <a href="./policy" className="nav-link">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a href="./contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  export default Nav;