import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";

function App() {
  return (
    <>
      {" "}
      <header>
        <Navbar />
      </header>
      <HeroSection />
      <section className="row"></section>
      <footer className="footer">
        {" "}
        Coded by <strong>Tulio Salvatierra 2023</strong>
      </footer>
    </>
  );
}

export default App;
