import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import About from "./components/About";
import PageFooter from "./components/PageFooter";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <HeroSection />
      <About />
      <PageFooter />
    </>
  );
}

export default App;
