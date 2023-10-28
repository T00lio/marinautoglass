import React from "react";
import logo from "../images/marinlogo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            style={{ borderRadius: 25 }}
          />
          <span className="navbar-brand-name ml-2">
            <strong>Marin Auto Glass</strong>
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link disabled" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
