import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";

function App() {
  return (
    <>
      {" "}
      <div lassName="App">
        <Navbar />
        <HeroSection />

        <footer className="footer">
          {" "}
          Coded by <strong>Tulio Salvatierra 2023</strong>
        </footer>
      </div>
    </>
  );
}

export default App;
