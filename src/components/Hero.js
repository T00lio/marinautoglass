import React from "react";
import "../components/Hero.css";
import marinvan from "../images/marinvan.jpg";

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="welcome-message col shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <h3 className="title">
                Welcome to Marin Auto Glass Cape Coral, Fl
              </h3>
              <p></p>
              <p className="text">
                Mobile & shop installation Cape Coral: Windshield replacement/
                repair. Also we fix window motors & locks.<br></br> Tel: 786 718
                2919 Email: marinautoglasscorp@gmail.com <br></br>Hours: 8am-5pm
                <br></br> Address: 1414 SE 10th St, Cape Coral, FL 33990{" "}
              </p>
              <div className="d col-12">
                <button className="btn btn-danger col-12">Contactame</button>
              </div>
            </div>
          </div>
          <br></br>
          <section className="row">
            <h1
              className="display-1 text-center"
              style={{ color: "white", textAlign: "center", margin: "auto" }}
            >
              About Us
            </h1>
            <div class="container mt-5">
              <div class="row">
                <div class="col">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={marinvan} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text"></p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={marinvan} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={marinvan} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
