import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";

function App() {
  return (
    <>
      {" "}
      <div lassName="App">
        <Navbar />
        <HeroSection />

        <p>Marin Auto Glass Corp</p>
        <p>Mobile & shop installation Cape Coral</p>
        <p>Windshield replacement & repair</p>
        <p>Tel: 786 718 2919</p>
        <p>Email: marinautoglasscorp@gmail.com</p>
        <p>Address: 1414 SE 10th St, Cape Coral, FL 33990</p>
        <p>Hours: 8am-5pm</p>
      </div>
    </>
  );
}

export default App;
