import React from "react";
import "./About.css";
import marinvan from "../images/marinvan.jpg";

const About = () => {
  return (
    <>
      <h1 className="title">About us</h1>
      <div className="about shadow p-3 mb-5 bg-white rounded">
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "300",
            fontSize: "2rem",
            width: "80%",
            marginTop: "20px",
          }}
        >
          "This is the best service on the west coast of Florida. I agreed with
          him to change my windshield on my old Ford. He ordered the glass very
          quickly, and the next day he said that he would arrive at 8.30am. And
          so it happened!!! He arrived exactly at 8.30, I didn’t have to wait
          for him. I recommend this service to everyone."
        </p>
        <footer className="footer" style={{ color: "white" }}>
          {" "}
          <strong>
            "Dmitri Massiouta" - ⭐️⭐️⭐️⭐️⭐️ <p> google reviews</p>
          </strong>{" "}
        </footer>
        <img
          src={marinvan}
          className="img-fluid"
          alt="placeholder"
          style={{
            margin: "auto",
            marginTop: "20px",
            maxWidth: "80%",
            height: "auto",
            marginBottom: "2rem",
            borderRadius: "10px",
          }}
        />
      </div>
    </>
  );
};

export default About;
