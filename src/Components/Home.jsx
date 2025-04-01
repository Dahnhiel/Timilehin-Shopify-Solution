import HeroVideo from "../assets/hero-vid.mp4";

const Hero = () => {
  return (
    <div className="container-fluid min-vh-100 p-0 position-relative d-flex align-items-center justify-content-center" id="top-container">
      {/* Full-width hero video */}
      <div className="hero-video-container position-absolute w-100 h-100 top-0 start-0">
        <video autoPlay muted loop className="w-100 h-100 object-fit-cover">
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute w-100 h-100 top-0 start-0 bg-dark opacity-50"></div>
      </div>

      <div className="container position-relative">
        <section className="Hero-Section d-flex justify-content-center align-items-center text-center">
          <div className="row w-100 justify-content-center">
            {/* Hero Text Section */}
            <div className="col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center text-center bg-danger p-4 rounded">
              <h2 className="fw-bold text-white">
                Increase Your Customers Loyalty <br /> and Satisfaction
              </h2>
              <p className="text-light">
                We help businesses like yours earn more customers, stand out from competitors, and make more money.
              </p>
              <button className="btn btn-warning text-white fw-bold px-4 py-2">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
