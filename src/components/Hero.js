import "./Hero.css";
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
            <div className="welcome-message">
              <h3 className="title">
                Welcome to Marin Auto Glass Cape Coral, Fl
              </h3>

              <p className="text">
                Mobile & shop installation Cape Coral: Windshield replacement/
                repair. Also we fix window motors & locks.<br></br> Tel: 786 718
                2919 Email: marinautoglasscorp@gmail.com <br></br>Hours: 8am-5pm
              </p>
              <br></br>
              <div className="row">
                <button
                  className="btn btn-danger col-10"
                  style={{
                    marginBottom: "2rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  onClick={handleClick}
                >
                  Call Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-phone-call"
                  >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <br></br>
          <section className="row">
            <h1
              className="title"
              id="services"
              style={{ color: "white", textAlign: "center", margin: "auto" }}
            >
              Services
            </h1>
            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col">
                  <div
                    className="card shadow p-3 mb-5 bg-white rounded"
                    style={{ width: "20rem" }}
                  >
                    <img
                      src={broken}
                      className="card-img-top object-fit-cover"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Reparamos todo tipo de vidrios de autos, camiones,
                        camionetas, etc.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div
                    className="card shadow p-3 mb-5 bg-white rounded"
                    style={{
                      width: "20rem",
                    }}
                  >
                    <img
                      src={rv}
                      className="card-img-top object-fit-cover"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        instalacion y delivery de vidrios para RVs, Motorhomes y
                        Campers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div
                    className="card shadow p-3 mb-5 bg-white rounded"
                    style={{ width: "20rem" }}
                  >
                    <img
                      src={windshield}
                      className="card-img-top object-fit-cover"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
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
