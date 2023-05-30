import React from 'react';
import { Link } from "react-router-dom";
import Contact from './contact'
import Home from './home'
import Policy from './policy'

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light sticky fixed-top r-nav">
        <div className="container">
        <Link className="navbar-brand" to="/" component={<Home />}>BROADWAY IN THE KNOW</Link>  
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
              <Link className="nav-link" to="/" component={<Home />}>Home</Link> 
                {/* <a href="https://www.broadwayintheknow.com/" className="nav-link">
                  Home
                </a> */}
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
                <a
                  href="https://www.luckyseat.com/"
                  className="nav-link"
                >
                  Lucky Seat
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://rush.telecharge.com/"
                  className="nav-link"
                >
                  Telecharge
                </a>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/policy" component={<Policy />}>Privacy Policy</Link> 
                {/* <a href="https://www.broadwayintheknow.com/policy" className="nav-link">
                  Privacy Policy
                </a> */}
              </li>
              <li className="nav-item">
              {/* <Link className="nav-link" to="/contact" component={<Contact />}>Contact</Link>  */}
                <a href="https://www.broadwayintheknow.com/contact" className="nav-link">
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