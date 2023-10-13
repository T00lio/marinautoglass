import "../components/Hero.css";
import rv from "../images/rv.jpg";
import broken from "../images/broken.jpg";
import windshield from "../images/window.jpg";

function HeroSection() {
  const phoneNumber = "17867182919";

  const handleClick = () => {
    const url = `tel:${phoneNumber}`;
    window.location.href = url;
  };
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
              </p>
              <div className="d col-12">
                <button onClick={handleClick} className="btn btn-danger col-12">
                  Contáctame
                </button>
              </div>
            </div>
          </div>
          <br></br>
          <section className="row">
            <h1
              className="display-1 text-center"
              style={{ color: "white", textAlign: "center", margin: "auto" }}
            >
              Services
            </h1>
            <div class="container mt-5 mb-5">
              <div class="row">
                <div class="col d-flex align-items-center justify-content-center">
                  <div class="card " style={{ width: "20rem" }}>
                    <img
                      src={broken}
                      class="card-img-top object-fit-cover"
                      alt="..."
                    />
                    <div class="card-body">
                      <p class="card-text">
                        Reparamos todo tipo de vidrios de autos, camiones,
                        camionetas, etc.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                  <div
                    class="card"
                    style={{
                      width: "20rem",
                    }}
                  >
                    <img
                      src={rv}
                      class="card-img-top object-fit-cover"
                      alt="..."
                    />
                    <div class="card-body">
                      <p class="card-text">
                        instalacion y delivery de vidrios para RVs, Motorhomes y
                        Campers
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col d-flex align-items-center justify-content-center">
                  <div class="card" style={{ width: "20rem" }}>
                    <img
                      src={windshield}
                      class="card-img-top object-fit-cover"
                      alt="..."
                    />
                    <div class="card-body">
                      <p class="card-text">
                        Reemplazamos y reparamos vidrios de puertas y ventanas,
                        control de motores y cerraduras de puertas y ventanas.
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
