import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import About from "./components/About";
import PageFooter from "./components/PageFooter";
import ContactSection from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <ContactSection />
      <PageFooter />
    </>
  );
}

export default App;
