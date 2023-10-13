import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      {" "}
      <header>
        <Navbar />
      </header>
      <HeroSection />
      <About />
      <footer className="footer">
        {" "}
        Coded by <strong>Tulio Salvatierra 2023</strong>
      </footer>
    </>
  );
}

export default App;
