import React from "react";
import marinvan from "../images/marinvan.jpg";
import "./Contact.css";

function ContactSection() {
  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ display: "flex", marginTop: "4rem", marginLeft: "auto" }}
      >
        <section id="contact">
          <h2 className="title">Contact Information</h2>
          <p className="text">Phone: 786-718-2919</p>
          {/* <p className="text">Address: 123 Main St, Anytown USA</p> */}
          <p className="text">Omar Beric</p>
          <img
            src={marinvan}
            alt="marinvan"
            style={{
              borderRadius: "1rem",
              marginBottom: "2rem",
              width: "100%",
              height: "auto",
            }}
          ></img>
        </section>
        <br />
      </div>
    </>
  );
}

export default ContactSection;
