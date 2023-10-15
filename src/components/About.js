import React from "react";
import "./About.css";
import marinreview from "../images/marinreview.png";
import marinreview2 from "../images/marinreview2.png";
import marinreview3 from "../images/marinreview3.png";

const About = () => {
  return (
    <>
      <h1 className="title" id="about">
        About us
      </h1>
      <div className="about shadow p-3 mb-5 bg-white rounded">
        <div className="container">
          <div className="row row-cols-2">
            <div className="col">
              {" "}
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
                "Se lo recomiendo muy buenos precios muy profecional se lo
                recomiendo no se van arrepentir "
              </p>
              <footer className="footer" style={{ color: "white" }}>
                {" "}
                <strong>
                  "Darian Castillo" - ⭐️⭐️⭐️⭐️⭐️ <p> google reviews</p>
                </strong>{" "}
              </footer>
              <img
                src={marinreview}
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
            <div className="col">
              {" "}
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
                "The service that Mr. Marín gave me was excellent, very formal,
                curious, exact at the time we left the service, without a doubt
                if I needed him again I would do the work with him, thank you
                very much"
              </p>
              <footer className="footer" style={{ color: "white" }}>
                {" "}
                <strong>
                  "Nilda Herrera" - ⭐️⭐️⭐️⭐️⭐️ <p> google reviews</p>
                </strong>{" "}
              </footer>
              <img
                src={marinreview3}
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
            <div className="col">
              {" "}
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
                "This is the best service on the west coast of Florida. I agreed
                with him to change my windshield on my old Ford. He ordered the
                glass very quickly, and the next day he said that he would
                arrive at 8.30am. And so it happened!!! He arrived exactly at
                8.30, I didn’t have to wait for him. I recommend this service to
                everyone."
              </p>
              <footer className="footer" style={{ color: "white" }}>
                {" "}
                <strong>
                  "Dmitri Massiouta" - ⭐️⭐️⭐️⭐️⭐️ <p> google reviews</p>
                </strong>{" "}
              </footer>
            </div>
            <div className="col">
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
                "Buen trabajo y buenos precios"
              </p>
              <footer className="footer" style={{ color: "white" }}>
                {" "}
                <strong>
                  "Judith Ruiz" - ⭐️⭐️⭐️⭐️⭐️ <p> google reviews</p>
                </strong>{" "}
              </footer>
              <img
                src={marinreview2}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
