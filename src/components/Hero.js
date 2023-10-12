import React from "react";
import logo from "../images/marinauto.png";
import "../components/Hero.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="welcome-message text-center">
        <h1 className="display-1">Marin Auto Glass</h1>
        <h4 className="center">El mejor de Cape Coral</h4>
        <button className="btn btn-primary mx-auto mb-5">Contactame</button>
      </div>
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default HeroSection;
