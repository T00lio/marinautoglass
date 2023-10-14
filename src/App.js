import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {" "}
      <header>
        <Navbar />
      </header>
      <HeroSection />
      <About />
      <Footer />
    </>
  );
}

export default App;
